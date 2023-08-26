import "./footer.css";
import "../home/style.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [clicked, setClick] = useState(false);
  function handleclick() {
    setClick(!clicked);
  }

  const [clicked1, setClick1] = useState(false);

  function handleclick1() {
    setClick1(!clicked1);
  }
  const [clicked2, setClick2] = useState(false);

  function handleclick2() {
    setClick2(!clicked2);
  }

  // const viber =  document.querySelector("#viber-p")

  // let count2 = 0
  // viber.addEventListener("click", function() {
  //     if (count2 === 1) {
  //         viber.innerText= "Viber"
  //         count2 = 0

  //     }
  //     else {
  //         viber.innerText = "+977 9857834683"
  //         count2 = 1
  //     }
  // })

  // const whatsapp =  document.querySelector("#whatsapp-p")

  // let count3 = 0
  // whatsapp.addEventListener("click", function() {
  //     if (count3 === 1) {
  //         whatsapp.innerText= "Whatsapp"
  //         count3 = 0

  //     }
  //     else {
  //         whatsapp.innerText = "+977 9857834683"
  //         count3 = 1
  //     }
  // })

  return (
    <footer>
      <div className="foot-1">
        <div className="foot-socials">
          <h4>Socials</h4>
          <ul className="ul-foot-1">
            <a
              href="https://www.facebook.com/fujijapaneselanguagedang"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li id="fb-li">
                {" "}
                <img
                  src={require("../../assets/img/facebook.png")}
                  className="social-icon"
                  alt=""
                />{" "}
                Facebook{" "}
              </li>
            </a>
            <li id="viber-li">
              <img
                src={require("../../assets/img/viber.png")}
                className="social-icon"
                alt=""
              />{" "}
              <p id="viber-p" onClick={handleclick1}>
                {" "}
                {clicked1 ? "+977 9857834683" : "Viber"}{" "}
              </p>
            </li>
            <li id="whatsapp-li">
              {" "}
              <img
                src={require("../../assets/img/whatsapp.png")}
                className="social-icon"
                alt=""
              />{" "}
              <p id="whatsapp-p" onClick={handleclick2}>{clicked2 ? "+977 9857834683" : "Whatsapp"} </p>
            </li>
          </ul>
        </div>
        <div className="foot-navigation">
          <h4>Navigation Links</h4>
          <ul className="ul-foot-2">
            <li id="home1">
              <NavLink to="/" className="navlink2">
                Home{" "}
              </NavLink>{" "}
            </li>
            <li id="contact1">
              {" "}
              <NavLink to="/contact" className="navlink2">
                Contact Us
              </NavLink>
            </li>
            <li id="about1">
              {" "}
              <NavLink to="/about" className="navlink2">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-2">
        <p>
          {" "}
          Copyright &copy; {new Date().getFullYear()} FUJI INTERNATIONAL
          EDUCATIONAL CONSULTANCY{" "}
        </p>
      </div>

      <div className="foot-3">
        <h4 id="dev-detail" onClick={handleclick}>
          {" "}
          {clicked ? <div></div> : <div>Show Developer Details</div>}{" "}
        </h4>
        <h4 id={clicked ? null : "detail-1"} className={clicked ? "on1" : null}>
          {" "}
          Developed By: Komalhari Shrestha
        </h4>
        <h4 id={clicked ? null : "detail-2"} className={clicked ? "on2" : null}>
          {" "}
          <img
            src={require("../../assets/img/mail-icon.png")}
            className="mail-icon"
            alt=""
          />
          komalhari777@gmail.com
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
