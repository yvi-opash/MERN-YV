import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEffect, useState } from 'react'
import './Userlist.css'

type user = {
  name: string,
  email: string,
  role: string,
  age: number,
  city: string,
  country: string
}


const Userlist = () => {

  const [Userlist, setUserlist] = useState<user[]>()

    useEffect(() => {
      const users = localStorage.getItem('users')
      if(users){
        setUserlist(JSON.parse(users))
      }
    },[])


  const handleuserdelet = (index: number) => {
    const updatedUsers = Userlist?.filter((_, i) => i !== index)
    setUserlist(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers))
  }

  return (
    <>
    <Header/>
    <div className="userlist-container">
      <h1 className="userlist-title">User List</h1>
      <div className="table-wrapper">
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>age</TableCell>
              <TableCell>city</TableCell>
              <TableCell>country</TableCell>
              <TableCell>Role</TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {Userlist?.map((elem, key) => {
            return(
            <TableRow key={key}>
              <TableCell>{elem.name}</TableCell>
              <TableCell>{elem.email}</TableCell>
              <TableCell>{elem.age}</TableCell>
              <TableCell>{elem.city}</TableCell>
              <TableCell>{elem.country}</TableCell>
              <TableCell>{elem.role}</TableCell>
              <TableCell><button onClick={() => handleuserdelet(key)}>Delete</button></TableCell>
            </TableRow>
            )
          })}
          
            
          </TableBody>
        </Table>
        </TableContainer>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Userlist