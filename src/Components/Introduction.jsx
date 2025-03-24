import React from "react";
import { Intro } from "../Constants/Intro";
import { Link } from "react-router-dom";

function Introduction() {
  return (
    <section>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-6 d-none  d-lg-block p-0 ">
            <div className="into-img position-relative h-100">
              <img src={Intro.Mainbanner} className="img-fluid  h-100" />
              <div className="sub-img position-absolute">
                <img src={Intro.Subanner} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 p-0 ">
            <div className="main-intro position-relative">
            <div className="ic-overlay d-lg-block d-none position-absolute"></div>
            <div className="ic-overlay2 d-block d-lg-none position-absolute"></div>
            <div
              className="intro-content text-lg-start text-center"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h5>{Intro.Title}</h5>
              <p className="mb-3"><span>Wellinit</span> delivers specialized RCM staffing & consulting solutions for <span> athenaOne </span> providers across the <span> USA </span>.
                 Our team of <span> athenaOne </span> specialists has extensive experience working with <span> athenaHealth clinicals, 
                collectors, and communicators </span> for more than 100+ AthenaHealth clients over the past decade.</p>

                <p>Our experts have a proven track record of successfully using <span> athenahealth's </span> superior technology, including 
                 <span> Claim cycle, Rule engine, Denial workflows, Case management, and Reporting functions </span> to achieve their
                 desired results.</p>
           
             <Link to="/athena"> <button className="btn">{Intro?.button}</button></Link>
            </div>
           
            </div>
   
          </div>
          <div className="col-lg-6  col-md-12 d-block d-lg-none p-0">
            <div className="into-img position-relative">
              <img src={Intro.Mainbanner} className="img-fluid" />
              <div className="sub-img position-absolute">
                <img src={Intro.Subanner} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
