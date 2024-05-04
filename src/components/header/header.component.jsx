import React, { useContext } from 'react';
import * as Icons from '@mui/icons-material';
import "./header.styles.css";
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { UserContext } from '../../context/userContext/user.context';

const icons = [
  { icon: <Icons.Home />, link: '#home' },
  { icon: <Icons.Group />, link: '#home' },
  { icon: <Icons.OndemandVideo />, link: '#home' },
  { icon: <Icons.Storefront />, link: '#home' },
  { icon: <Icons.Diversity3 />, link: '#home' }
];

const HeaderComponent = () => {
  const { currentUser } = useContext(UserContext);
  const photo = currentUser ? currentUser.photoURL : null;

  return (
    <Fragment>
      <div className='header'>
        <div className="container">
          <div className="header-left">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png?ga=GA1.1.401189498.1688907689" alt="" className='logo' />
            <div className="search-box">
              <Icons.Search className='search-icon' />
              <input type="text" placeholder='search... ' />
            </div>
          </div>
          <div className="header-center">
            {icons.map((item, index) => (
              <a key={index} href={item.link} className={index === 0 ? 'active' : ''}>
                {item.icon}
              </a>
            ))}
          </div>
          <div className="header-right">
            <Icons.Notifications className='icon-center' />
            <Icons.MailOutline className='icon-center' />
            <Icons.Dialpad className='icon-center' />
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default HeaderComponent;
