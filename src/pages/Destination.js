import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/components/Destination.module.css";
import Destinations from "../Api";

function Destination() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const { id } = useParams();

  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        <h1>{Destinations[id].title}</h1>
        <p>{Destinations[id].description}</p>
        <img src={Destinations[id].image} alt={Destinations[id].title} />
      </div>
      <div className={styles.Destination}>
        <div>
          <p>{Destinations[id].text}</p>
        </div>
      </div>
    </div>
  );
}

export default Destination;
