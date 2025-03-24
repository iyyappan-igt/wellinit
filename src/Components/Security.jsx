import React from "react";
import { Link } from "react-router-dom";

function Security() {
  return (
    // <section className='secure-sec text-light position-relative'>
    //     <div className="conatiner">
    //         <div className="security ">
    //             <div className="left-rect position-absolute d-none d-lg-block">
    //                 <img src='\assets\Rectangle1.png' className='img-fluid'/>
    //             </div>
    //             <div className="right-rect position-absolute d-none d-lg-block">
    //                 <img src='\assets\Rectangle2.png' className='img-fluid'/>
    //             </div>
    //             <div className="left-rect2 position-absolute d-block d-lg-none">
    //                 <img src='\assets\Rectangle4.png' className='img-fluid'/>
    //             </div>
    //             <div className="right-rect2 position-absolute d-block d-lg-none">
    //                 <img src='\assets\Rectangle3.png' className='img-fluid'/>
    //             </div>
    //             <div className="frame-icon position-absolute">
    //                 <img src='\assets\Frame (1).png' className='img-fluid'/>
    //             </div>
    //              <div className="secure-title text-center">
    //                 <h2>Security & compliance </h2>
    //                 <p>at the core of everything we do</p>
    //              </div>
    //              <div className="secure-img text-center">
    //                 <img src='\assets\security.png' className='img-fluid'/>
    //              </div>
    //         </div>
    //     </div>
    // </section>

    <>
      <section className="secure-div">
        <div className="container-fluid">
          <div className="row position-relative">
            <div className="col-xl-6 col-lg-6 col-md-8 col-12">
              <div className="secure-content "
              data-aos="fade-right"
             data-aos-duration="1500">
                <div className="sc-title text-center text-md-start">
                  <h5>
                    Powering Revenue Growth with <span>AthenaOne</span>
                  </h5>
                </div>
                <div className="mainscc ">
                  <div className="scgap">
                    <div className="sc-types d-flex align-items-center  gap-3">
                      <div className="sc-icon">
                        <img src="\assets\tick.png" className="img-fluid" />
                      </div>
                      <div className="sc-data">
                        <p className="m-0">Control HOLD buckets below 10% of AR</p>
                      </div>
                    </div>
                    <div className="sc-types d-flex align-items-center gap-3">
                      <div className="sc-icon">
                        <img src="\assets\tick.png" className="img-fluid" />
                      </div>
                      <div className="sc-data">
                        <p className="m-0">
                        Reduce Above 90 days AR to 15% of overall AR
                        </p>
                      </div>
                    </div>
                    <div className="sc-types d-flex align-items-center gap-3">
                      <div className="sc-icon">
                        <img src="\assets\tick.png" className="img-fluid" />
                      </div>
                      <div className="sc-data">
                        <p className="m-0">Reach DAR below 30 days</p>
                      </div>
                    </div>

                    <div className="sc-types d-flex align-items-center gap-3">
                      <div className="sc-icon">
                        <img src="\assets\tick.png" className="img-fluid" />
                      </div>
                      <div className="sc-data">
                        <p className="m-0">Revenue Realization Rate above 99%</p>
                      </div>
                    </div>

                    <div className="sc-types d-flex align-items-center gap-3">
                      <div className="sc-icon">
                        <img src="\assets\tick.png" className="img-fluid" />
                      </div>
                      <div className="sc-data">
                        <p className="m-0">Reduction on denial rates & control front end scrubs efficiently.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sc-details text-md-start text-center">
                  <Link to="/athena"><button className="btn">Know More</button></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-4 col-12 ">
              <div className="mapimg position-absolute d-md-block d-none">
              <div className="athena text-center">
                <img src="assets\athena.png" className="img-fluid" />
              </div>
              </div>
              <div className="mapimg d-md-none d-block">
              <div className="athena text-center">
                <img src="assets\athena.png" className="img-fluid" />
              </div>
              </div>
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Security;
