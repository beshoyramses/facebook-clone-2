import React from 'react';
import "./post.styles.css";
import { useContext } from 'react';
import { UserContext } from '../../context/userContext/user.context';

const PostComponent = (props) => {
    const {title, userName, imgLink, time} = props;
    const {currentUser} = useContext(UserContext);

    const photo = currentUser.photoURL;

    return (
        <div className='post-container'>
            <div className="post-data">
            <img src={photo} alt="" />
            <div className="info">
            <h4 className="username">Beshoy33 <span>uploaded a photo</span></h4>
            <div className="time">October 11 at 7pm</div>

            </div>
            </div>

            <div className="title">
                   this is a test fot the title please build some thing good
            </div>

            <img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600" alt="" className='main-img'/>
        </div>
    );
}

export default PostComponent;
