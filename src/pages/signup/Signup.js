import React from 'react'
import styles from './Signup.module.css'
import { useState } from 'react'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayname, setDisplayname] = useState('')


  const handleSubmit =(e =>{
    e.preventDefault()
    console.log("email:",  email)
    console.log("password:",  password)
    console.log("displayname:",  displayname)
  })

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
    <h2>Signup</h2>

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

    <label>
      <span>display name:</span>
      <input 
      type="text" 
      name="displayname"
      onChange={(e) => setDisplayname(e.target.value)}
      value={displayname} 
      />
      
    </label>

    <button className="btn" type="submit">Login</button>
    </form>
  )
}


export default Signup