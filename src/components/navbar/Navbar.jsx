
import "./navbar.css"
import "../home/style.css"
import { NavLink } from 'react-router-dom';
import { useState } from "react";




const Navbar = () => {

//     document.addEventListener('DOMContentLoaded', function () {
//         const bar = document.querySelector(".bars")
//         const header = document.querySelector("header")
//         bar.addEventListener("click", function () {
//             header.classList.toggle("active");
//         })
//     })


    const [active_menu, set_active_menu] = useState(false)


const [active_ham, set_active_ham] = useState(false)
const ham_toggle=()=>{
    if (window.innerWidth < 1026){
    set_active_ham(!active_ham)
    set_active_menu(!active_menu)
    }
}

const menu_toggle= ()=>{ 
    set_active_menu(!active_menu)
    set_active_ham(!active_ham)
}
    return (

        <header>
            <nav>
                <div className="logobar">
                    <div className="logo">

                        <NavLink to="/" ><img id="fujilogo" src={require("../../assets/img/logo.png")} alt='' /> </NavLink>
                    </div>

          <div  className= {active_ham ? "bar_active" : "bars"} >
           
                        <div id="bar1"> 
                            <img id="bar1img" onClick={ham_toggle} src={require("../../assets/img/bars-solid.png")} alt='' />
                        </div>
                        <div id="bar2">
                            <img id="bar2img" onClick={ham_toggle} src={require("../../assets/img/bars-staggered-solid.png")} alt='' />
                        </div>

                    </div>

                </div>
          
                <ul  className={active_menu ? "navul" : "not_navul"}>
                    <li id="home1"  onClick={menu_toggle} > <NavLink to="/" className="navlink1"  >Home </NavLink> </li>
                    <li id="contact1"   onClick={menu_toggle}><NavLink to="/contact" className="navlink1"    > Contact Us</NavLink></li>
                    <li id="about1"   onClick={menu_toggle}> <NavLink to="/about" className="navlink1"  >About</NavLink></li>

                </ul>

            </nav>

        </header>
    )
}

export default Navbar