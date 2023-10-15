<<<<<<< HEAD
import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DialpadIcon from '@mui/icons-material/Dialpad';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import "./header.styles.css";
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
const HeaderComponent = () => {
    return (
       <Fragment>
          <div className='header'>
         <div className="container">
         <div className="header-left">


         <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png?ga=GA1.1.401189498.1688907689" alt="" className='logo'/>
                
                <div className="search-box">
                   <SearchIcon className='search-icon'/>
                   <input type="text" placeholder='search... ' />
                </div>


           </div>
            <div className="header-center">
         <a href="#home" className='active'>   <HomeIcon className='icon-center'/></a>
              
       <a href="#home">         <GroupIcon className='icon-center'/></a>

               <a href="#home"> <OndemandVideoIcon className='icon-center'/></a>
            <a href="#home">    <StorefrontIcon className='icon-center'/></a>

            <a href="#home">    <Diversity3Icon className='icon-center'/></a>

            </div>
            <div className="header-right">
            <NotificationsIcon className='icon-center'/>
            <MailOutlineIcon className='icon-center'/>
            <DialpadIcon className='icon-center'/>
            <img src="https://scontent.fcai19-2.fna.fbcdn.net/v/t1.6435-1/148693320_545419296387552_5544798022985132643_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=r7kLrKf-gMkAX8zBjVj&_nc_ht=scontent.fcai19-2.fna&oh=00_AfDcIQ5ZEO5lHjTfFlCJDwKgYT7rGPu42TAIZTLe1ufJLQ&oe=6552102A" alt="" />
                
            </div>
         </div>
        </div>
        <Outlet />
       </Fragment>
    );
}

export default HeaderComponent;
=======
import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DialpadIcon from '@mui/icons-material/Dialpad';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import "./header.styles.css"
const HeaderComponent = () => {
    return (
        <div className='header'>
         <div className="container">
         <div className="header-left">


         <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png?ga=GA1.1.401189498.1688907689" alt="" className='logo'/>
                
                <div className="search-box">
                   <SearchIcon className='search-icon'/>
                   <input type="text" placeholder='search... ' />
                </div>


           </div>
            <div className="header-center">
         <a href="#home" className='active'>   <HomeIcon className='icon-center'/></a>
              
       <a href="#home">         <GroupIcon className='icon-center'/></a>

               <a href="#home"> <OndemandVideoIcon className='icon-center'/></a>
            <a href="#home">    <StorefrontIcon className='icon-center'/></a>

            <a href="#home">    <Diversity3Icon className='icon-center'/></a>

            </div>
            <div className="header-right">
            <NotificationsIcon className='icon-center'/>
            <MailOutlineIcon className='icon-center'/>
            <DialpadIcon className='icon-center'/>
            <img src="https://scontent.fcai19-2.fna.fbcdn.net/v/t1.6435-1/148693320_545419296387552_5544798022985132643_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=r7kLrKf-gMkAX8zBjVj&_nc_ht=scontent.fcai19-2.fna&oh=00_AfDcIQ5ZEO5lHjTfFlCJDwKgYT7rGPu42TAIZTLe1ufJLQ&oe=6552102A" alt="" />
                
            </div>
         </div>
        </div>
    );
}

export default HeaderComponent;
>>>>>>> dbb312af7a7cf09d9cb13326355f28a6853049fa
