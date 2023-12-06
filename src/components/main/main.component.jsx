import React, { useContext, useEffect, useMemo } from 'react';
import { onValue } from 'firebase/database';
import { ref } from 'firebase/database';
import { PostsContext } from '../../context/userContext/posts.context';
import { realTimeDatabase } from '../../utils/firebase';
import CreatePostComponent from '../create-post/create-post.component';
import PostComponent from '../post/post.component';
import "./main.styles.css";

const MainComponent = () => {
  const { currentPosts, setCurrentPosts } = useContext(PostsContext);

  useEffect(() => {
    const postsRef = ref(realTimeDatabase, 'posts');

    const unsubscribe = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        setCurrentPosts([]);
        return;
      }

      const dataArray = Object.keys(data).flatMap((userId) => {
        return Object.keys(data[userId]).map((postId) => {
          const post = data[userId][postId];
          return {
            id: postId,
            title: post.title,
            link: post.link,
            timestamp: post.timestamp,
            uid: post.uid,
            name: post.name,
            email: post.email,
            photoURL: post.photoURL,
            likes: post.likes,
          };
        });
      });

      setCurrentPosts(dataArray);
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
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
