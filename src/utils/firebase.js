import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { getDatabase, ref, push, set, update, remove, get } from "firebase/database";
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
const realTimeDatabase = getDatabase(app);
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

export const writePosts = async (uid, name, email, photoURL, timestamp, link, title) => {
  try {
    const userPostsRef = ref(realTimeDatabase, `posts/${uid}`);
    const newPostRef = push(userPostsRef);

    // Check for undefined properties
    if (!uid || !name || !email || !photoURL || !timestamp || !link || !title) {
      console.error("One or more required properties are undefined");
      console.error("uid:", uid);
      console.error("name:", name);
      console.error("email:", email);
      console.error("photoURL:", photoURL);
      console.error("timestamp:", timestamp);
      console.error("link:", link);
      console.error("title:", title);
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
    });

    console.log("Post added successfully!");
    return newPostRef.key;
  } catch (error) {
    console.error("Error writing post:", error);
    throw error;
  }
};

const postsRef = ref(realTimeDatabase, 'posts');

// Function to get all posts
export const getAllPostsFromRealtimeDatabase = async () => {
  try {
    // Fetch the data from the 'posts' node
    const snapshot = await get(postsRef);

    if (snapshot.exists()) {
      // Convert the snapshot to an array of posts
      const allPosts = [];

      // Iterate through each user's posts
      snapshot.forEach((userSnapshot) => {
        const userId = userSnapshot.key;
        const userPosts = userSnapshot.val();

        // Iterate through each post of the user and add it to the allPosts array
        Object.keys(userPosts).forEach((postId) => {
          const post = userPosts[postId];
          allPosts.push({
            userId,
            postId,
            ...post,
          });
        });
      });

      return allPosts;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error getting all posts:", error);
    throw error;
  }
};