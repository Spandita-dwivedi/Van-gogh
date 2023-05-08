import React from "react";
import styles from "./Footer.module.scss";

export default function Footercomp(){
    return(
        <>
        <div className={styles.lastdiv}>
            <div className={styles.div1}>
                Made with ❤️
            </div>
            <div className={styles.div2}>
                <img src="/images/linkedin.svg" alt="" />
                <img src="/images/github.svg" alt="" />
                <img src="/images/dribble.svg" alt="" />
                <img src="/images/instagram.svg" alt="" />
                <img src="/images/gmail.svg" alt="" />
            </div>
        </div>




        </>
    )
}