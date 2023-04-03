import React from 'react'
import styles from "./Bestseller.module.scss"
import Cardcomp from '../Card/Card'

export default function Bestsellercomp(){
    return(
        <>
        <div className={styles.top}>
            <h1 className={styles.t}>Bestsellers</h1>
        </div>
        <div className={styles.books}>
<Cardcomp className={styles.first}
img="/images/book-1.svg"
title="It's kind of funny story"
price="28$"
/>
<Cardcomp
img="/images/book6.svg"
title="Pride and Prejudice"
price="28$"
/>
<Cardcomp
img="/images/book3.svg"
title="Atomic Habits"
price="28$"/>
<Cardcomp

img="/images/book4.svg"
title="It ends with us"
price="28$"/>
<Cardcomp className={styles.last}
img="/images/book5.svg"
title="Little Women"
price="28$"

/>


<Cardcomp className={styles.last}
img="/images/book2.svg"
title="Looking for Alaska"
price="28$"

/>

        </div>


        </>
    )
}