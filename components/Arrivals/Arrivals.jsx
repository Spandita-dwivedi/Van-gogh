import React from 'react'
import styles from "./Arrivals.module.scss"
import Card3comp from '../Card3/Card3'


export default function Arrivalscomp(){
    return(
        <>

        <div className={styles.main}>
            <div className={styles.main1}>
                <h1>New Arrivals</h1>
            </div>

            <div className={styles.main2}>

            <Card3comp
            image="/images/book-1.svg"
            title="It's kind of funny story"
            rate="28$"
            rateb="31$"
            />

              <Card3comp
            image="/images/book2.svg"
            title="Looking for Alaska"
            rate="28$"
            rateb="35$"
            />

              <Card3comp
            image="/images/book3.svg"
            title="Atomic Habits"
            rate="28$"
            rateb="31$"
            />

             

</div>

<div className={styles.main3}>
<Card3comp
            image="/images/book3.svg"
            title="It's kind of funny story"
            rate="28$"
            rateb="31$"
            />

              <Card3comp
            image="/images/book4.svg"
            title="Looking for Alaska"
            rate="28$"
            rateb="35$"
            />

              <Card3comp
            image="/images/book-1.svg"
            title="Atomic Habits"
            rate="28$"
            rateb="31$"
            />

</div>

             
        </div>
        
        
        </>
    )
}