import React from 'react';
import "./post.styles.css"
const PostComponent = (props) => {
    const {title, userName, imgLink, time} = props;

    return (
        <div className='post-container'>
            <div className="post-data">
            <img src="https://scontent.fcai19-2.fna.fbcdn.net/v/t1.6435-1/148693320_545419296387552_5544798022985132643_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=r7kLrKf-gMkAX8zBjVj&_nc_ht=scontent.fcai19-2.fna&oh=00_AfDcIQ5ZEO5lHjTfFlCJDwKgYT7rGPu42TAIZTLe1ufJLQ&oe=6552102A" alt="" />
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
