import styles from "../styles/components/Post.module.css";

function Post({ image, title, description }) {
  return (
    <div className={styles.Container}>
      <div className={styles.Post}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Learn more</button>
      </div>
    </div>
  );
}

export default Post;
