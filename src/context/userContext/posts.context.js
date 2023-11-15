import { createContext } from "react";
import { useState } from "react";
export const PostsContext = createContext({
    currentPosts: [],
    setCurrentPosts: () => null,
})

export const PostsProvider = ({ children }) => {
    const [currentPosts, setCurrentPosts] = useState([]);
    console.log(currentPosts)
    const value = { currentPosts, setCurrentPosts};
    return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}  