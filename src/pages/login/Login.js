import styles from './Login.module.css'
import React from 'react'
import { useState } from 'react'



const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password :', password)

  }


  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>

      <label>
        <span>Email</span>
        <input 
        type="email" 
        name="email" 
         onChange={(e) => setEmail(e.target.value)}
         value={email}
        
        
        />
       
      </label>

      <label>
        <span>Password</span>
        <input 
        type="password" 
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password} 
        />
        
      </label>

      <button className="btn" type="submit">Login</button>
      
      
      </form>
  )
}

export default Login