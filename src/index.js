import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PostsProvider } from './context/userContext/posts.context';
import {
  BrowserRouter,
  RouterProvider,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
