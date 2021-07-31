import React from "react";
import CONTENT from "./content";
import styles from "./style.module.css";

function HomePage() {
  const { mainHeading, cardsData } = CONTENT;
  return (
    <>
      <div className={styles.parentWrapper}>
        <div className={styles.headingWrapper}>{mainHeading}</div>
        <div className={styles.cardsWrapper}>
          {cardsData.map((card, index) => {
            return (
              <div className={styles.cardWrapper} key={index}>
                <div className={styles.productCardWrapper}>
                  {card.productCard}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
