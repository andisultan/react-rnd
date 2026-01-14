import { Link } from "react-router";
import { Button, Input } from "../../../shared/ui";

export default function LoginPage() {
  return (
    <>
      <h1>Login Page</h1>
      <form className="form">
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" placeholder="youremail@domain.com" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <Input type="password" id="password" placeholder="your password" />
        </div>
        <Button fullWidth>Login</Button>
        <p>Don't have an account? <Link to={'register'}>Register</Link></p>
      </form>
    </>
  )
}