import React from 'react'
import {wellinitData} from '../Constants/Whywell.contant.js/Whywell'
import Blogs from '../Components/Blogs'
import Letstalk from '../Components/Letstalk'


function Whywellinit() {
    return (
        <section className='whywell'>

            <div className="protect-well">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="protect text-lg-start text-center">
                                <h2>{wellinitData.protect.title}</h2>
                                <p>{wellinitData.protect.description}</p>
                                <button className='btn'>{wellinitData.protect.button}</button>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="protect-img text-center">
                                <img src={wellinitData.protect.image} className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="compherensive">
                <div className="container">
                    <div className="comp-title d-flex justify-content-center text-center">
                        <h2>{wellinitData.compherensive.title}</h2>
                    </div>
                    <div className="row ">
                           {
                            wellinitData.compherensive.points?.map((data)=>{
                                return(
                                    <div className="col-lg-6  col-md-6 col-12 d-flex justify-content-center">
                                        <div className="camp-box">
                                            <div className="camp-icon">
                                                <img src={data?.icon} className='img-fluid'/>
                                            </div>
                                            <div className="camp-name">
                                                <h4>{data?.title}</h4>
                                            </div>
                                            <div className="camp-des">
                                                <p>{data?.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                           }
                    </div>
                </div>
            </div>

            <Blogs/>

            <Letstalk/>

        </section>


    )
}

export default Whywellinit
