import React from 'react'
import '../styles/_register.scss'
import logo from '../assests/SB-removebg-preview.png'

function Register() {
  return (
    <div className='register'>
      <div className='register_form'>
        <img src={logo} alt='' />
      <form>
        <h1>Swole Buddy</h1>
        <div>
          <label>
            <input type='text' placeholder='Email'/>
          </label>
        </div>
        <div>
          <label>
            <input type='text' placeholder='Password'/>
          </label>
        </div>
         <input className='btn' type='submit' value='Login'/>
      </form>
      </div>
    </div>
  )
}

export default Register