import React from "react";
import styles from "../styles/components/Footer.module.css";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer className={styles.Footer}>
        <div>
          <h1>Discover.it</h1>
          <p>Made for studying purposes</p>
          <p>2021</p>
        </div>
        <div className={styles.GithubContainer}>
          <span>Visit source code on </span>
          <a href="https://github.com/drull1000/website">
            <FaGithub size="2rem" color="white" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
