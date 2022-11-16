import React from 'react'
import '../styles/_login.scss'
import { useState } from 'react'
import axios from '../axios'

function Login() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


// Logs in existing users
const loginUser = async (event) => {
  event.preventDefault()
  // try {
  //   const user =  await axios.post('/login', {
  //     email: email,
  //     password: password
  //   })
  //   console.log(user.data)
  // } catch(error) {
  //   throw new Error('try again')
  // }
  // setEmail('')
  // setPassword('')
}






  return (
    <div className='login'>
        <button>
          Sign In
        </button>
        <button>
          Sign In
        </button>
    </div>
  )
}

export default Login