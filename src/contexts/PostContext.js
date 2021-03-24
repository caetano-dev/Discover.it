import { createContext } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  function Test() {
      console.log("It works")
  }
  return (
    <PostContext.Provider value={"It works"}>{children}</PostContext.Provider>
  );
};
