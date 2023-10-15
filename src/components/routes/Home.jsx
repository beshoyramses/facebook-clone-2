import React from 'react';
import SidebarComponent from '../sidebar/sidebar.component';
import MainComponent from '../main/main.component';
import "./Home.css"
const Home = () => {
    return (
        <div className='home'>
            <SidebarComponent />
            <MainComponent />
        </div>
    );
}

export default Home;
