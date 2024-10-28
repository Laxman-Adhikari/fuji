"use client";
import React from "react";

import { easeInOut, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const variants = {
  animate: {
    type: "spring",
    stiffness: 2000,
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: easeInOut,
    },
  },

  whileHover: {
    scale: 1.1,
    transition: {
      scale: [null, 1.2, 1],
      duration: 2,
    },
  },
};
const Letter = ({ letter, bgcolor, txtcolor, position }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Speed and direction of floating
  const speedX = 1; // Adjust this for horizontal speed
  const speedY = 1; // Adjust this for vertical speed
  const boundaryX = window.innerWidth;
  const boundaryY = window.innerHeight;
  useEffect(() => {
    // Function to handle the floating animation
    const floating = () => {
      let directionX = 1; // Direction for x-axis movement
      let directionY = 1; // Direction for y-axis movement

      const float = () => {
        const currentX = x.get();
        const currentY = y.get();
        if (currentX >= boundaryX || currentX <= "-400") directionX *= -1;
        if (currentY >= boundaryY || currentY <= -boundaryY) directionY *= -1;

        x.set(currentX + speedX * directionX); // Update x position
        y.set(currentY + speedY * directionY); // Update y position

        // Ensure the motion keeps running
        requestAnimationFrame(float);
      };

      float(); // Start the floating loop
    };

    floating(); // Start floating animation on mount

    return () => cancelAnimationFrame(floating); // Clean up when unmounting
  }, [x, y, speedX, speedY, boundaryX, boundaryY]);

  return (
    <motion.div
      style={{
        x,
        y,
        position: "absolute",
        display: "inline-block",
        background: bgcolor,
        color: txtcolor,
        borderRadius: "10px",
        inset: position
          .map((val) => (typeof val === "number" ? `${val}px` : val))
          .join(" "),
        opacity: "70%",
        padding: " 0 10px",
        fontSize: "2rem",
        fontStyle: "Inter",
        width: "fit-content",
        height: "fit-content",
        zIndex: "4",
        WebkitUserSelect: "none" /* Safari */,
        msUserSelect: "none" /* IE 10 and IE 11 */,
        userSelect: "none" /* Standard syntax */,
      }}
      variants={variants}
      whileHover="whileHover"
      drag
      animate={{
        rotate: [0, 50, -50, 0],

        stiffness: 2000,
        transition: {
          repeat: Infinity,
          type: "spring",
          duration: 4,
        },
      }}
      dragConstraints={{ left: -100, right: 100, top: -120, bottom: 120 }}
      dragElastic={1.1} // Controls the bounce-back effect
      dragTransition={{ bounceStiffness: 1, bounceDamping: 1 }}
    >
      {letter}
    </motion.div>
  );
};

export default Letter;
