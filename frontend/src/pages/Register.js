import React from 'react'
import '../styles/_register.scss'
import logo from '../assests/SB-removebg-preview.png'
import { useState } from 'react'
import axios from '../axios'

function Register() {

  // State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const signIn = await axios.post('/login', {
      email: email,
      password: password
    })
    console.log(signIn.data)
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