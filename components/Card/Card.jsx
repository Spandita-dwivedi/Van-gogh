import React from 'react'
import styles from "./Card.module.scss"

export default function Cardcomp(props) {
    return (
        <>
        <div className={styles.mainn}>
            <div className={styles.main}>
                <div className={styles.main1}>
                    <img src={props.img} alt="" />
                    <h1>{props.title}</h1>
                    <h2>{props.price}</h2>
                </div>

                <button className={styles.button6}>Add to Cart</button>

            </div>
            </div>


        </>
    )
}