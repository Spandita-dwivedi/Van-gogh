import React from "react";
import styles from "./About.module.scss";

export default function Aboutcomp() {
  return (
    <>
      <div className={styles.topmost}>
        <div className={styles.top}>
          <div className={styles.photo}>
            <h1> Im spandita</h1>
            <img src="/images/group6.svg" alt="" />
          </div>
          <div className={styles.cont}>
            <p>
              Talking about my love for books, i love love love them. Proin
              porttitor nibh lorem, id sagittis nunc finibus vitae. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos.
            </p>
          </div>
        </div>

        <div className={styles.top1}>
          <p>
            “There is <br></br>nothing more <br></br> truly artistic <br></br>{" "}
            than to love <br></br> people.”
          </p>
        </div>
        
      </div>
    </>
  );
}
