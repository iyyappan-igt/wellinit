import React from 'react'
import { Service } from '../Constants/Service'

function Ourservice() {
    return (
        <section className='service-sec'>
            <div className="container">
                <div className="service-title text-center">
                    <h2>{Service.title}</h2>
                </div>
                <div className="row mt-5">
                    {
                        Service.services.map((data , i)=>{
                          return(
                            <div className="col-lg-6 d-flex justify-content-center" key={i}>
                            <div className="serv-box">
                                <div className="serv-img">
                                    <img src={data?.image} className='img-fluid'/>
                                </div>
                                <div className="serv-name text-center">
                                    <h5>{data?.name}</h5>
                                </div>
                            </div>
                        </div>
                          )
                        })
                    }
                    <div className="explore-btn text-center">
                        <button className='btn'>{Service.button}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourservice
