import React from 'react'
import '../styles/_header.scss'
import axios from '../axios'
import {useState} from 'react'

function Header() {


const [user, setUser] = useState([])


const getTest = async () => {

    await axios.post('/login', {
      email: "monkeybaldsdscls1234@gmail.com",
      password: "skmbchc123"
    }).then((res) => {
      setUser(res.data)
    }).catch((err) => {
      console.log(err)
    })

    console.log(user)
}



// getTest()




  return (
    <div className='header'>
      <div className='header__logo'>
        <img src='./assests/gdz.png' alt=''></img>
      </div>
      <div className='header__menu'>
        <a href='./'>Home</a>
        <a href='./'>Service</a>
        <a href='./'>About Us</a>
        <a href='./'>Register</a>
      </div>
      <div className='header__loginbtn'>
        <button onClick={getTest}>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Header