import React from 'react'
import '../styles/_register.scss'
import logo from '../assests/SB-removebg-preview.png'
import { useState } from 'react'
import axios from '../utils/axios'

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
    localStorage.setItem('user', signIn.data.user.name)
    console.log(signIn.data)
    console.log(window.localStorage)
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
          <label>Email</label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
        </div>
        <div>
          <label>Password</label>
            <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

        </div>
         <input className='btn' type='submit' value='Login'/>
      </form>
      <div className='register_link'>
        <p>
          Not a member yet? <a href='/'><span>Register Here</span></a>
        </p>
      </div>
      </div>
    </div>
  )
}

export default Register