import "./contact1.css"
import "./contact2.css"
import "./contact3.css"
import "../home/style.css"
import { ReactComponent as Svg1 } from "../../assets/svg/square-envelope-solid.svg"
import { ReactComponent as Svg2 } from "../../assets/svg/message-solid.svg"

const Contact = () => {
    return (
        <div id="contact-container">
            <main id="midbody1">
                <div className="contain1contact">
                    <div className="leftcontact-1">


                        <h1 id="contbody1h2-1"> Visit Our Institution</h1>

                        <iframe title='iframe-map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311.2642307868758!2d82.48850961358245!3d28.03814184010112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd27f9507e0d5098!2sFuji%20International%20Japanese%20Language%20Center!5e0!3m2!1sen!2snp!4v1656068394299!5m2!1sen!2snp"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>

                    <div className="img4-div">
                        <img src={require("../../assets/img/img4.png")} className="img4" alt='' />
                    </div>
                </div>
            </main>

            <main id="midbody2">
                <div className="contain-contact-2">
                    <div className="img5-div">
                        <img src={require("../../assets/img/img5.png")} alt="" className="img5" />
                    </div>

                    <div className="containtxt-2">
                        <div className="email">
                            <h1 className="contact-h1-2" id="contbody2h2-1">Send Us E-mail</h1>

                            <p id="contbody1p-2">

                                <Svg1 id="svg1" alt='' />sumanjoop@gmail.com
                            </p>
                        </div>
                        <div className="sms">

                            <h1 className="contact-h1-2" id="contbody2h2-1">Send Us SMS</h1>

                            <p id="contbody2p-2">

                                <Svg2 id="svg2" alt='' />
                                +977 9857834683
                            </p>

                        </div>
                    </div>

                </div>

            </main>

            <main id="midbody3">
                <div className="contain3contact">
                    <div className="contact-left-3">
                        <h1 className="contbody1h2-3"> Live Chat Via Messenger</h1>
                        <div className="msgbox">
                            <div className="img14-div">
                                <img src={require("../../assets/img/messenger-logo.png")} id="img14" alt="" />
                            </div>
                            <div className="contain_chatnow">
                                <a href="https://m.me/fujijapaneselanguagedang" target="_blank" rel="noopener noreferrer" >                     <div className="chatnow">

                                    <p id="contbody1p-3">Chat Now</p>
                                </div> </a></div>
                        </div>
                    </div>
                    <div className="img9-div">
                        <img src={require("../../assets/img/img9.png")} className="img9" alt='' />
                    </div>
                </div>
            </main>


        </div>

    )
}

export default Contact