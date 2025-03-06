import React from "react";
import { Homebanner } from "../Constants/Homebanner";

function Banner() {
  return (
    <section>
      <div className="container-fluid postion-relative p-0">
        <div className="banner-place1 position-absolute"></div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 position-relative">
            <div
              className="banner-content position-absolute w-100"
              data-aos="fade-right"
             data-aos-duration="1500"
            >
              <h3>{Homebanner.title}</h3>
              <p>{Homebanner.description}</p>
              <button className="btn">{Homebanner.button}</button>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <div className="banner-place2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
