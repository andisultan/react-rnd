import { Link } from 'react-router'
import './style.scss'

export default function NotFoundPage() {
  return (
    <main className="page-404">
      <h1>Page is not found</h1>
      <Link to="/login" className="button button--md button--primary">Login</Link>
    </main>
  )
}