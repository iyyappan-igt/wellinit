import React from "react";

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
          <div className="row">
            <div className="col-lg-5">
              <div className="secure-content ">
                <div className="sc-title">
                  <h5>
                    Powering Revenue Growth with <span>AthenaOne</span>
                  </h5>
                </div>
                <div className="scgap">
                  <div className="sc-types d-flex align-items-center  gap-3">
                    <div className="sc-icon">
                      <img src="\assets\tick.png" className="img-fluid" />
                    </div>
                    <div className="sc-data">
                      <p className="m-0">98.4% Clean Claim Submission Rate</p>
                    </div>
                  </div>
                  <div className="sc-types d-flex align-items-center gap-3">
                    <div className="sc-icon">
                      <img src="\assets\tick.png" className="img-fluid" />
                    </div>
                    <div className="sc-data">
                      <p className="m-0">
                        15% Faster Payments with Online Patient Billing
                      </p>
                    </div>
                  </div>
                  <div className="sc-types d-flex align-items-center gap-3">
                    <div className="sc-icon">
                      <img src="\assets\tick.png" className="img-fluid" />
                    </div>
                    <div className="sc-data">
                      <p className="m-0">48% Higher Patient Pay Yield</p>
                    </div>
                  </div>
                </div>
      
                <div className="sc-details text-lg-start text-center">
                  <button className="btn">Know More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mapimg">
              <div className="athena text-center">
                <img src="assets\athena.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Security;
