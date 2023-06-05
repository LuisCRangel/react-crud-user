import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import CardUsers from './assets/Components/CardUsers'
import Form from './assets/Components/Form'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const getAllUsers = () => {
    const URL = 'https://users-crud.academlo.tech/users/  '
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  },[])

  const handleOpenForm = () => setIsFormOpen(true)

  const handleCloseForm = () => setIsFormOpen (false)

  console.log(users)

  return (
    <div className="App">
    <h1>CRUD USERS BY ⌀LuiskR⌀</h1>
    <div className='card_btn'>
    <button className='openForm__btn' onClick={handleOpenForm}>{updateInfo ? " + Update User" : " + Create New User"}</button>
    </div>
    <div className={isFormOpen ? 'form__container' : 'form-none'}>
    <Form
      getAllUsers={getAllUsers}
      updateInfo={updateInfo}
      setUpdateInfo={setUpdateInfo}
      handleCloseForm={handleCloseForm}
      />
    </div>
    <div className='card__container'>
      {
        users?.map(user => (
          <CardUsers
          key={user.id}
          user={user}
          getAllUsers={getAllUsers}
          setUpdateInfo={ setUpdateInfo}
          handleOpenForm={handleOpenForm}
          />
           
        ))
      }
    </div>
    </div>
  )
}

export default App
