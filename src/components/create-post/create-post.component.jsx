import React from 'react';
import "./create-post.styles.css";
import photos from "../../images/photos.svg"
import live from "../../images/live.svg"
import face from "../../images/face.svg"
const CreatePostComponent = () => {
    return (
        <div className='create-post'>
            <div className="box">
           <div className="post">
            
           <img src="https://scontent.fcai19-2.fna.fbcdn.net/v/t1.6435-1/148693320_545419296387552_5544798022985132643_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=r7kLrKf-gMkAX8zBjVj&_nc_ht=scontent.fcai19-2.fna&oh=00_AfDcIQ5ZEO5lHjTfFlCJDwKgYT7rGPu42TAIZTLe1ufJLQ&oe=6552102A" alt="user" className='user-img'/>
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
