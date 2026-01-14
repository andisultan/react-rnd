import { Outlet } from 'react-router'
import ListMenu from './list-menu'
import './style.scss'

export default function DashboardLayout() {
  return (
    <div className="dashboard">
      <aside className="dashboard__sidebar">
        <h1 className="dashboard__logo">FP - Flup</h1>
        <ListMenu />
      </aside>
      <main className="dashboard__main">
        <Outlet />
      </main>
    </div>
  )
}