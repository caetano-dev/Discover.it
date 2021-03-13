import { Link } from "react-router-dom";
import styles from "../styles/components/Header.module.css";

function Header() {
  return (
    <div>
      <header className={styles.Header}>
        <h1>Discover.it</h1>
        <nav>
          <div>
            <Link to="/">
              <a href="#">Home</a>
            </Link>
            <Link to="/About">
              <a href="#">About</a>
            </Link>
            <Link to="/Contact-us">
              <a href="#">Contact us</a>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
