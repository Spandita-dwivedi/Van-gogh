import React from 'react'
import styles from "./Card3.module.scss"


export default function Card3comp(props){
    return(
        <>

        <div className={styles.maindiv}>
            <div className={styles.div1}>
                <img src={props.image} alt="" />
                </div>

                <div className={styles.div5}>

                <div className={styles.div2}>
                    <h1>{props.title}</h1>
                    </div>
                    <div className={styles.div3}>
                    <h1>{props.rate}</h1>
                    <h2><del>{props.rateb}</del></h2>
                    </div>

                    <div className={styles.div4}>
                        <button>Add to cart</button>
                    </div>

                    </div>


               
        </div>
        
        </>
    )
}