import { useEffect, useRef } from "react";
import styles from "./CursorGrid.module.css";

type Falloff = "linear" | "smooth" | "sharp";

interface CursorGridProps {
  cellSize?: number;
  color?: string;
  radius?: number;
  falloff?: Falloff;
  holdTime?: number;
  fadeDuration?: number;
  lineWidth?: number;
  maxOpacity?: number;
  fillOpacity?: number;
  gridOpacity?: number;
  cellRadius?: number;
  clickPulse?: boolean;
  pulseSpeed?: number;
  className?: string;
}

interface GridConfig {
  cellSize: number;
  color: string;
  radius: number;
  falloff: Falloff;
  holdTime: number;
  fadeDuration: number;
  lineWidth: number;
  maxOpacity: number;
  fillOpacity: number;
  gridOpacity: number;
  cellRadius: number;
  clickPulse: boolean;
  pulseSpeed: number;
}

interface Pulse {
  x: number;
  y: number;
  startedAt: number;
}

const falloffCurves: Record<Falloff, (value: number) => number> = {
  linear: (value) => value,
  smooth: (value) => value * value * (3 - 2 * value),
  sharp: (value) => value * value * value,
};

function hexToRgb(hex: string): [number, number, number] {
  const compact = hex.replace("#", "");
  const value = compact.length === 3 ? compact.split("").map((character) => character + character).join("") : compact;
  const number = Number.parseInt(value, 16);
  return [(number >> 16) & 255, (number >> 8) & 255, number & 255];
}

