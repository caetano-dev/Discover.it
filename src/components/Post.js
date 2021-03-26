import styles from "../styles/components/Post.module.css";
import { Link, useParams} from "react-router-dom";
import Destinations from "../Api";

function Post() {
  const { id } = useParams();
  return (
    <>
      {Destinations.map((destinaton) => (
        <div key={destinaton.id} className={styles.Container}>
          <div className={styles.Post}>
            <img src={destinaton.image} alt={destinaton.title} />
            <h2>{destinaton.title}</h2>
            <p>{destinaton.description}</p>
            <Link to={`/Destination/${destinaton.id}`}>
            <button>Learn more</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
