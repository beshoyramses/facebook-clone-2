import React, { useContext } from 'react';
import "./main.styles.css"
import CreatePostComponent from '../create-post/create-post.component';
import PostComponent from '../post/post.component';
import { popup, createUserDocumentFromAuth } from '../../utils/firebase';
import { PostsContext } from '../../context/userContext/posts.context';
import { useEffect } from 'react';
const MainComponent = () => {
    const { currentPosts } = useContext(PostsContext);

    return (
        <div className='main'>
            <CreatePostComponent />
            {currentPosts.map((post) => (
                <PostComponent key={post.id} props={post} />
            ))}
        </div>
    );
};

export default MainComponent;