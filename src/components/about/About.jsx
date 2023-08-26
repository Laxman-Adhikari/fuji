

import "./about1.css"

import "../home/style.css"
import { ReactComponent as Svg3} from "../../assets/svg/location-dot-solid.svg"


const About = () => {

  return (
    <div id="about-container">
    <main id="aboutbody-1">
    <div className="about-contain-1">
        <div className="about-left-1">
            <h1 id="abouth1-1-1">About Instituition</h1>
            <p id="about-p1-1">
                Fuji International Education Consultancy is a language learning Instituition

                for Nepali students who want to develop their communication skills and knowledge on
                their desired language.
                
            </p>

            <p id="about-p2-1"> Our sole motto is 'to facilitate the students for studying abroad
                wihout language barrier'.

            </p>
            <p id="about-p3-1"> Established on: </p>
            <div className="location">
                <div className="svglocation">
                    <Svg3 id="svg3"  alt=''/>
                </div>
                <div className="locationtxt">
                    <a href="https://goo.gl/maps/BtSXmfrtDPmPBtxW6" target="_blank" rel="noopener noreferrer" >B.P. Chowk, Ghorahi, Dang</a>
                </div>
            </div>
        </div>
        <div className="img13-div">
            <img src= {require("../../assets/img/img13.png")} className="img13" alt=''/>
        </div>
    </div>
</main>
</div>
  )
}

export default About