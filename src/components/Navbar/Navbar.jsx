"use client";

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { Spin as Hamburger } from "hamburger-react";
import { gsap } from "gsap";
import { useActiveLink } from "../ActiveLinkContext/ActiveLinkContext";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { activeLink, setActiveLink } = useActiveLink();
  const menuRef = useRef(null);
  const tl = useRef();

  const clickHamburger = () => document.querySelector(".hamburger-react").click();
  const handleLinkClick = (link) => {
    setIsClicked(false);
    clickHamburger();
    setActiveLink(link);
  };


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 1.5 })
        .to(".a-logo", {
          x: "0%",
          duration: 0.3,
          ease: "power1.out",
        })
        .to(".a-nav", { opacity: 1 });
    }, document);

    
  }, []);
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isClicked &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        event.target.parentNode.type !== "submit" &&
        event.target.nodeName !== "DIV"
      ) {
        setIsClicked(false);
        clickHamburger();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClicked]);

 
  return (
    <header className={styles.header}>
      <Link onClick={()=>setActiveLink('home')} href="./" className="a-logo" >
        <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </Link>
      <button role="button" aria-label="navigation"  onClick={() => setIsClicked(!isClicked)} className={`${styles.toggler} a-nav`}>
        <Hamburger color="#FFFFFF" />
      </button>
      <nav>
        <ul ref={menuRef} data-expanded={isClicked} className={`${styles.nav} a-nav`}>
          <li className={styles.nav__item}>
            <Link onClick={() => handleLinkClick("home")} className={`nav-text ${activeLink === "home" ? styles.nav__item__active : ""}`} href="/">
              <span aria-hidden="true" className={styles.nav__number}>00</span> Home
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link onClick={() => handleLinkClick("destination")} className={`nav-text ${activeLink === "destination" ? styles.nav__item__active : ""}`} href="/destination">
              <span aria-hidden="true" className={styles.nav__number}>01</span> Destination
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link onClick={() => handleLinkClick("crew")} className={`nav-text ${activeLink === "crew" ? styles.nav__item__active : ""}`} href="/crew">
              <span aria-hidden="true" className={styles.nav__number}>02</span> Crew
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link onClick={() => handleLinkClick("technology")} className={`nav-text ${activeLink === "technology" ? styles.nav__item__active : ""}`} href="/technology">
              <span aria-hidden="true" className={styles.nav__number}>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;