import React from 'react'
import '../styles/_login.scss'
import { useState } from 'react'
import axios from '../axios'
import { FaHandshake, FaCalendarAlt, FaMapSigns  } from "react-icons/fa";




function Login() {
  return (
    <div className='login'>
        <div className='offer'>
          <div className='icon'>
            <FaHandshake size={65}/>
          </div>
          <h3>Accountabily</h3>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary
        </div>
        <div className='offer'>
          <div className='icon'>
            <FaCalendarAlt size={65}/>
          </div>
          <h3>Structure</h3>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary
        </div>
        <div className='offer'>
          <div className='icon'>
            <FaMapSigns  size={65}/>
          </div>
          <h3>Guidance</h3>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary
        </div>
    </div>
  )
}

export default Login