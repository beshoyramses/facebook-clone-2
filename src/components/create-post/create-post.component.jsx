import React from 'react';
import "./create-post.styles.css";
import photos from "../../images/photos.svg";
import live from "../../images/live.svg";
import face from "../../images/face.svg";
import { useContext } from 'react';
import { UserContext } from '../../context/userContext/user.context';

const CreatePostComponent = () => {
   
    const {currentUser} = useContext(UserContext);

    const photo = currentUser.photoURL;

    return (
        <div className='create-post'>
            <div className="box">
           <div className="post">
            
           <img src={photo} alt="user" className='user-img'/>
           <input type="text" placeholder= "What's up on your mind, Beshoy"/>
           <input type="text" placeholder= "put the link"/>
           </div>

           <div className="box-items">
  <div className="box-item"><img src={photos} alt="Live"/>photo/video</div>

  <div className="box-item"><img src={live} alt="Photos" /> live video</div>
  <div className="box-item"><img src={face} alt="Face" />Feeling/activity</div>
</div>
                
                </div>            
        </div>
    );
}

export default CreatePostComponent;
