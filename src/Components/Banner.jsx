import React, { useEffect } from "react";
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
              <a href="#letstalk">
                <button class="button">
                  <span>G</span>
                  <span>e</span>
                  <span>t</span>
                  <span className="pp"> </span>
                  <span>F</span>
                  <span>r</span>
                  <span>e</span>
                  <span>e</span>
                  <span className="pp"> </span>
                  <span>C</span>
                  <span>o</span>
                  <span>n</span>
                  <span>s</span>
                  <span>u</span>
                  <span>l</span>
                  <span>t</span>
                  <span>a</span>
                  <span>t</span>
                  <span>i</span>
                  <span>o</span>
                  <span>n</span>
                </button>
              </a>
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
