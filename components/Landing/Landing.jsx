import React from 'react'
import styles from "./Landing.module.scss"
import { useState, useEffect } from 'react';


export default function Landingcomp() {
    let fix;
    if (typeof window !== "undefined") {
      fix = window.innerWidth;
    }
  
    const [windowWidth, setWindowWidth] = useState(fix);
  
    const setWindowDimensions = () => {
      setWindowWidth(window.innerWidth)
    }
  
    useEffect(() => {
      window.addEventListener('resize', setWindowDimensions);
      return () => {
        window.removeEventListener('resize', setWindowDimensions)
      }
    }, [])
  
  


    if (windowWidth >= 700) {
        return(
            <>
            <div className={styles.main}>
                <img src="/images/Group-7.png" alt="" />
                <div className={styles.main2}>
                    <h1>Best books for<br />
                    best people</h1>
                </div>
            </div>
            
            
            
            </>
        );
    }
if(windowWidth<700){
return(
    <>
    <div className={styles.mains}>
        <img src="/images/Group-8.png" alt="" />
        <div className={styles.mains2}>
            <h1>Best books for<br />
                    best people</h1>
        </div>
    </div>
    
    
    
    </>
)
}

}



