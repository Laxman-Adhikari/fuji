"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import "@/css/footer/footer.css";
import Link from "next/link";

const Footer = () => {
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
          <Link
            href="https://www.facebook.com/profile.php?id=61558430123926&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                alt=""
                src="/img/objects/facebook.svg"
                width={30}
                height={30}
              />{" "}
              Facebook{" "}
            </span>
          </Link>

          <Link
            href="https://m.me/280123071848140?source=qr_link_share"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </Link>

          <Link
            href="viber://add?number=9779857834683"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </Link>

          <Link
            href="https://wa.me/message/AOURTRW4IDO3N1"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </Link>
        </div>
        <div
          className="devDetails"
          style={{
            width: "50vw",
            display: "flex",
            justifyContent: "space-around",
            justifySelf: "center",
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