export function CursorGrid({
  cellSize = 70,
  color = "#d946ef",
  radius = 140,
  falloff = "smooth",
  holdTime = 400,
  fadeDuration = 800,
  lineWidth = 1.2,
  maxOpacity = 1,
  fillOpacity = 0,
  gridOpacity = 0,
  cellRadius = 0,
  clickPulse = true,
  pulseSpeed = 600,
  className = "",
}: CursorGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const configRef = useRef<GridConfig>({} as GridConfig);
  const wakeRef = useRef<(() => void) | null>(null);

  configRef.current = {
    cellSize,
    color,
    radius,
    falloff,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    cellRadius,
    clickPulse,
    pulseSpeed,
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const eventTarget = container.parentElement ?? container;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const pulses: Pulse[] = [];
    let columns = 0;
    let rows = 0;
    let offsetX = 0;
    let offsetY = 0;
    let alphas = new Float32Array(0);
    let touched = new Float64Array(0);
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let running = false;
    let lastFrame = 0;

    const rebuild = () => {
      const config = configRef.current;
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      columns = Math.ceil(width / config.cellSize) + 1;
      rows = Math.ceil(height / config.cellSize) + 1;
      offsetX = (width - columns * config.cellSize) / 2;
      offsetY = (height - rows * config.cellSize) / 2;
      alphas = new Float32Array(columns * rows);
      touched = new Float64Array(columns * rows);
    };

    const cellCenter = (index: number): [number, number] => {
      const config = configRef.current;
      return [
        offsetX + (index % columns) * config.cellSize + config.cellSize / 2,
        offsetY + Math.floor(index / columns) * config.cellSize + config.cellSize / 2,
      ];
    };

    const energize = (x: number, y: number) => {
      const config = configRef.current;
      const activeRadius = Math.max(config.radius, 1);
      const ease = falloffCurves[config.falloff] ?? falloffCurves.linear;
      const now = performance.now();
      const minimumColumn = Math.max(0, Math.floor((x - activeRadius - offsetX) / config.cellSize));
      const maximumColumn = Math.min(columns - 1, Math.floor((x + activeRadius - offsetX) / config.cellSize));
      const minimumRow = Math.max(0, Math.floor((y - activeRadius - offsetY) / config.cellSize));
      const maximumRow = Math.min(rows - 1, Math.floor((y + activeRadius - offsetY) / config.cellSize));

      for (let row = minimumRow; row <= maximumRow; row += 1) {
        for (let column = minimumColumn; column <= maximumColumn; column += 1) {
          const index = row * columns + column;
          const [centerX, centerY] = cellCenter(index);
          const distance = Math.hypot(centerX - x, centerY - y);
          if (distance > activeRadius) continue;

          const level = ease(1 - distance / activeRadius) * config.maxOpacity;
          if (level > alphas[index]) alphas[index] = level;
          if (level > 0) touched[index] = now;
        }
      }
    };

    const draw = (now: number) => {
      const config = configRef.current;
      const delta = Math.min(now - lastFrame, 50);
      const [red, green, blue] = hexToRgb(config.color);
      lastFrame = now;
      context.clearRect(0, 0, width, height);

      if (config.gridOpacity > 0) {
        context.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${config.gridOpacity})`;
        context.lineWidth = 1;
        context.beginPath();
        for (let column = 0; column <= columns; column += 1) {
          const x = Math.round(offsetX + column * config.cellSize) + 0.5;
          context.moveTo(x, 0);
          context.lineTo(x, height);
        }
        for (let row = 0; row <= rows; row += 1) {
          const y = Math.round(offsetY + row * config.cellSize) + 0.5;
          context.moveTo(0, y);
          context.lineTo(width, y);
        }
        context.stroke();
      }

      for (let pulseIndex = pulses.length - 1; pulseIndex >= 0; pulseIndex -= 1) {
        const pulse = pulses[pulseIndex];
        const ringRadius = ((now - pulse.startedAt) / 1000) * config.pulseSpeed;
        if (ringRadius > Math.hypot(width, height)) {
          pulses.splice(pulseIndex, 1);
          continue;
        }

        const band = config.cellSize;
        const minimumColumn = Math.max(0, Math.floor((pulse.x - ringRadius - band - offsetX) / config.cellSize));
        const maximumColumn = Math.min(columns - 1, Math.floor((pulse.x + ringRadius + band - offsetX) / config.cellSize));
        const minimumRow = Math.max(0, Math.floor((pulse.y - ringRadius - band - offsetY) / config.cellSize));
        const maximumRow = Math.min(rows - 1, Math.floor((pulse.y + ringRadius + band - offsetY) / config.cellSize));

        for (let row = minimumRow; row <= maximumRow; row += 1) {
          for (let column = minimumColumn; column <= maximumColumn; column += 1) {
            const index = row * columns + column;
            const [centerX, centerY] = cellCenter(index);
            const distance = Math.hypot(centerX - pulse.x, centerY - pulse.y);
            if (Math.abs(distance - ringRadius) < band / 2 && config.maxOpacity > alphas[index]) {
              alphas[index] = config.maxOpacity;
              touched[index] = now;
            }
          }
        }
      }

      let hasVisibleCells = pulses.length > 0;
      const fadeStep = delta / Math.max(config.fadeDuration, 16);
      const halfCell = config.cellSize / 2;

      for (let index = 0; index < alphas.length; index += 1) {
        let alpha = alphas[index];
        if (alpha <= 0) continue;
        if (now - touched[index] > config.holdTime) {
          alpha = Math.max(0, alpha - fadeStep);
          alphas[index] = alpha;
          if (alpha <= 0) continue;
        }

        hasVisibleCells = true;
        const [centerX, centerY] = cellCenter(index);
        const gradient = context.createRadialGradient(centerX, centerY, halfCell * 0.1, centerX, centerY, config.cellSize);
        gradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, ${alpha})`);
        gradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);

        const x = centerX - halfCell + 0.5;
        const y = centerY - halfCell + 0.5;
        const size = config.cellSize - 1;
        context.beginPath();
        if (config.cellRadius > 0) context.roundRect(x, y, size, size, config.cellRadius);
        else context.rect(x, y, size, size);
        if (config.fillOpacity > 0) {
          context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha * config.fillOpacity})`;
          context.fill();
        }
        context.strokeStyle = gradient;
        context.lineWidth = config.lineWidth;
        context.stroke();
      }

      if (hasVisibleCells) animationFrame = requestAnimationFrame(draw);
      else running = false;
    };

    const wake = () => {
      if (running) return;
      running = true;
      lastFrame = performance.now();
      animationFrame = requestAnimationFrame(draw);
    };
    wakeRef.current = wake;

    const localCoordinates = (event: PointerEvent): [number, number] => {
      const bounds = canvas.getBoundingClientRect();
      return [event.clientX - bounds.left, event.clientY - bounds.top];
    };

    const handlePointerMove = (event: PointerEvent) => {
      const [x, y] = localCoordinates(event);
      energize(x, y);
      wake();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!configRef.current.clickPulse) return;
      const [x, y] = localCoordinates(event);
      pulses.push({ x, y, startedAt: performance.now() });
      wake();
    };

    const resizeObserver = new ResizeObserver(() => {
      rebuild();
      wake();
    });
    resizeObserver.observe(container);
    rebuild();
    wake();
    eventTarget.addEventListener("pointermove", handlePointerMove);
    eventTarget.addEventListener("pointerdown", handlePointerDown);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      eventTarget.removeEventListener("pointermove", handlePointerMove);
      eventTarget.removeEventListener("pointerdown", handlePointerDown);
      wakeRef.current = null;
    };
  }, [cellSize]);

  useEffect(() => {
    wakeRef.current?.();
  }, [cellRadius, color, fillOpacity, gridOpacity, lineWidth, maxOpacity]);

  return (
    <div ref={containerRef} className={`${styles.root} ${className}`.trim()} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
