import './App.css';
import HeaderComponent from './components/header/header.component';
import SidebarComponent from './components/sidebar/sidebar.component';
import MainComponent from './components/main/main.component';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/routes/Home';
import LoginComponent from './components/login/login.component';
function App() {
  return (
    <Fragment>
     <Routes>
      <Route path="/" element={<HeaderComponent />}>
      <Route index element={<Home />}></Route>
      <Route path='/login' element={<LoginComponent />}></Route>
      </Route>
    </Routes>
   </Fragment>
  );
}

export default App;
