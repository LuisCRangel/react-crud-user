import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
};

const Form = ({ getAllUsers, updateInfo, setUpdateInfo,handleCloseForm }) => {
  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  const createUser = (data) => {
    const URL = "https://users-crud1.herokuapp.com/users/";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

const updateUser = data => {
    const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
    axios.patch(URL, data)
    .then( res => {
        console.log(res.data)
        getAllUsers()
    })
    .catch(err => console.log(err))
}

  const { register, reset, handleSubmit } = useForm();

  const submit = (data) => {
    if(updateInfo){
        //update User
        updateUser(data)
        setUpdateInfo()
    }else {
        //Create New Movie
      createUser(data);
    }
    reset(defaultValues);
    handleCloseForm()
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <div onClick={handleCloseForm} className="form__equis">×</div>
      <h2>{updateInfo ? "Update User Information" : "Create New Movie"}</h2>
      <ul className="form__list">
        <li className="form__item">
          <label htmlFor="first_name">First Name</label>
          <input {...register("first_name")} type="text" id="first_name" />
        </li>
        <li className="form__item">
          <label htmlFor="last_name">Last Name</label>
          <input {...register("last_name")} type="text" id="last_name" />
        </li>
        <li className="form__item">
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" id="email" />
        </li>
        <li className="form__item">
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" id="password" />
        </li>
        <li className="form__item">
          <label htmlFor="birthday">Birthday</label>
          <input {...register("birthday")} type="date" id="birthday" />
        </li>
      </ul>
      <button className="form__btn">{updateInfo ? "Update" : "Create"}</button>
    </form>
  );
};

export default Form;
