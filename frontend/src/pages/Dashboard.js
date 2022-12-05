import React from 'react'
import axios from '../utils/axios'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

function Dashboard() {

  const [authorizedUser, setauthorizedUser] = useState({});
  const [name, setName] = useState('')
  const [trainingHistory, setTrainingHistory] = useState()
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
      setName(userInfo.data.name)
      setTrainingHistory(userInfo.data['payload'])
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
          <h2>{`${name}'s Dashboard`}</h2>
          <div>

          </div>
        </div>) : (
        <Navigate to='/register' />
      )}
    </div>
  )
}

export default Dashboard