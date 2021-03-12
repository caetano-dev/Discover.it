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
            <p>Home</p>
          </Link>
          <Link to="/About">
            <p>About</p>
          </Link>
          <Link to="/Contact-us">
            <p>Contact us</p>
          </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
