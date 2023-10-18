import React from 'react';
import "./login.styles.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { popup, createUserDocumentFromAuth } from '../../utils/firebase';
import { useContext } from 'react';
import {UserContext} from "../../context/userContext/user.context";

import { useNavigate } from 'react-router-dom';
const LoginComponent = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSignInWithGoogleHandler = async () => {
    const { user } = await popup();
    await createUserDocumentFromAuth(user);
    setCurrentUser(user);
    navigate("/");
  };

  return (
    <div className="login">
      <form action="#">
        <div className="inputs-container">
          <TextField
            className="input-field"
            label="Email"
            id="outlined-size-small"
            defaultValue=""
            size="small"
          />
          <TextField
            className="input-field"
            label="Password"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            type="password"
          />
        </div>
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={onSignInWithGoogleHandler}
        >
          Sign In
        </Button>
        <Link to={"/signup"}>
          <Button
            variant="contained"
            color="success"
            className="signup-button"
          >
            Create New Account
          </Button>
        </Link>
        <Button
          variant="outlined"
          color="error"
          className="google"
          onClick={onSignInWithGoogleHandler}
        >
          Sign in with Google
        </Button>
      </form>
    </div>
  );
};

export default LoginComponent;