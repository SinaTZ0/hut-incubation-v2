import type { ReactNode } from 'react'
import styles from './PageContainer.module.css'

export function PageContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>
}
