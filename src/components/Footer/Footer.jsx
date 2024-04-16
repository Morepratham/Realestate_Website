import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* {Left Side} */}
                <div className="flexColStart fleft">
                    <img src="./logo2.png" alt="" width={120}/>

                    <span className="secondaryText" >
                        Our  vision is to make all people <br/>
                        the best place to live for them
                    </span>
                </div>
                {/* {Right Side} */}
                <div className="flexColstart f-right">
                    <span className="primaryText">Information</span> <br/>
                    <span className="secondaryText">142 New york, FL 212, USA </span>

                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About us</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
