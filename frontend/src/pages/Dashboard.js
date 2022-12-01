import React from 'react'
import axios from '../utils/axios'
import { useEffect, useState } from 'react'

function Dashboard() {

  const [authorizedUser, setauthorizedUser] = useState(null);
  const [dashboard, setDashboard] = useState({})

  useEffect( () => {
    const fetchDashboard = async () => {
      const isUser = localStorage.getItem('user');
      if (isUser) {
        setauthorizedUser(isUser);
        const userInfo = await axios('/exercise/dashboard')
        setDashboard(userInfo);
        console.log(authorizedUser)
      }
    }

    fetchDashboard()

  }, [authorizedUser]);


  return (
    <div>
      <h2>{authorizedUser}</h2>
    </div>
  )
}

export default Dashboard