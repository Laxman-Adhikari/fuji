"use client";

import React from "react";
import { animate, motion } from "framer-motion";
import { useState, useEffect } from "react";



const wordAnimation = {
  initial: {
  
  },
  animate: {
   
    
    transition: {
      duration:2,
      
      staggerChildren: 0.2,
    }
  },

};

const letterAnimation = {
  initial: { opacity: 1, },
  animate: { 
    opacity: [0,1,0],
    transition: { 
    duration:2,
    repeat:Infinity,
     ease: 'easeIn'
  } 
  },

 
};

// , "こんにちは", "안녕하세요"

const language = ["Hello", "Mike", "Robert"];


const Greet = () => {



  return (

    <>
      <div>
        {language.map((value1, currentIndex) => {
          return (
            <motion.span
              key={language[currentIndex]}
              transition={{ delay: currentIndex*2}}
              variants={wordAnimation}
              initial="initial"
              animate="animate"
            >
           
                {value1.split("").map((value2, subindex) => {
                  return (
                    <motion.span 
                    variants={letterAnimation} 
                    key={subindex}>

                      {value2}

                    </motion.span>
                  );
                })}
              </motion.span>
          
          );
        })}
      </div>
    </>
  );
};

export default Greet