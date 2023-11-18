import React, { useContext, useState } from 'react';
import "./create-post.styles.css";
import photos from "../../images/photos.svg";
import live from "../../images/live.svg";
import face from "../../images/face.svg";
import { UserContext } from '../../context/userContext/user.context';
import { PostsContext } from '../../context/userContext/posts.context';
import {writePosts} from '../../utils/firebase';
const CreatePostComponent = () => {
  const defaultFormFields = {
    title: "",
    link: "",
  };

  const { currentUser } = useContext(UserContext);

  const photo = currentUser.photoURL;

  const [formFields, setFormFields] = useState(defaultFormFields);
  let { title, link } = formFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const postHandler = async () => {
    try {
      // Check if currentUser and its properties are defined
      if (currentUser.uid && currentUser.displayName && currentUser.email && currentUser.photoURL && link && title) {
        // Call the writePosts function to store the post in the database
        await writePosts(currentUser.uid, currentUser.displayName, currentUser.email, currentUser.photoURL, Date.now(), link, title);


      } else {
        console.error("One or more required properties in currentUser are undefined");
      }
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };
  return (
    <div className='create-post'>
      <div className="box">
        <div className="post">
          <img src={photo} alt="user" className='user-img' />
          <input type="text" placeholder="What's up on your mind, Beshoy" onChange={onChangeHandler} name='title' value={title} />
          <input type="text" placeholder="Put the link" onChange={onChangeHandler} name='link' value={link} />
          <button onClick={postHandler} className='button'>Post</button>
        </div>

        <div className="box-items">
          <div className="box-item"><img src={photos} alt="Live" />Photo/Video</div>
          <div className="box-item"><img src={live} alt="Photos" />Live Video</div>
          <div className="box-item"><img src={face} alt="Face" />Feeling/Activity</div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostComponent;