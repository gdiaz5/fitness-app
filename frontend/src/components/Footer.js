import React from 'react'
import '../styles/_footer.scss'
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <h2>swole buddy</h2>
      <div className='footer_social'>
        <a href='/'>
          <FaInstagram  color='white' size={25}/>
        </a>
        <a href='https://github.com/gdiaz5'>
          <FaGithub  color='white' size={25}/>
        </a>
        <a href='/'>
          <FaYoutube  color='white' size={25}/>
        </a>
      </div>
      <div className='footer_link'>
        <a href='/'>
          <p>Home</p>
        </a>
        <a href='/'>
          <p>Sign Up</p>
        </a>
        <a href='/'>
          <p>About Us</p>
        </a>
        <a href='/'>
          <p>Blog</p>
        </a>
      </div>
    </div>
  )
}

export default Footer