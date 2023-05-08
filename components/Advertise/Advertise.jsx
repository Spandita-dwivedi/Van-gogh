import React from "react";
import styles from "./Advertise.module.scss";
import Card2comp from "../Card2/Card2";

export default function Advertisecomp() {
  return (
    <>
      <div className={styles.container}>
        <Card2comp
          back="/images/1.svg"
          icon="/icons/bookshelf.svg"
          head="independent sellers"
          para="Millions of books and other items are listed for sale on BOOKish by trusted sellers from around the world."
          head1="Meet the sellers"
        />
        <Card2comp
          back="/images/2.svg"
          icon="/icons/art.svg"
          head="not just books"
          para="We're known for our epic selection of new, used, and rare books, but we also sell fine art & collectibles."
          head1="Browse the art"
        />
        <Card2comp
          back="/images/4.svg"
          icon="/icons/love.svg"
          head="Feel the love"
          para="We asked customers to tell us why they love shopping and we were overwhelmed by their kind words."
          head1="Read their stories"
        />
      </div>
    </>
  );
}
