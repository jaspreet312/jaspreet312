import React from "react";
import CONTENT from "./content";
import styles from "./style.module.css";

function HomePage() {
  const { mainHeading, categories } = CONTENT;

  console.log(categories);
  return (
    <>
      <div className={styles.parentWrapper}>
        <div className={styles.headingWrapper}>{mainHeading}</div>

        {Object.keys(categories).map((category) => {
          return (
            <div className={styles.categoryWrapper}>
              <div className={styles.categoryHeading}>{category}</div>
              <div className={styles.cardsWrapper}>
                {categories[category].map((card, index) => {
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
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
