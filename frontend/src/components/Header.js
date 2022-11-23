import React from 'react'
import '../styles/_header.scss'
import axios from '../axios'
import {useState} from 'react'
import Login from './Login'
import logo from '../assests/SB-removebg-preview.png'
import hero from '../assests/Untitled_design-removebg-preview.png'

function Header() {














  return (
    <div className='header'>
      <div className='header__logo'>
        <div>
          <img src={logo} alt=''></img>
        </div>
        <div>
          <h1>Swole Buddy</h1>
        </div>
      </div>
      <div className='header__info'>
        <div className='header__info__copy'>
          <h1>The last gym partner you'll ever have</h1>
          <p>Everything you need to meet your fitness goals. All in one app</p>
          <div>
            <button>
              Login / Register
            </button>
          </div>
        </div>
        <div className='hero__img'>
          <img src={hero} alt=''></img>
        </div>
      </div>
      <Login />
    </div>
  )
}

export default Header