"use client"

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'

const Pageheader = (props) => {
    useLayoutEffect(
        ()=>{
            gsap.timeline().to(".a-title", {
                opacity: 1,
                y: "0%",
                duration: 0.5,
            })
        }, []
    )
   
  return (
    <h1 className="heading-five heading-five--white a-title">
        <span className="heading-five__number">{props.number}</span> {props.title}
      </h1>
  )
}

export default Pageheader