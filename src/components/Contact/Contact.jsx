import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { FaVideo } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper" >
        <div className="paddings innerWidth flexCenter c-container">
            {/* {Left Side} */}
            <div className="flexColStart c-left">
                <span className="orangeText">Our Contact Us</span>
                <span className="primaryText">Easy to Contact us</span>
                <span className="secondaryText"> 
                    We always ready to help by providijng the best services for you. We
                    beleive a good blace to live can make your life better{""}
                </span>
                <div className="flexColStart contactModes">
                    {/* {First row} */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">8757647347</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">9675466557</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>
                    {/* {Second row} */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaVideo size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Video Call</span>
                                    <span className="secondaryText">9123423423</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">7211345112</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {Right Side} */}
            <div className="flexEnd c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
