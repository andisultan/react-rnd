import type { ReactNode } from 'react'
import './style.scss'

export default function PageTitle({ children } : { children: ReactNode }) {
  return (
    <h2 className="page-title">{children}</h2>
  )
}