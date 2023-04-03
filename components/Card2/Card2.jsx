import React from 'react'
import styles from "./Card2.module.scss"

export default function Card2comp(props) {
    return (
        <>

            <div className={styles.top}>
                <div className={styles.photo}>
                    <img src={props.back} alt="" />
                </div>

                <div className={styles.content}>
                    <img src={props.icon} alt="" />
                    <h1>{props.head}</h1>
                    <p>{props.para}</p>
                    </div>
                    <div className={styles.button}>
                    <h2>{props.head1}<img src="/icons/arrow-2.svg"/></h2>
                    </div>
                
            </div>

        </>
    )
}