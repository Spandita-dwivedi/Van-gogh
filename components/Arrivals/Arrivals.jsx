import React from "react";
import styles from "./Arrivals.module.scss";
import Card3comp from "../Card3/Card3";

const data = [
  {
    image: "/images/book5.svg",
    title: "Little women",
    rate: "28$",
    rateb: "31$",
  },
  {
    image: "/images/book2.svg",
    title: "Looking for Alaska",
    rate: "28$",
    rateb: "31$",
  },
  {
    image: "/images/book3.svg",
    title: "Atomic habits",
    rate: "28$",
    rateb: "31$",
  },
  {
    image: "/images/book4.svg",
    title: "It ends with us",
    rate: "28$",
    rateb: "31$",
  },
  {
    image: "/images/book-1.svg",
    title: "It's kind of funny story",
    rate: "28$",
    rateb: "31$",
  },
  {
    image: "/images/book6.svg",
    title: "Pride & prejudice",
    rate: "28$",
    rateb: "31$",
  },
  {
    image: "/images/book7.svg",
    title: "The fault in our stars",
    rate: "28$",
    rateb: "31$",
  },
  {
    image: "/images/book8.svg",
    title: "The forty rules of love",
    rate: "28$",
    rateb: "31$",
  },
  {
    image: "/images/book9.svg",
    title: "The palace of Illusions",
    rate: "28$",
    rateb: "31$",
  },
  {
    image: "/images/book10.svg",
    title: "Things we left behind",
    rate: "28$",
    rateb: "31$",
  },
  {
    image: "/images/book11.svg",
    title: "The norweigen wood",
    rate: "28$",
    rateb: "31$",
  },
  {
    image: "/images/book12.svg",
    title: "A man called Ove",
    rate: "28$",
    rateb: "31$",
  },
  
];

export default function Arrivalscomp() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main1}>
          <h1>New Arrivals</h1>
        </div>
        <div className={styles.main2}>
          {data.map((value, index) => {
            return (
              <>
                <Card3comp
                  image={value.image}
                  title={value.title}
                  rate={value.rate}
                  rateb={value.rateb}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
