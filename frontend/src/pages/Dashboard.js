import React from 'react'
import axios from '../utils/axios'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

function Dashboard() {

  const [authorizedUser, setauthorizedUser] = useState({});
  // This will change. Storing token in local storage for now. Will secure later
  const [token, setToken] = useState('')
  const [dashboard, setDashboard] = useState({})

  useEffect( () => {
    const fetchDashboard = async () => {
      const isUser = JSON.parse(localStorage.getItem('user'));
      const userInfo = await axios('/exercise/dashboard', {
        headers: {
          Authorization: `Bearer ${isUser.token}`
        }
      })
      setDashboard( dashboard  => ({
        ...userInfo
      }))
    }
    fetchDashboard()
  }, []);


  return (
    <div>
      {(authorizedUser) ?
      ( <div>
          <h2> welcome{JSON.stringify(dashboard.data)}</h2>
          <div>

          </div>
        </div>) : (
        <Navigate to='/register' />
      )}
    </div>
  )
}

export default Dashboard