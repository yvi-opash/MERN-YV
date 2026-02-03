
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Card, CardContent, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import './Admin_Home.css'

const Admin_Home = () => {
  const [userCount, setUserCount] = useState(0)

  useEffect(() => {
    const users = localStorage.getItem('users')
    if(users) {
      setUserCount(JSON.parse(users).length)
    }
  }, [])

  return (
    <>
    <Header/>
    <div className="dashboard-container">
      <Typography variant="h3" gutterBottom>
        Admin Dashboard
      </Typography>
      
      <div className="cards-container">
        <div className="card-item">
          <Card>
            <CardContent>
              <Typography variant="h5" color="primary">
                Total Users
              </Typography>
              <Typography variant="h2">
                {userCount}
              </Typography>
            </CardContent>
          </Card>
        </div>
        
        <div className="card-item">
          <Card>
            <CardContent>
              <Typography variant="h5" color="secondary">
                Admin 
              </Typography>
              <Typography variant="h2">
                1
              </Typography>
            </CardContent>
          </Card>
        </div>
        
        <div className="card-item">
          <Card>
            <CardContent>
              <Typography variant="h5" color="success.main">
                System Status
              </Typography>
              <Typography variant="h6" color="success.main">
                Online
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Admin_Home