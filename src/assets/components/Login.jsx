import React from 'react'
import { loginURL } from '../../spotify'

function Login() {
  return (
    <div className='login-wrapper'>
        <h1>Spotify Login Page</h1>
        <a href={loginURL}>Login with spotify</a>
    </div>
  )
}

export default Login