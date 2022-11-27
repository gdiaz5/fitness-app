import React from 'react'
import '../styles/_register.scss'
import logo from '../assests/SB-removebg-preview.png'
import { useState } from 'react'

function Register() {

  // State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    setEmail('')
    setPassword('')
  }



  return (
    <div className='register'>
      <div className='register_form'>
        <img src={logo} alt='' />
      <form onSubmit={handleSubmit}>
        <h1>Swole Buddy</h1>
        <div>
          <label>
            <input type='text' value={email} placeholder='Email'
            onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            <input type='password' value={password} placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}/>
          </label>
        </div>
         <input className='btn' type='submit' value='Login'/>
      </form>
      </div>
    </div>
  )
}

export default Register