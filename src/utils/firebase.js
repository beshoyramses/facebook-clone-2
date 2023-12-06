import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { getDatabase, ref, push, set, update, remove, get, onValue } from "firebase/database";
import { useContext } from "react";
import {PostsContext} from '../context/userContext/posts.context.js';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXLmDqK5nmabn9Cn_O_Q2wwpm8BS9XRm0",
  authDomain: "fb-clone-58d5f.firebaseapp.com",
  databaseURL: "https://fb-clone-58d5f-default-rtdb.firebaseio.com",
  projectId: "fb-clone-58d5f",
  storageBucket: "fb-clone-58d5f.appspot.com",
  messagingSenderId: "1048025636129",
  appId: "1:1048025636129:web:913a6adc46a0ff36c8f260"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app); 
export const realTimeDatabase = getDatabase(app);
// Initialize Firebase
const auth = getAuth(); // Use getAuth() to initialize auth
const provider = new GoogleAuthProvider();

export const popup = () => signInWithPopup(auth, provider);
export const SignUpWithEmailAndPassword = async (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const SignInAuthWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

provider.setCustomParameters({
  prompt: "select_account",
});


export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        photoURL,
      });
    } catch (error) {
      console.log(error); // Log the error to the console
    }
  }
  return userDocRef;
};

export const getUserDocument = async (uid) => {
  const docRef = db.collection('users').doc(uid); // Assuming 'users' is your collection name
  return await docRef.get();
};

// ...

// Get all posts for all users
export const getAllPosts = async () => {
  try {
    const postsRef = ref(db, "posts");
    const snapshot = await get(postsRef);
    
    if (snapshot.exists()) {
      // Convert the snapshot to an array of posts
      const allPosts = Object.keys(snapshot.val()).map(userId => {
        const userPosts = snapshot.val()[userId];
        return Object.keys(userPosts).map(postId => userPosts[postId]);
      });

      return [].concat(...allPosts);
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching all posts:", error);
    throw error;
  }
};

// ...
// Get all posts for a specific user
export const getUserPosts = async (userId) => {
  try {
    const postsRef = ref(db, `posts/${userId}`);
    const snapshot = await get(postsRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user posts:", error);
    throw error;
  }
};

// Update a user post
export const updatePost = async (userId, postId, updatedData) => {
  try {
    const postRef = ref(db, `posts/${userId}/${postId}`);
    await update(postRef, updatedData);
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};

// Delete a user post
export const deletePost = async (userId, postId) => {
  try {
    const postRef = ref(db, `posts/${userId}/${postId}`);
    await remove(postRef);
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};

export const addPost = async (userId, title, link) => {
  try {
    const userPostsRef = ref(db, `posts/${userId}`);
    const newPostRef = push(userPostsRef); // Generate a unique key for the new post

    await set(newPostRef, {
      title,
      link,
      timestamp: Date.now(),
    });

    return newPostRef.key;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};

export const writePosts = async (uid, name, email, photoURL, timestamp, link, title, likes) => {
  try {
    const userPostsRef = ref(realTimeDatabase, `posts/${uid}`);
    const newPostRef = push(userPostsRef);

    // Check for undefined properties
    if (!uid || !name || !email || !photoURL || !timestamp || !link || !title || likes === undefined) {
      console.error("One or more required properties are undefined");
      console.error("uid:", uid);
      console.error("name:", name);
      console.error("email:", email);
      console.error("photoURL:", photoURL);
      console.error("timestamp:", timestamp);
      console.error("link:", link);
      console.error("title:", title);
      console.error("likes:", likes);
      throw new Error("One or more required properties are undefined");
    }

    // Set the data for the new post
    await set(newPostRef, {
      uid,
      name,
      email,
      photoURL,
      timestamp,
      link,
      title,
      likes,
    });

    console.log("Post added successfully!");
    return newPostRef.key;
  } catch (error) {
    console.error("Error writing post:", error);
    throw error;
  }
};


const postRef = ref(realTimeDatabase, 'posts');

export const getPosts = async () => {
  return new Promise((resolve) => {
    onValue(postRef, (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        resolve([]);
        return;
      }

      const dataArray = Object.keys(data).map((userId) => {
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
            date: post.date,
            likes: post.likes,
          };
        });
      });

      resolve(dataArray.flat());
    });
  });
};

export const addLike = async (postId, userId, likedPerson) => {
  try {
    const postRef = ref(realTimeDatabase, `posts/${userId}/${postId}/likes`);
    console.log(postRef)
    const likesSnapshot = await get(postRef);

    if (likesSnapshot.exists()) {
      // If the likes node already exists, update the user's like
      const likesData = likesSnapshot.val();
      await update(postRef, {
        ...likesData,
        [likedPerson]: true,
      });
      
      console.log("added like")
    } else {
      // If the likes node doesn't exist, create a new one
      await set(postRef, {
        [userId]: true,
      });
    }
  } catch (error) {
    console.error("Error adding like:", error);
    throw error;
  }
};

export const removeLike = async (postId, userId, likedPerson) => {
  try {
    const postRef = ref(realTimeDatabase, `posts/${userId}/${postId}/likes`);
    const likesSnapshot = await get(postRef);

    if (likesSnapshot.exists()) {
      const likesData = likesSnapshot.val();

      // Check if the user has already liked the post
      if (likesData[likedPerson]) {
        // Remove the user's like from the likes node
        likesData[likedPerson] = false;
        await update(postRef, likesData);

        console.log("removed like");
      } else {
        console.warn("User has not liked the post");
      }
    } else {
      console.warn("Likes node does not exist");
    }
  } catch (error) {
    console.error("Error removing like:", error);
    throw error;
  }
};


export const addComment = async (postId, userId, commenterPhoto, text) => {
  try {
    const commentsRef = ref(realTimeDatabase, `posts/${userId}/${postId}/comments`);
    const newCommentRef = push(commentsRef);

    await set(newCommentRef, {
      commenterPhoto,
      text,
      timestamp: Date.now(),
    });

    console.log("Comment added successfully!");
    return newCommentRef.key;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};

export const getComments = async (userId, postId) => {
  try {
    const commentsRef = ref(realTimeDatabase, `posts/${userId}/${postId}/comments`);
    const snapshot = await get(commentsRef);
    if (snapshot.exists()) {
      // Convert the snapshot to an array of comments
      const commentsArray = Object.keys(snapshot.val()).map(commentId => snapshot.val()[commentId]);
      return commentsArray;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};