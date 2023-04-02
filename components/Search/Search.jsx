import React from 'react'
import styles from "./Search.module.scss"



export default function Searchcomp(){
    return(
        <>
        <div className={styles.cont}>
<div className={styles.rect1}>
<input type="text" placeholder="Search your books here" />
</div>
<div className={styles.rect}>
<img src='/icons/ic_baseline-search.svg' />
</div>
</div>

<div className={styles.div3}>
          <button className={styles.button6}>Explore<img src='/icons/arrow-2.svg'/></button>
        </div>
        
        </>
    )
}