import React from 'react'
import '../styles/_header.scss'
import axios from '../axios'
import {useState} from 'react'
import Login from './Login'
import logo from '../assests/wole-removebg-preview.png'

function Header() {














  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={logo} alt=''></img>
      </div>
      <div className='header__menu'>
        <a href='./'>Home</a>
        <a href='./'>Service</a>
        <a href='./'>About Us</a>
        <a href='./'>Register</a>
      </div>
      <Login />
    </div>
  )
}

export default Header