import styles from "../styles/About-us.module.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
function Home() {
  return (
    <div className={styles.Home}>
      <h1>About</h1>
      <div>
        <section>
          <ImQuotesLeft size="2rem" />
          <main>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor.
            </p>
          </main>
          <ImQuotesRight size="2rem" />
        </section>
      </div>
    </div>
  );
}

export default Home;
