import React, { useContext } from 'react';
import "./post.styles.css";
import { UserContext } from '../../context/userContext/user.context';

const PostComponent = ({props}) => {
    
    const {currentUser} = useContext(UserContext);
    const {title, link, photoURL, email, name, timestamp} = props;
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    console.log(currentUser, props);
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    const formattedTime = `${month} ${day} at ${hours % 12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;


    return (
        <div className='post-container'>
            <div className="post-data">
            <img src={photoURL} alt="user" onError={(e)=>{e.target.onerror = null; e.target.src="default_image.jpg"}}/>
            <div className="info">
            <h4 className="username">{name} <span>uploaded a photo</span></h4>
            <div className="time">{formattedTime}</div>
            </div>
            </div>

            <div className="title">
                   {title}
            </div>
            <img src={link} alt="" className='main-img'/>
        </div>
    );
};

export default PostComponent;