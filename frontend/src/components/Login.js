import React from 'react'
import '../styles/_login.scss'
import { FaHandshake, FaCalendarAlt, FaMapSigns  } from "react-icons/fa";




function Login() {
  return (
    <div className='login'>
        <div className='offer'>
          <div className='icon'>
            <FaHandshake size={65} color='green'/>
          </div>
          <h2>Accountabily</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary</p>
        </div>
        <div className='offer'>
          <div className='icon'>
            <FaCalendarAlt size={65} color='red'/>
          </div>
          <h2>Structure</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary</p>
        </div>
        <div className='offer'>
          <div className='icon'>
            <FaMapSigns  size={65} color='orange'/>
          </div>
          <h2>Guidance</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary</p>
        </div>
    </div>
  )
}

export default Login