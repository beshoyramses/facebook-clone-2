import React, { Fragment, useState, useContext } from 'react';
import HeaderComponent from '../header/header.component';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import "./signup.styles.css";
import { UserContext } from '../../context/userContext/user.context';
import {SignUpWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase";

const SignupComponent = () => {

   const defaultFormFields = {
    email: "",
    password: "",
    repeatPassword: "",
    username: "",
    img:"",
   }

  const navigate = useNavigate()
  const {setCurrentUser} = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  let {email, password,  repeatPassword, username, img} = formFields;

  const onChangeHandler = (event) => {
        const {name, value}  = event.target;
        setFormFields({...formFields, [name]: value});
        console.log(formFields)
  }

  const signup = async () => {

    if(password !== repeatPassword) {
      alert("try match the passwords");
      return false;
  }
  try {
      const {user} = await SignUpWithEmailAndPassword(email,password);
      user.displayName = username;
      user.photoURL = img;
      await createUserDocumentFromAuth(user);
      setCurrentUser(user);
      navigate("/")

  } catch (error) {
      if(error.code === "auth/email-already-in-use") {
          alert("email is already use, try another one")
      }
      else {
          alert("write a good password");
          return false;
      }
  }
  setFormFields(defaultFormFields)


  }
    return (
          <Fragment>
              <HeaderComponent />
        <div className='signup'>

            <form action='#'>

<div className='inputs-container'>
  <TextField
  className='input-field'

    label="Email"
    id="outlined-size-small"
    defaultValue=""
    size="small"
    name='email'
    onChange={onChangeHandler}
    value={email}
  />

  <TextField
  className='input-field'
    label="Password"
    id="outlined-size-small"
    defaultValue=""
    size="small"
    type='password'
    name='password'
    onChange={onChangeHandler}
    value={password}
  />
  
  <TextField
  className='input-field'
    label="Repeat Password"
    id="outlined-size-small"
    defaultValue=""
    size="small"
    type='password'
    name='repeatPassword'
   onChange={onChangeHandler}
   value={repeatPassword}
  />

<TextField
  className='input-field'
    label="Username"
    id="outlined-size-small"
    defaultValue=""
    size="small"
    type='text'
    name='username'
    value={username}
    onChange={onChangeHandler}
  />

<TextField
  className='input-field'
    label="image URL"
    id="outlined-size-small"
    defaultValue=""
    size="small"
    type='text'
    name='img'
    value={img}
    onChange={onChangeHandler}
  />

<Button variant="contained" color="success" className='create-account' onClick={signup}>
        Create New Account
      </Button>
</div>

       

      </form>

        </div>
          </Fragment>
    );
}

export default SignupComponent;
