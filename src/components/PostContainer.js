import React from "react";
import styles from "../styles/components/PostContainer.module.css";
import Post from "../components/Post";

function PostContainer() {
  return (
    <div className={styles.PostContainer}>
      <Post/>
    </div>
  );
}

export default PostContainer;
