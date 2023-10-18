import React, { Fragment } from 'react';
import SidebarComponent from '../sidebar/sidebar.component';
import MainComponent from '../main/main.component';
import "./Home.css";
import HeaderComponent from '../header/header.component';


const Home = () => {
    return (
       <Fragment>
          <HeaderComponent />
        <div className='home'>
           <SidebarComponent />
           <MainComponent />
        </div>
       </Fragment>
    );
}

export default Home;
