import React from 'react'
import '../styles/_login.scss'
import { useState } from 'react'
import axios from '../axios'

function Login() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


// Logs in existing users
// const loginUser = async (event) => {
//   event.preventDefault()
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
//}






  return (
    <div className='login'>
            <div className='info_display'>
        <div className='offer'>
          <h3>Accountabily</h3>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary
          <div className='icon'>
            icon
          </div>
        </div>
        <div className='offer'>
          <h3>Structure</h3>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary
          <div className='icon'>
            icon
          </div>
        </div>
        <div className='offer'>
          <h3>Guidance</h3>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary
          <div className='icon'>
            icon
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login