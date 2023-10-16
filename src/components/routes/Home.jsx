import React from 'react';
import SidebarComponent from '../sidebar/sidebar.component';
import MainComponent from '../main/main.component';
import "./Home.css";
import { useContext } from 'react';
import { UserContext } from '../../context/userContext/user.context';
const Home = () => {
    const {currentUser} = useContext(UserContext)
    return (
        <div className='home'>
            <SidebarComponent />
            <MainComponent />
        </div>
    );
}

export default Home;
