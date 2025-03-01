import React from 'react'
import { Intro } from '../Constants/Intro'

function Introduction() {
    return (
        <section>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-6 p-0">
                        <div className="into-img position-relative h-100">
                            <img src={Intro.Mainbanner} className='img-fluid h-100'/>
                            <div className="sub-img position-absolute">
                                <img src={Intro.Subanner} className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="intro-content h-100">
                            <h5>{Intro.Title}</h5>
                            <h2>{Intro.Subtitle}</h2>
                            <p>{Intro.Description}</p>
                            <p>{Intro.Description2}</p>
                        </div>
        
                      
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction
