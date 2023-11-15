import React, {useState} from "react";
import "./login.styles.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { popup, createUserDocumentFromAuth, SignInAuthWithEmailAndPassword } from "../../utils/firebase";
import { useContext } from "react";
import { UserContext } from "../../context/userContext/user.context";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const { setCurrentUser, currentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  let { email, password } = formFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

   const signin = async () => {
    try {
      const { user } = await SignInAuthWithEmailAndPassword(email, password);
      setCurrentUser(user);
      navigate("/");
    } catch (error) {
     alert(error.code)
    }
    setFormFields(defaultFormFields);
  };
   

  const onSignInWithGoogleHandler = async () => {
    const {user} = await popup();
    console.log(user)
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
            name="email"
            onChange={onChangeHandler}
          />
          <TextField
            className="input-field"
            label="Password"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            type="password"
            name="password"
            onChange={onChangeHandler}
          />
        </div>
        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={signin}
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