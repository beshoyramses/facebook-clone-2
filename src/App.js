import './App.css';
import HeaderComponent from './components/header/header.component';
import SidebarComponent from './components/sidebar/sidebar.component';
import MainComponent from './components/main/main.component';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/routes/Home';
import LoginComponent from './components/login/login.component';
import { useContext } from 'react';
import { UserContext } from './context/userContext/user.context';
import SignupComponent from './components/signup/signup.component';

function App() {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <Routes>
        {currentUser != null ? (
          <Route path='/' element={<Home />} />
        ) : (
          <Route path="/" element={<LoginComponent />} />
        )}
        <Route path="/signup" element={<SignupComponent />} />
      </Routes>
    </Fragment>
  );
}

export default App;
