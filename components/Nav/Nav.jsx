import React from 'react'
import styles from "./Nav.module.scss"
import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import Link from 'next/link';

export default function Navcomp() {
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

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleMouseClicked = () => {
    setIsClicked(!isClicked);
  };

  if (windowWidth > 700) {
    return (
      <>
        <div className={styles.hehe}>

          <div className={styles.div1}>
            <h1>BOOKish</h1>
          </div>

          <div className={styles.div2}>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Categories</a></li>
              <li><a href="">Wishlist</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Account</a></li>
            </ul>
          </div>

          <div className={styles.div3}>
            <button className={styles.button6}>Sign up</button>
          </div>

        </div>




      </>
    );
  }

  return (
    <>
      <nav className={styles.nav3}>
        <div className={styles.burger}>

          <div className={styles.img1} onClick={handleMouseClicked}>
            <h1 className={styles.hea}>Van-gogh</h1>
          </div>

          <div className={styles.img} onClick={handleMouseClicked}>
            <AiOutlineMenu />
          </div>
        </div>

        {isClicked &&
          <div >
            <div className={styles.iconnav}>
              <Link href="">
                <div className={styles.icon}>Home</div>
              </Link>

              <Link href="">
                <div className={styles.icon}>Categories</div>
              </Link>

              <Link href="">
                <div className={styles.icon}>Wishlist</div>
              </Link>

              <Link href="">
                <div className={styles.icon}>About</div>
              </Link>

              <Link href="">
                <div className={styles.icon}>Account</div>
              </Link>
            </div>


          </div>
        }
      </nav>

    </>
  )

}