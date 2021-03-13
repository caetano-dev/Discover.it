import React from "react";
import styles from "../styles/components/PostContainer.module.css";
import Post from "../components/Post";
import rainforest from "../assets/rainforest.jpeg";
import rio from "../assets/rio.jpg";
import brasilia from "../assets/brasilia.jpeg";
import bonito from "../assets/bonito.jpeg";

function PostContainer() {
  return (
    <div className={styles.PostContainer}>
      <Post
        image={rainforest}
        title="Amazon Rainforest"
        description="Discover incredible landscapes"
      />
      <Post
        image={rio}
        title="Rio de Janeiro"
        description="Discover the city of samba"
      />
      <Post
        image={brasilia}
        title="Brasilia"
        description="Discover the capital of Brazil"
      />
      <Post
        image={bonito}
        title="Bonito"
        description="Discover incredible rivers"
      />
    </div>
  );
}

export default PostContainer;
