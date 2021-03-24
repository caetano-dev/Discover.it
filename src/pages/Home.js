import Image from "../components/Image";
import PostContainer from "../components/PostContainer";
import styles from "../styles/Home.module.css";
import { PostProvider } from "../contexts/PostContext";
function Home() {
  return (
    <PostProvider>
      <div className={styles.Home}>
        <Image />
        <h1 className={styles.Text}>Destinations waiting for you:</h1>
        <PostContainer />
      </div>
    </PostProvider>
  );
}

export default Home;
