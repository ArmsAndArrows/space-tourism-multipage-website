"use client";

import styles from "../technology/Technology.module.scss";
import { useState, useLayoutEffect } from "react";
import myData from "../../data/data.json";
import Pageheader from "@/components/Pageheader/Pageheader";
import { gsap } from "gsap";


export default function Technology() {
  const technologyList = myData.technology;
  
  const [activeIndex, setActiveIndex] = useState(0);
  const handleButtonClick = (index) => setActiveIndex(index);
  const {
    name: technologyName,
    images: technologyImages,
    description: technologyDescription,
  } = technologyList[activeIndex];
  useLayoutEffect(() => {
    const tl = gsap.timeline({ delay: 1 });
    gsap.fromTo(
      ".a-left-close",
      {
        x: "-10%",
        opacity: 0,
        willChange: "transform, opacity",
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1, 
        ease: "power5.out",
      }
    );
    gsap.fromTo(
      ".a-right-close",
      {
        x: "10%",
        opacity: 0,
        willChange: "transform, opacity",
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1, 
        ease: "power5.out", 
      }
    );
  }, [activeIndex]);


  return (
    <main className={styles.technology}>
    <Pageheader number="03" title="Space Launch 101"/>
      
      <section className={styles.container}>
        <div className={`${styles.image_wrapper} a-right-close`}>
          <picture>
            <source
              media="(min-width:1300px)"
              srcSet={technologyImages.portrait}
            />
            <img
              className={styles.technology__pic}
              src={technologyImages.landscape}
              alt="Launch"
            />
          </picture>
        </div>
        <div className={styles.text_wrapper}>
          <nav className={styles.selections}>
            {technologyList.map((_, index) => (
              <span
                key={index}
                className={`${styles.selections__button} ${
                  index === activeIndex && styles.selections__button__active
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {index + 1}
              </span>
            ))}
          </nav>
          <section className={`${styles.terminology} a-left-close`}>
            <h4 className={`${styles.terminology__head} subheading-two`}>
              The terminology...
            </h4>
            <h3 className={`${styles.terminology__name} heading-three`}>
              {technologyName}
            </h3>
            <p className={`${styles.terminology__text} text`}>
              {technologyDescription}
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
