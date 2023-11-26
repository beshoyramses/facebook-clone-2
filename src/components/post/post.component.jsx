import React, { useContext } from 'react';
import "./post.styles.css";
import { UserContext } from '../../context/userContext/user.context';

const PostComponent = ({props}) => {
    
    const {currentUser} = useContext(UserContext);
    const {title, link, photoURL, name, timestamp} = props;
   


    return (
        <div className='post-container'>
            <div className="post-data">
            <img src={photoURL} alt="user" onError={(e)=>{e.target.onerror = null; e.target.src="default_image.jpg"}}/>
            <div className="info">
            <h4 className="username">{name} <span>uploaded a photo</span></h4>
            <div className="time">{timestamp}</div>
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