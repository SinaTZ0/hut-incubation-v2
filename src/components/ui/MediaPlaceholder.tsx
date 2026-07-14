import { motion, useReducedMotion } from 'motion/react'
import styles from './MediaPlaceholder.module.css'

export type MediaShape = 'hero' | 'arch' | 'cutCorner' | 'capsule' | 'offset'

type MediaPlaceholderProps = {
  label: string
  shape?: MediaShape
  tone?: string
  className?: string
  drift?: boolean
  children?: React.ReactNode
}

export function MediaPlaceholder({
  label,
  shape = 'cutCorner',
  tone = '#64766c',
  className = '',
  drift = false,
  children,
}: MediaPlaceholderProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={`${styles.media} ${styles[shape]} ${className}`}
      style={{ '--media-tone': tone } as React.CSSProperties}
      role="img"
      aria-label={label}
      animate={drift && !reduceMotion ? { scale: [1, 1.035, 1], y: [0, -10, 0] } : undefined}
      transition={drift && !reduceMotion ? { duration: 11, repeat: Infinity, ease: 'easeInOut' } : undefined}
    >
      <span className={styles.grid} aria-hidden="true" />
      {children}
      <span className={styles.label}>{label}</span>
    </motion.div>
  )
}
