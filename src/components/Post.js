import styles from "../styles/components/Post.module.css";
import { Link } from "react-router-dom";
import Destinations from "../Api";

function Post() {
  return (
    <>
      {Destinations.map((destinaton) => (
        <div key={destinaton.id} className={styles.Container}>
          <div className={styles.Post}>
            <img src={destinaton.image} alt={destinaton.title} />
            <h2>{destinaton.title}</h2>
            <p>{destinaton.description}</p>
            <Link to="/Destination">
            <button>Learn more</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
