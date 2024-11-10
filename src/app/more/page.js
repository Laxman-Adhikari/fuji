"use client"
import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import "@/css/more/hero.css";
import Footer from "@/components/footer/footer";
const more = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className={"hero_more"}>
          <div className={"heroLeft"}>
            <div>
              <h3>Introduction</h3>
              <p>
                Fuji International Education Consultancy is a leading
                institution dedicated to helping students achieve their academic
                goals through expert guidance and comprehensive support. We have
                over a decade of experience in providing our services.
              </p>
            </div>
            <div>
              <h3>Our Services</h3>
              <p>
                Fuji specializes in educational counseling for those aspiring to
                study abroad, offering tailored advice on university
                applications, scholarships, and career paths. In addition, the
                institution provides high-quality language courses designed to
                help students excel in language proficiency exams, empowering
                them to pursue their dreams on the global stage. At Fuji, we are
                committed to shaping futures and turning aspirations into
                reality.
              </p>
            </div>
            <div>
              <h3>Reach Us</h3>
              <p> 📍 B.P. Chowk, Ghorahi-15</p>
              <p onClick={()=>{window.open("https://maps.app.goo.gl/pGd6HimTmYWawiBF7")}}
                style={{
                  textDecoration: "underline",
                  fontStyle: "italic",
                  color: "#1878E9",
                  cursor: "pointer",
                }}
              >
                See on Google Maps
              </p>
            </div>
          </div>
          <div className={"heroRight"}>
            <Image alt="" src="/img/objects/institution.png" fill />
          </div>
        </section>
      </main>
<Footer/>
    </>
  );
};

export default more;
