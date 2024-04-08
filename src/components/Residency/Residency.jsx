import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Residency.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
const Residency = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>
          <Swiper{...sliderSettings}>
            <SliderButtons/>
            {
              data.map((card, i )=>(
                <SwiperSlide key={i}>
                  <div className="flexColStart r-card">
                    <img src={card.image} alt="Home"/>
                    <span>
                      <span style={{color:'orange'}}>$</span><span>{card.price}</span>
                    </span> 
                    <span className="primaryText">{card.name}</span>
                    <span className="secondaryText">{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Residency

const SliderButtons =() =>{
  const swiper = useSwiper();
  return(
    <div className="flexCenter r-button">
      <button onClick={()=> swiper.slidePrev()}> &lt; </button>
      <button onClick={()=> swiper.slideNext()}> &gt; </button>
    </div>
  )
}