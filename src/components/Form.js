import React from "react";
import styles from "../styles/components/Form.module.css";
export default function Form() {
  return (
    <div className={styles.Form}>
      <div>
        <form>
          <div>
            <label>
              Name:
              <input type="text" name="name" required={true}></input>
            </label>
          </div>
          <div>
            <label>
              E-mail:
              <input type="text" name="email" required={true}></input>
            </label>
          </div>
          <div>
            <label>
              Country:
              <input type="text" name="country" required={true}></input>
            </label>
          </div>
          <div>
            <label>
              Phone number:
              <input type="number" name="phone" required={true}></input>
            </label>
          </div>
          <div>
            <label>
              Trip date:
              <input type="date" name="date" required={true}></input>
            </label>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
