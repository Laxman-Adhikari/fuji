"use client"

import React from 'react'
import Image from 'next/image'
import styles from "@/app/page.module.css"
import { motion } from 'framer-motion'

const variants={
  initial:{
    x: 200,
    opacity: 0
  },
  animate:{
    x:0,
    opacity: 100,
    transition:{
duration : 1,
ease: "easeInOut"

    }
  }
}


const jp_slider = () => {
  return (
    <>

    <motion.div
    variants={variants}
    initial="initial"
    whileInView="animate"
    className={styles.jpSlider}
    style={{
     
      width: "100vw",
      height: "15vh",
      background : "linear-gradient(to right, #4365e0 0%, #4365e0 100%)",
      borderRadius: "10rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      right: "-70%",
       zIndex:"2"
}} 
    
>
    <span className={styles.jpConstituents} 
         
    style={{
            position: "relative",
            right: "35%",
            display : "flex",
            gap : "5px"}}>

    <h2>Japanese</h2>
    <Image alt="" src="/img/flags/jp.png" width={30} height={30} />
    
    </span>
    
    </motion.div>
    

    </>
  )
}

export default jp_slider