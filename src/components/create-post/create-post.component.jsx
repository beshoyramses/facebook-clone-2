import React from 'react';
import "./create-post.styles.css";
import photos from "../../images/photos.svg";
import live from "../../images/live.svg";
import face from "../../images/face.svg";
import { useContext } from 'react';
import { UserContext } from '../../context/userContext/user.context';
import { PostsContext } from '../../context/userContext/posts.context';
import { useState } from 'react';
const CreatePostComponent = () => {

    const defaultFormFields = {
        title: "",
        link: "",
      };

    
    const {currentUser} = useContext(UserContext);

    const photo = currentUser.photoURL;
    const {currentPosts, setCurrentPosts} = useContext(PostsContext);

    const [formFields, setFormFields] = useState(defaultFormFields);
    let { title, link } = formFields;

    const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };



    const postHandler = () => {

        setCurrentPosts([...currentPosts, {
            title: title,
            link: link,
         }]);

    }


    return (
        <div className='create-post'>
            <div className="box">
           <div className="post">
            
           <img src={photo} alt="user" className='user-img'/>
           <input type="text" placeholder= "What's up on your mind, Beshoy" onChange={onChangeHandler} name='title' value={title}/>
           <input type="text" placeholder= "put the link" onChange={onChangeHandler} name='link' value={link}/>
            <button onClick={postHandler} className='button'>post</button>
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
