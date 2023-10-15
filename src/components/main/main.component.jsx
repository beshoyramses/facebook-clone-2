import React from 'react';
import "./main.styles.css"
import CreatePostComponent from '../create-post/create-post.component';
import PostComponent from '../post/post.component';
import { popup, createUserDocumentFromAuth } from '../../utils/firebase';



const MainComponent = () => {

    return (
        <div className='main'>
            <CreatePostComponent />
            <PostComponent />
        </div>
    );
}

export default MainComponent;
