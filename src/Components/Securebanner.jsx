import React from "react";
import { Link } from "react-router-dom";

function Securebanner() {
  return (
    <section className="securlock">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 p-0 d-md-block  d-none ">
            <div className="lockimg h-100">
              <img src="\assets\secure.png" className="img-fluid h-100" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 p-0">
            <div className="lock-vontent text-md-start text-center position-relative h-100">
              <div className="lk-overlay position-absolute d-none d-md-block h-100"></div>
              <div className="lk-overlay2 position-absolute d-block d-md-none h-100"></div>
              <div data-aos="fade-left" data-aos-duration="1500">
                <div className="sc-title">
                  <h5>HIPAA Compliance & Secure Data Handling</h5>
                </div>
                <p>
                  Key focus on data encryption, privacy controls, and risk
                  management
                </p>
                <div className="sc-details">
                  <Link to="/compliance"><button className="btn">Know More</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-md-none d-block p-0">
            <div className="lockimg">
              <img src="\assets\secure.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Securebanner;
