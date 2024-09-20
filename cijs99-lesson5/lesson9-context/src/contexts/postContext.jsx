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
    setIsLoading(false);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={{ isLoading, setIsLoading, posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
