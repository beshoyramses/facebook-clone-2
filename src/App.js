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


function App() {
  const {currentUser} = useContext(UserContext)
  return (
    <Fragment>
     <Routes>
      <Route path="/" element={<HeaderComponent />}>
      <Route index element={currentUser != null ? <Home/>:<LoginComponent />}></Route>
      </Route>
    </Routes>
   </Fragment>
  );
}

export default App;
