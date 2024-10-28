"use client"
import React from "react";
import { motion, useVelocity } from "framer-motion";

const variants = {
  initial:{
    strokeDashoffset: 1000,
  },
  animate:{
    strokeDashoffset: 0,
    transition:{
      duration: 10,
      type: "spring",
      ease: "easeInOut"
    }
  }
}
function Arrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" 
    style={{
        position: "absolute", 
        zIndex: "2",
        transform : "rotate(300deg)",
         scale : "0.7",
         overflow: "hidden"
        
    }
    }>
      <motion.path  
      variants={variants} 
      initial="initial" 
      whileInView="animate"
      viewport= {{once: false, amount: 0.4}}

        d="M43.5 49.307q382-107 356.5 356.5-99.5 420.5 356.5 356.5"
        markerEnd="url(#SvgjsMarker2119)"
        strokeWidth={11}
        stroke="hsl(227, 71%, 57%)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="46 40"
         strokeDashoffset="1000"
      />
      <defs>
        <marker
     

          markerWidth={5}
          markerHeight={5}
          refX={2.5}
          refY={2.5}
          viewBox="0 0 5 5"
          orient="auto"
          id="SvgjsMarker2119"
        >
          <path
            fill="hsl(227, 71%, 57%)"
            d="M0 5L1.6666666666666667 2.5 0 0 5 2.5z"
          />
        </marker>
      </defs>
    </svg>
  );
}

export default Arrow;