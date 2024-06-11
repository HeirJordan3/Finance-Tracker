import React from 'react'
import styles from './Signup.module.css'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayname, setDisplayname] = useState('')

  const { signup, error, isPending } = useSignup()


  const handleSubmit =(e =>{
    e.preventDefault()
    signup(email, password, displayname)

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

    {!isPending && <button className="btn" type="submit">Signup</button>}
    {isPending && <button className="btn" disabled>Loading...</button> } 
    {error && <p>{error}</p>}
    
    </form>
  )
}


export default Signup