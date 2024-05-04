import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PostsProvider } from './context/userContext/posts.context';
import {
  BrowserRouter,
} from "react-router-dom";
import { UserProvider } from './context/userContext/user.context';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PostsProvider>
    <UserProvider>
      <App />
    </UserProvider>
    </PostsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
