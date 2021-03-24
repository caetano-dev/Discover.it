import styles from "../styles/components/Post.module.css";
import rainforest from "../assets/rainforest.jpeg";
import rio from "../assets/rio.jpg";
import brasilia from "../assets/brasilia.jpeg";
import bonito from "../assets/bonito.jpeg";
import dunes from "../assets/dunes.jpeg";
import jericoacoara from "../assets/jericoacoara.jpeg";

function Post() {
  const Destinations = [
    {
      image: rainforest,
      title: "Amazon Rainforest",
      description: "Discover incredible landscapes.",
      id: 1,
    },
    {
      image: rio,
      title: "Rio de Janeiro",
      description: "Discover the city of samba.",
      id: 2,
    },
    {
      image: brasilia,
      title: "Brasilia",
      description: "Discover the capital of Brazil.",
      id: 3,
    },
    {
      image: bonito,
      title: "Bonito",
      description: "Discover incredible rivers.",
      id: 4,
    },
    {
      image: dunes,
      title: "Lençóis Maranhenses",
      description: "Discover the dunes.",
      id: 5,
    },
    {
      image: jericoacoara,
      title: "Jericoacoara",
      description: "Discover incredible beaches.",
      id: 6,
    },
  ];

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
