import React from 'react'
import { Link } from 'react-router-dom'

function Ourservice({theme , colorcode , servicess , iconbg , linkpage }) {


    return (
        <section className='service-sec' style={{backgroundColor : theme , color : colorcode}}>
            <div className="container">
                <div className="service-title text-center" data-aos="zoom-in" data-aos-duration="1500">
                    <h2>{servicess[0]?.title}</h2>
                </div>
                <div className="row mt-4">
                    {
                        servicess[0]?.services.map((data , i)=>{
                          return(
                        <div className="col-lg-4 col-6" key={i}>
                            <div className="service-place" id='serviceplace'>
                                <div className="d-flex justify-content-center">
                                <div className="sp-icon" style={{backgroundColor : iconbg }}>
                                    <img src={data?.image} className='img-fluid'  data-aos="zoom-out" data-aos-duration="1500"/>
                                </div>
                                </div>
                                <div className="sp-name d-flex justify-content-center text-center">
                                    <h5>{data?.name}</h5>
                                </div>
                            </div>
                        </div>
                          )
                        })
                    }
                    <div className="explore-btn text-center">
                      <Link to={linkpage}><button  className='btn'>{servicess[0]?.button}</button></Link>
                    </div>
                </div>
            </div>
        </section>
   
    )
}

export default Ourservice
