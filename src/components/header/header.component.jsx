import React, { useContext } from 'react';
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
import { UserContext } from '../../context/userContext/user.context';
const HeaderComponent = () => {
   const {currentUser} = useContext(UserContext);

 const photo = currentUser.photoURL;

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
            <img src={photo} alt="" />
                
            </div>
         </div>
        </div>
        <Outlet />
       </Fragment>
    );
}

export default HeaderComponent;
