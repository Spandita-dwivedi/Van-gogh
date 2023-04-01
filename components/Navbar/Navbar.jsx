import React from 'react'
import styles from "./Navbar.module.scss"


export default function Navbarcomp(){
    return(
        <>
        <div className={styles.hehe}>

        <div className={styles.div1}>
            <h1>BOOKish</h1>
        </div>

        <div className={styles.div2}>
        <ul>
  <li><a href="">Home</a></li>
  <li><a href="">News</a></li>
  <li><a href="">Contact</a></li>
  <li><a href="">About</a></li>
  <li><a href="">About</a></li>
</ul>
</div>

<div className={styles.div3}>
<button className={styles.button6}>Sign up</button>
</div>

</div>





        </>
    );
}