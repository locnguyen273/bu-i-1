/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAllListPosts } from "./../services/api";

export const PostContext = createContext({});

export const PostProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    setIsLoading(true);
    const getListPosts = await getAllListPosts();
    setPosts(getListPosts);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  };

  const handleDeleteById = (postId) => {
    setIsLoading(true);
    setPosts(posts.filter(post => post.id !== postId))
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={{ isLoading, setIsLoading, posts, setPosts, handleDeleteById }}>
      {children}
    </PostContext.Provider>
  );
};
