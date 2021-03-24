import styles from "../styles/components/Post.module.css";
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
            <button>Learn more</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
