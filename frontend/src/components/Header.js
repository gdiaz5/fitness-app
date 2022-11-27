import React from 'react'
import '../styles/_header.scss'
import { Link } from 'react-router-dom';
import Login from './Login'
import About from './About';
import Footer from './Footer';
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
            <Link to='/register'>
              <button className='btn'>
                Login / Register
              </button>
            </Link>
          </div>
        </div>
        <div className='hero__img'>
          <img src={hero} alt=''></img>
        </div>
      </div>
      <Login />
      <About />
      <Footer />
    </div>
  )
}

export default Header