import React from 'react'
import { success } from '../Constants/Success'
import CountUp from 'react-countup'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import { StarFill } from 'react-bootstrap-icons';

function Success() {
    return (
        <section className='success-sec'>
            <div className="container">
            <div className="d-lg-flex d-block justify-content-center gap-3">
            {
                        success.Data.map((data)=>{
                            return(
                                <div className="success-box d-flex align-items-baseline justify-content-lg-center justify-content-around gap-3">
                                <div className="sc-count m-0"><CountUp start={0} end={data?.data_count} /><span>+</span></div>
                                <div className="sc-name"><h5 className='m-0'>{data?.data_name}</h5></div>
                            </div>
                              
                            )
                        })
                    }
                                
             </div>
             <div className="customer-say text-center">
                <h2>Hear what our customers says</h2>
             </div>
             <div className="review-slider">
             <Swiper
              spaceBetween={10}
              slidesPerView={5}
              freeMode={true}
              // autoplay={{
              //   delay: 4000,
              //   disableOnInteraction: false,
              // }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
                1400:{
                  slidesPerView:4,
                }
              }}
              modules={[Autoplay]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="main_slider33"
            >
                {
                    success.customer.map((data)=>{
                        return(
                         <SwiperSlide>
                                 <div className="review-box h-100">
                                <div className="cst-name"><h5>{data?.name}</h5></div>
                                <div className="cst-city"><p>{data?.loction}</p></div>
                                <div className="cst-star">
                                    <StarFill/>
                                    <StarFill/>
                                    <StarFill/>
                                    <StarFill/>
                                    <StarFill/>
                                </div>
                                <div className="cst-review"><h5>{data?.review}</h5></div>
                                <div className="cst-desc">
                                    <p>{data?.description}</p>
                                </div>
                            </div>
                         </SwiperSlide>
                        )
                    })
                }
              
             

            </Swiper>
             </div>
      
            </div>
        </section>
        
    )
}

export default Success
