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
          <h1>Weightlifting Tracking App</h1>
          <p>Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.</p>
          <Login />
        </div>
        <div className='hero__img'>
          <img src={hero} alt=''></img>
        </div>
      </div>

    </div>
  )
}

export default Header