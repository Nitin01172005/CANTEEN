import React from 'react'

const Login = () => {
  return (
    <div id='login'>
        <div>
        <h2>Login</h2>
        <form>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  )
}

export default Login
