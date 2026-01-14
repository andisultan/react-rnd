import { Outlet } from 'react-router'
import './style.scss'

export default function AuthLayout() {
  return (
    <div className="auth">
      <div className="auth__left"></div>
      <div className="auth__right">
        <Outlet />
      </div>
    </div>
  )
}