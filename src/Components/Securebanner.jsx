import React from 'react'

function Securebanner() {
    return (
        <section className="securlock">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12  p-0 d-lg-block  d-none ">
              <div className="lockimg">
                <img src="\assets\secure.png" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="lock-vontent text-lg-start text-center"  data-aos="fade-left"
             data-aos-duration="1500">
                <div className="sc-title">
                  <h5>HIPAA Compliance & Secure Data Handling</h5>
                </div>
                <p>
                  Key focus on data encryption, privacy controls, and risk
                  management
                </p>
                <div className="sc-details">
                  <button className="btn">Know More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-lg-none d-block p-0">
              <div className="lockimg">
                <img src="\assets\secure.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

      </section>
    )
}

export default Securebanner
