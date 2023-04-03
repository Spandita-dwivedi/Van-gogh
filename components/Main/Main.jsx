import React from 'react'
import styles from "./Main.module.scss"
import Navcomp from '../Nav/Nav'
import Searchcomp from '../Search/Search'





export default function Maincomp() {
  return (
    <>
    <div className={styles.headc}>
    <Navcomp />
    
    <Searchcomp />
      <div className={styles.main}>

        <picture>
          <source srcset="/images/Group-7.png" media="(min-width: 568px)" />
          <img src="/images/Group-8.png" alt="PP" />
        </picture>
        <div className={styles.main2}>
          <h1>Best books for<br />
            best people</h1>
        </div>

       
      </div>
      </div>
      <br/>

    </>
  );
}
