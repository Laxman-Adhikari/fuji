"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import "@/css/footer/footer.css"

const Footer = () => {
  const link = () => {
    window.open("https://www.youtube.com/@tech-info");
  };

  const [devDetails, setDevDetails] = useState("Show Dev Details");

  return (
    <>
      <div
        className="footer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          backgroundColor: "#282a36",
          height: "55vh",
          padding: "1rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
          }}
        >
          {" "}
          We are at your Favourite Social Platforms!
        </h2>

        <div
          className="media_container"
          style={{
            display: "grid",
            width: "100vw",
            height: "fit-content",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            placeItems: "center",
            height: "25vh",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={link}
          >
            <Image
              alt=""
              src="/img/objects/facebook.svg"
              width={30}
              height={30}
            />{" "}
            Facebook{" "}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              alt=""
              src="/img/objects/messenger.svg"
              width={30}
              height={30}
            />
            Messenger{" "}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <Image alt="" src="/img/objects/viber.svg" width={30} height={30} />
            Viber
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <Image
              alt=""
              src="/img/objects/whatsapp.svg"
              width={30}
              height={30}
            />
            Whatsapp{" "}
          </span>
        </div>
        <div className="devDetails"
          style={{
            width: "50vw",
            display: "flex",
            justifyContent: "space-around",
            justifySelf: "center"
          }}
          onClick={() => {
            setDevDetails(
              "<div> Developed By Komalhari Shrestha </div>" +
              "<div> 📧komalhari777@gmail.com </div>"
            );
          }}
          dangerouslySetInnerHTML={{ __html: devDetails }}
        />
      </div>
    </>
  );
};

export default Footer;
