import React from "react";
import axios from 'axios'
import 'boxicons'

const CardUsers = ({ user, getAllUsers,  setUpdateInfo }) => {
  
    const deleteUser = () => {
        const URL= `https://users-crud1.herokuapp.com/users/${user.id}`
        axios.delete(URL)
        .then(res =>{
            console.log(res.data)
            getAllUsers()
        })
        .catch(err => console.log(err))
    }

    const handleUpdateClick = () =>{
      setUpdateInfo(user)
    }

  return (
    <article className="card">
      <h2 className="card__tittle">
        {user.first_name} {user.last_name}
      </h2>
      <hr className="card__hr"/>
      <ul className="card__list">
        <li className="card__item">
          Email: <span className="card__span">{user.email}</span>
        </li>
        <li className="card__item">
          Birthday: <span className="card__span">{user.birthday} </span>
          <div className="item-gift"><box-icon name='gift'></box-icon></div>
        </li>
      </ul>
      <footer className="card__footer">
      <button onClick={deleteUser} className="card__btn"><box-icon className='icon' name='trash' color='#ffffff' ></box-icon></button>
      <button onClick={handleUpdateClick} className="card__btn"><box-icon name='edit' color='#ffffff' ></box-icon></button>
      </footer>
    </article>
  );
};

export default CardUsers;

