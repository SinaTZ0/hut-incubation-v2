import { Button } from '@base-ui/react/button'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './ActionLink.module.css'

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'outline' | 'text' | 'light'
  icon?: ReactNode
}

export function ActionLink({
  variant = 'primary',
  icon,
  className = '',
  children,
  ...props
}: ActionLinkProps) {
  return (
    <Button
      render={<a {...props} />}
      nativeButton={false}
      className={`${styles.link} ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon}
    </Button>
  )
}
