"use client";

import { useRef, useLayoutEffect } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { gsap } from "gsap";
import { useActiveLink } from "@/components/ActiveLinkContext/ActiveLinkContext";


export default function Home() {
  const texts = useRef([]);
  const box = useRef([]);
  const tl = useRef();
  let { setActiveLink } = useActiveLink()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline();
  
      texts.current.forEach((text) => {
        tl.current.to(text, {
          opacity: "1",
          x: "0",
          duration: 0.35,
          ease: "power6.out",
          autoAlpha: 1,
        });
      });
      gsap.timeline({ delay: 1 }).to(".a-button", {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power1.out",
      }).to('.a-button-text', { 
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    }, document);
  
  }, []);


 

  return (
    <>
      <main className={styles.home}>
        <section ref={(el) => (box.current = el)} className={styles.hero}>
          <span
            ref={(el) => texts.current.push(el)}
            className="heading-five a-box"
          >
            So, you want to travel to
          </span>
          <h1
            ref={(el) => texts.current.push(el)}
            className={`${styles.home__heading} heading-one a-box`}
          >
            Space
          </h1>
          <p ref={(el) => texts.current.push(el)} className={` ${styles.home__text} text a-box`}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <Link onClick={()=>setActiveLink("destination")} href="/destination" className={`${styles.explore_button} a-button`}>
          <span role="button" aria-label="explore site" className="heading-four a-button-text">EXPLORE</span>
        </Link>
      </main>
    </>
  );
}
