"use client";
import styles from "../destination/Destination.module.scss";
import { useState, useLayoutEffect, useRef } from "react";
import myData from "../../data/data.json";
import Pageheader from "@/components/Pageheader/Pageheader";
import { gsap } from "gsap";

export default function Destination({planetData}) {
  const [selectedPlanet, setSelectedPlanet] = useState("Moon");
  const currentPlanet = myData.destinations.filter(
    (el) => el.name === selectedPlanet
  )[0];
  const {
    name: planetName,
    images: planetImages,
    description: planetDescription,
    distance: planetDistance,
    travel: planetTravel,
  } = currentPlanet;
  


  const planetImageRef = useRef(null);

  useLayoutEffect(()=>{
    const tl = gsap.timeline({ delay: 0 });
    tl.fromTo(
      ".a-container",
      {
        willChange: "transform, opacity",
        scale: 0.9,
        opacity: 0,
       
      },
      {
        willChange: "transform, opacity",
        scale: 1,
        opacity: 1,
        duration: 1, 
        ease: "power5.out", 

      }
    );
    gsap.to(planetImageRef.current, {
      rotation: "+=360",
      repeat: -1,
      duration: 365,
      ease: "linear",

    });
  }, [selectedPlanet]);

  return (
    <main className={styles.destination}>
      <Pageheader number="01" title="Pick your destination" />
      <section className={`${styles.container} a-container`}>
        <picture>
          <source srcSet={planetImages.webp} type="image/webp" />
          <img
          ref={planetImageRef}
            className={styles.destination__pic}
            src={planetImages.webp}
            alt={planetName}
          />
        </picture>
        <div className={styles.content}>
          <nav>
            <ul  className={styles.nav_planets}>
              <li>
                <button
                  className={`${styles.nav_planets__planet} ${
                    selectedPlanet === "Moon" &&
                    styles.nav_planets__planet__active
                  } nav-text`}
                  onClick={() => setSelectedPlanet("Moon")}
                >
                  Moon
                </button>
              </li>
              <li>
                <button
                  className={`${styles.nav_planets__planet} ${
                    selectedPlanet === "Mars" &&
                    styles.nav_planets__planet__active
                  } nav-text`}
                  onClick={() => setSelectedPlanet("Mars")}
                >
                  Mars
                </button>
              </li>
              <li>
                <button
                  className={`${styles.nav_planets__planet} ${
                    selectedPlanet === "Europa" &&
                    styles.nav_planets__planet__active
                  } nav-text`}
                  onClick={() => setSelectedPlanet("Europa")}
                >
                  Europa
                </button>
              </li>
              <li>
                <button
                  className={`${styles.nav_planets__planet} ${
                    selectedPlanet === "Titan" &&
                    styles.nav_planets__planet__active
                  } nav-text`}
                  onClick={() => setSelectedPlanet("Titan")}
                >
                  Titan
                </button>
              </li>
            </ul>
          </nav>
          <h2 className={`${styles.destination__heading} heading-two`}>
            {planetName}
          </h2>
          <p className={`${styles.destination__text} text`}>
            {planetDescription}
          </p>
          <hr className={styles.line}></hr>
          <div className={styles.details}>
            <div className={styles.detail}>
              <h5 className="subheading-two">Avg. distance</h5>
              <p className="subheading-one">{planetDistance}</p>
            </div>
            <div className={styles.detail}>
              <h5 className="subheading-two">Est. travel time</h5>
              <p className="subheading-one">{planetTravel}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

