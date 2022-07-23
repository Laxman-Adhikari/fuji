import React from "react"
import "./style.css"
import "./home1.css"
import "./home2.css"
import "./home3.css"
import "../contact/Contact"

import { useNavigate } from 'react-router-dom';





const Home = () => {
  

function btn1click(){
    document.location.href="https://forms.gle/RJz8ZLp1J8YyzoQ69"
}

const Navigate = useNavigate()
function btn2click(){
Navigate ("/contact" );
}
    
    return (

        <div id="home-container">
            
                <main id="body1">
                    <div className="home-up-1">
                        <h1 id="home-h1-1"> “A Complete Language Learning Institution”</h1>
                        <p id="home-p1-1">Offering Qualitative & Productive Education </p>
                    </div>
                    <div className="home-mid-1">

                        <div className="home-left-1">
                            <h2 id="home-h2-1"> Planning to Study Abroad?</h2>
                            <div className="midcbtn">
                                <button className="midbtn" id="midbtn1" onClick={btn1click}>Register Online</button>
                            
                                <button className="midbtn" id="midbtn2" onClick={btn2click}>Visit Us</button>
                            </div>
                        </div>
                        <div className="img1-div">
                            <img src={require("../../assets/img/img1.png")} alt='' id="img1"/>
                        </div>
                    </div>
                </main>
                <main id="body2">
                    <div className="b2-home-items">
                        <div className="img2-div">
                            <img src= {require("../../assets/img/img2.png")}  alt='' id="img2"/>
                        </div>


                        <div className="right-body-2">
                            <h2 id="h2-home-2"> Ongoing Language Classes</h2>
                            <ul id="ul-home-2">
                                <li>English <img id="flags" src= {require ("../../assets/img/flags/united-kingdom.png")}  alt='' /> <img id="flags"
                                    src={require("../../assets/img/flags/australia.png")}  alt='' />
                                    <img id="flags" src= {require("../../assets/img/flags/usa.png")}  alt='' /></li>

                                    <li>Korean <img id="flags" src= {require("../../assets/img/flags/south-korea.png")}  alt=''/> </li>
                                    <li>Japanese <img id="flags" src= {require("../../assets/img/flags/japan.png")}  alt='' /> </li>
                          </ul>
                        </div>
                    </div>
                </main>
                <main id="body3">
                    <div className="container-home-3">
                        <div className="right-home-3">
                            <h2 id="h2-home-3"> Featuring</h2>
                            <ul id="ul-home-3">
                                <li> <img src= {require ("../../assets/img/right-arrow.png")} className="right-arrow" alt='' /> Cost Effective classNamees</li>
                                <li> <img src={require ("../../assets/img/right-arrow.png")}  className="right-arrow"  alt='' /> Unlimited Study Materials</li>
                                <li> <img src={require ("../../assets/img/right-arrow.png")}  className="right-arrow" alt=''/> University Passed Instructors</li>
                                <li> <img src={require ("../../assets/img/right-arrow.png")}  className="right-arrow"  alt=''/> Interactive Learning Environment</li>
                            
                            </ul>
                        </div>
                        <div className="img3-div">
                            <img src= {require ("../../assets/img/img3.png")}  className="img3" alt=''/>
                        </div>

                    </div>
            </main>
            





        
        </div>

   
  )
}

export default Home