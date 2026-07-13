export type IconName =
  | 'arrow'
  | 'search'
  | 'cube'
  | 'growth'
  | 'people'
  | 'globe'
  | 'document'
  | 'code'
  | 'megaphone'
  | 'check'
  | 'download'
  | 'play'

type IconProps = {
  name: IconName
  size?: number
  className?: string
}

export function Icon({ name, size = 24, className }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true,
  }

  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M19 12H5" /><path d="m11 18-6-6 6-6" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /><path d="M10.5 7.5v6M7.5 10.5h6" /></>,
    cube: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>,
    growth: <><path d="M4 19h16" /><path d="m5 15 5-5 3 3 6-7" /><path d="M15 6h4v4" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3.5 20v-2.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V20" /><path d="M15 5.3a3 3 0 0 1 0 5.4M17 13a4.5 4.5 0 0 1 3.5 4.4V20" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.4 2.5 3.5 5.5 3.5 9S14.4 18.5 12 21c-2.4-2.5-3.5-5.5-3.5-9S9.6 5.5 12 3Z" /></>,
    document: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4M9 12h6M9 16h4" /></>,
    code: <><path d="m9 8-4 4 4 4M15 8l4 4-4 4M13 6l-2 12" /></>,
    megaphone: <><path d="M4 13V9h4l9-4v12l-9-4H4Z" /><path d="m8 13 2 6H7l-2-6M20 9v4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5M5 21h14" /></>,
    play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4Z" /></>,
  }

  return <svg {...common}>{paths[name]}</svg>
}
