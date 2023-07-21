"use client";
import styles from "../crew/Crew.module.scss";
import { useState, useEffect, useLayoutEffect } from "react";
import myData from "../../data/data.json";
import Pageheader from "@/components/Pageheader/Pageheader";
import { gsap } from "gsap";

export default function Crew() {
  const crewList = myData.crew;
  const [activeIndex, setActiveIndex] = useState(0);

  const moveLeftOut = () =>
    gsap.timeline().to(".a-left-close", {
      x: "-10%",
      opacity: 0,
      duration: 0.2,
      willChange: "transform, opacity",
    });

  const moveRightOut = () =>
    gsap.timeline({ delay: 0.4 }).to(".a-right-close", {
      x: "10%",
      opacity: 0,
      duration: 0.2,
      willChange: "transform, opacity",
    });
  const moveLeftIn = () =>
    gsap.timeline({}).fromTo(
      ".a-left-close",
      {
        x: "-10%",
        opacity: 0,
        willChange: "transform, opacity",
      },
      {
        x: "0%",
        opacity: 1,
        willChange: "transform, opacity",
      }
    );
  const moveRightIn = () =>
    gsap.timeline({ delay: 0.4 }).to(".a-right-close", {
      x: "0%",
      opacity: 1,
      willChange: "transform, opacity",
    });

  const handleBulletClick = (index) => {
    if (activeIndex !== index) {
      (() => moveLeftOut())();
      (() => moveRightOut())();
      setTimeout(() => {
        setActiveIndex(index);
        moveRightIn();
        moveLeftIn();
      }, 700);
    }
  };

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
        duration: 1, // Set the duration for the animation (in seconds)
        ease: "power5.out", // Use the correct easing function
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
        duration: 1, // Set the duration for the animation (in seconds)
        ease: "power5.out", // Use the correct easing function
      }
    );
  }, []);

  return (
    <main className={styles.crew}>
      <Pageheader number="02" title="Meet your crew" />

      <section className={styles.container}>
        <div className={`${styles.image_wrapper} a-right-close`}>
          <picture>
            <source
              srcSet={`${crewList[activeIndex].images.webp}`}
              type="image/webp"
            />
            <img
              className={styles.crew__pic}
              src={`${crewList[activeIndex].images.png}`}
              alt={crewList[activeIndex].name}
            />
          </picture>
        </div>
        <div className={`${styles.text_wrapper} a-left-close`}>
          <nav className={styles.pagination}>
            {crewList.map((_, index) => (
              <span
                key={index}
                className={`${styles.pagination__button} ${
                  index === activeIndex ? styles.pagination__button__active : ""
                }`}
                onClick={() => {
                  handleBulletClick(index);
                }}
              ></span>
            ))}
          </nav>
          <section className={styles.person}>
            <h4 className={`${styles.person__role} heading-four`}>
              {crewList[activeIndex].role}
            </h4>
            <h3 className={`${styles.person__name} heading-three`}>
              {crewList[activeIndex].name}
            </h3>
            <p className={`${styles.person__text} text`}>
              {crewList[activeIndex].bio}
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
