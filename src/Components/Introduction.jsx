import React from 'react'
import { Intro } from '../Constants/Intro'

function Introduction() {
    return (
        <section>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-6 d-none  d-lg-block p-0">
                        <div className="into-img position-relative ">
                            <img src={Intro.Mainbanner} className='img-fluid '/>
                            <div className="sub-img position-absolute">
                                <img src={Intro.Subanner} className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 p-0 ">
                        <div className="intro-content text-lg-start text-center" data-aos="fade-left"
   data-aos-duration="1500">
                            <h5>{Intro.Title}</h5>
                            <h2>{Intro.Subtitle}</h2>
                            <p>{Intro.Description}</p>
                            <p>{Intro.Description2}</p>
                        </div>
        
                      
                    </div>
                    <div className="col-lg-6  col-md-12 d-block d-lg-none p-0">
                        <div className="into-img position-relative">
                            <img src={Intro.Mainbanner} className='img-fluid'/>
                            <div className="sub-img position-absolute">
                                <img src={Intro.Subanner} className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction
