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
              <button >Home</button>
            </Link>
            <Link to="/About">
              <button >About</button>
            </Link>
            <Link to="/Contact-us">
              <button >Contact us</button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
