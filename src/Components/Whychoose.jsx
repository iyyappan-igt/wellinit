import React from "react";
import { Link } from "react-router-dom";

function Whychoose() {
  return (
    <section className="choose-sec">
      <div className="container">
        <div
          className="choose-title text-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h2>Why Choose Wellinit ?</h2>
        </div>
        <div className="choose-option ">
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div className="choose-box d-flex align-items-center justify-content-center gap-4">
                <div
                  className="choose-img"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img src="\assets\icon1.png" className="img-fluid" />
                </div>
                <div
                  className="choose-name"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h5>EHR Versatility</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div className="choose-box d-flex align-items-center justify-content-center gap-4">
                <div
                  className="choose-img"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img src="\assets\icon2.png" className="img-fluid" />
                </div>
                <div
                  className="choose-name "
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h5>Cost efficient & Scalability</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div className="choose-box d-flex align-items-center justify-content-center gap-4">
                <div
                  className="choose-img"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img src="\assets\icon5.png" className="img-fluid" />
                </div>
                <div
                  className="choose-name "
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h5>Seamless Technology Integration</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div className="choose-box d-flex align-items-center justify-content-center gap-4">
                <div
                  className="choose-img"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img src="\assets\icon3.png" className="img-fluid" />
                </div>
                <div
                  className="choose-name"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h5>Boost Net collections rate</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div className="choose-box d-flex align-items-center justify-content-center gap-4">
                <div
                  className="choose-img"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img src="\assets\icon4.png" className="img-fluid" />
                </div>
                <div
                  className="choose-name"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h5>Comprehensive Revenue Cycle Management</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div className="choose-box d-flex align-items-center justify-content-center gap-4">
                <div
                  className="choose-img"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img src="\assets\icon6.png" className="img-fluid" />
                </div>
                <div
                  className="choose-name"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h5>HIPAA-Compliant Data Security</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="choose-button text-center my-xl-5 my-lg-4  mt-4"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Link to="/contact">
            {" "}
            <button className="btn">Learn More About Our Services</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Whychoose;
