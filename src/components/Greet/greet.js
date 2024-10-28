"use client";

import React from "react";
import { animate, motion } from "framer-motion";
import { useState, useEffect } from "react";



const wordAnimation = {

  animate: {
    opacity: [0,1,0],
    transition: {
    duration:4,
    staggerChildren: 0.4,
    repeat: Infinity
    }
  },

};

const letterAnimation = {
  initial: { opacity: 0, },
 
  animate: { 
    opacity: [0,1,0],
    transition: { 
    duration:4,
    repeat: Infinity
  } 
  },

 
};



const language = ["Hello","こんにちは", "안녕하세요"];


const Greet = () => {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === language.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(interval);
  },[]);

  
  return (

    <>
      <div style={{
        WebkitUserSelect: "none", /* Safari */
        msUserSelect: "none", /* IE 10 and IE 11 */
        userSelect: "none", /* Standard syntax */
      
      }}>
        
            <motion.span
              variants={wordAnimation}
              initial="initial"
              animate="animate" 
              style={{
                fontSize: '17px',
                textAlign: 'center',
                height: '2.5rem',
                display: 'flex',
                justifyContent: 'flex-start', 
                overflow: 'hidden',
                
              }}
            >
           
                {language[currentWordIndex].split("").map((subValue, subindex) => {
                  return (
                    <motion.span 
                    variants={letterAnimation} 
                    key={subindex}
                    
                    >

                      {subValue}

                    </motion.span>
                  );
                })}
              </motion.span>
          
  
      
      </div>
    </>
  );
};

export default Greet