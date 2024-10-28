"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Popup = ({ click, state }) => {
  console.log("above" + click);

  const [visible, setVisible] = useState();

  useEffect(() => setVisible(click), [state, click]);

  console.log("after" + visible);

  return (
    <>
      {visible && (
        <div
          className="container"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: "7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="wrapper"
            style={{
              zIndex: "5",
              height: "8rem",
              padding: "0 1rem",
              backgroundColor: "white",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              position: "relative",
              bottom:"15vh",
            }}
          >
            <div>
              <Image
                alt=""
                src="/img/objects/multiply.svg"
                height={10}
                width={10}
                style={{
                  position: "absolute",
                  right: "7%",
                  top: "10%",
                  cursor : "pointer"
                }}
                onClick={() => {
                  setVisible(false);
                }}
              />
              <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                      alt=""
                      src="/img/objects/filledArrow.svg"
                      height={20}
                      width={20}
                    />
                <h4
                  style={{
                    color: "black",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  <div style={{ position: "relative", zIndex: "4" }}>
                 
                    Submit a detailed form {" "}
                    <Link
                      style={{
                        color: "#1878E9",
                        textDecoration: "underline",
                        pointer: "cursor",
                        position: "relative",
                        zIndex: "5",
                      }}
                      href="https://docs.google.com/forms/d/e/1FAIpQLScGkrumcjoyKivTfmP3FHXSvTQqcrKtIh7y9khO73_1cNvehA/viewform"
                    >
        
                      here
                    </Link>
                    <svg
                      style={{
                        position: "absolute",
                        zIndex: "3",
                        right: 0,
                        top: "-75%",
                        opacity: "60%",
                        height: 70,
                        width: 100,
                      }}
                      width="296"
                      height="277"
                      viewBox="0 0 296 277"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        variants={variants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 1 }}
                        d="M48.1833 170.199C72.0587 158.82 133.171 145.182 186.616 181.665C240.06 218.147 266.108 163.773 272.455 132.027M272.455 132.027L256.048 140.059M272.455 132.027L281.098 147.252"
                        stroke="#424242"
                        stroke-width="5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </h4>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                alt=""
                src="/img/objects/filledArrow.svg"
                height={20}
                width={20}
              />
              <h4
                style={{
                  color: "black",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: "400",
                }}
              >
             Call   <a href="tel:(+977)9857834683"> <span style={{
                  color: "#1878E9",
                  textDecoration:"underline"
                }}> 9857834683 </span></a>for Quick Inquiry
                
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
