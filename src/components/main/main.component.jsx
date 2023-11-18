import React, { useContext } from 'react';
import "./main.styles.css"
import CreatePostComponent from '../create-post/create-post.component';
import PostComponent from '../post/post.component';
import { popup, createUserDocumentFromAuth } from '../../utils/firebase';
import { PostsContext } from '../../context/userContext/posts.context';
import { useEffect } from 'react';
import { getAllPostsFromRealtimeDatabase } from '../../utils/firebase';

const MainComponent = () => {
    const { currentPosts, setCurrentPosts } = useContext(PostsContext);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const posts = await getAllPostsFromRealtimeDatabase();
          setCurrentPosts(posts);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      fetchData();
    }, [setCurrentPosts]);
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