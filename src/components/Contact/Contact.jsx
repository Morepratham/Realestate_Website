import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div>
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* {Left Side} */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our contact</span>
                    <span className="primaryText">Easy to Contact us</span>
                    <span className="secondaryText"> 
                        We always ready to help by providijng the best services for you. We
                        beleive a good blace to live can make your life better
                    </span>
                    <div className="flexColStart contactModes">
                        <div className="flexColStart row">
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="">Call</span>
                                        <span>345345345345</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {Right Side} */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
