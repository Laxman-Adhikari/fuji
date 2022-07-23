
import "./footer.css"
import "../home/style.css"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    document.addEventListener('DOMContentLoaded', function () {

const showdev = document.querySelector("#dev-detail")
const foot2 = document.querySelector(".foot-3")

showdev.addEventListener("click", function () {
    foot2.classList.toggle("on");

})

 let count1 = 0
showdev.addEventListener("click", function() {
    if (count1 === 1) {
        showdev.innerText = "Show Developer Details"
        count1 = 0

    }
    else {
        showdev.innerText = "Hide Developer Details"
        count1 = 1
    }
}
)

const viber =  document.querySelector("#viber-p")

 let count2 = 0
viber.addEventListener("click", function() {
    if (count2 === 1) {
        viber.innerText= "Viber"
        count2 = 0

    }
    else {
        viber.innerText = "+977 9857834683"
        count2 = 1
    }
})

const whatsapp =  document.querySelector("#whatsapp-p")

 let count3 = 0
whatsapp.addEventListener("click", function() {
    if (count3 === 1) {
        whatsapp.innerText= "Whatsapp"
        count3 = 0

    }
    else {
        whatsapp.innerText = "+977 9857834683"
        count3 = 1
    }
})
})

    
    return (
        
        <footer>
            <div className="foot-1">
                <div className="foot-socials">
                    <h4>Socials</h4>
                    <ul className="ul-foot-1">

                        <a href="https://www.facebook.com/fujijapaneselanguagedang" target="_blank" rel="noopener noreferrer" >  <li id="fb-li"> <img src={require("../../assets/img/facebook.png" )} className="social-icon" alt='' />  Facebook </li></a>
                        <li id="viber-li"><img src= {require("../../assets/img/viber.png")} className="social-icon" alt='' /> <p id="viber-p"> Viber </p></li>
                        <li id="whatsapp-li"> <img src= {require("../../assets/img/whatsapp.png")} className="social-icon" alt='' /> <p id="whatsapp-p"> Whatsapp </p></li>
                    </ul>
                </div>
                <div className="foot-navigation">
                    <h4>Navigation Links</h4>
                    <ul className="ul-foot-2">
                    <li   id="home1"><NavLink to= "/" className="navlink2">Home </NavLink>  </li>
                <li  id="contact1"> <NavLink to= "/contact" className="navlink2">Contact Us</NavLink></li>
                <li  id="about1"> <NavLink to="/about" className="navlink2">About</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="foot-2">
                <p> Copyright &copy; 2022 FUJI INTERNATIONAL EDUCATIONAL CONSULTANCY </p>
            </div>

            <div className="foot-3">
                <h4 id="dev-detail">Show Developer Details</h4>
                <h4 id="detail-1"> Developed By: Everestz Lab</h4>
                <h4 id="detail-2"> <img src={require("../../assets/img/mail-icon.png")} className="mail-icon" alt='' />everestzlab@gmail.com</h4>
            </div>
            
        </footer >
     
    )
  
}

export default Footer