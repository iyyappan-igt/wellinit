import React, { useEffect } from "react";
import { Athena } from "../Constants/Athena.contant.js/Athena";
import { Link } from "react-router-dom";

function Athenapage() {
  return (
    <section className="athpage">
      <div className="athena-frame pt-5">
        <div className="container text-center">
          <h4 data-aos="fade-left" data-aos-duration="1500">
            {Athena.banner[0]?.sub_title}
          </h4>
          <h2 data-aos="zoom-in" data-aos-duration="1500">
            {Athena.banner[0]?.title}
          </h2>
          <p data-aos="fade-right" data-aos-duration="1500">
            {Athena.banner[0]?.description}
          </p>
        </div>
      </div>

      <div className="athena-main position-relative ">
        <div className="athena-banner pt-5">
          <img src={Athena.banner[0]?.image} className="img-fluid" />
        </div>
        <div className="athpic">
          <img src={Athena?.banner[0]?.ath_img} className="img-fluid" />
        </div>
        <div className="wellpic">
          <img src={Athena?.banner[0]?.well_img} className="img-fluid" />
        </div>
      </div>

      <div className="common-issue">
        <div className="container">
          <div className="ci-title  text-center">
            <h2 data-aos="zoom-in" data-aos-duration="1500">
              {Athena.common_issues[0]?.title}
            </h2>
          </div>
          <div className="ci-issue">
            {Athena.common_issues[0]?.points.map((data, i) => {
              return (
                <div
                  className="d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="ci-points d-flex align-items-center gap-xl-5 gap-md-4 gap-3  my-md-3 my-2">
                    <div className="ci-tik">
                      <div className="d-flex justify-content-center mt-md-3">
                        <img
                          src="\assets\white-tick.png"
                          className="img-fluid "
                        />
                      </div>
                    </div>
                    <div className="ci-name">
                      <h5 className="m-0">{data.issues}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="modular-service">
        <div className="container">
          <div
            className="athena-modular"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h2>{Athena.modular[0]?.title}</h2>
            <p>{Athena.modular[0]?.description}</p>
          </div>
          <div className="ath-module">
            <div className="row">
              <div className="col-lg-5 col-md-6 ">
                <div className="d-flex d-md-block  justify-content-center justify-content-md-center">
                  <div
                    className="point-list"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    {Athena.modular[0].points.map((data, i) => {
                      return (
                        <div className="mo-point" key={i}>
                          <h5>
                            {" "}
                            <span>{data?.id}.</span>
                            {data?.point}
                          </h5>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="point-btn mt-xl-5 mt-lg-2 text-md-start text-center"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <Link to="/contact">
                    {" "}
                    <button className="btn text-light">
                      Get Free Consultation
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="mo-img text-center">
                  <img
                    src="\assets\obj.png"
                    className="img-fluid"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="report-service">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="report-content text-center text-md-start">
                <h2 data-aos="fade-left" data-aos-duration="1500">
                  {Athena.report[0]?.title}
                </h2>
                <p data-aos="fade-right" data-aos-duration="1500">
                  {Athena.report[0]?.description}
                </p>
                <Link to="/contact">
                  {" "}
                  <button
                    className="report-btn btn text-white mt-xl-5 mt-lg-2 "
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    Get Free Consultation
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="report-img text-center">
                <img
                  src={Athena.report[0]?.image}
                  className="img-fluid"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="common-issue value-issue">
        <div className="container">
          <div className="ci-title  text-center">
            <h2 data-aos="zoom-in" data-aos-duration="1500">
              {Athena.partner[0]?.title}
            </h2>
          </div>
          <div className="ci-issuemt-lg-5 mt-4">
            {Athena.partner[0]?.points.map((data, i) => {
              return (
                <div
                  className="d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="ci-points value-point d-flex align-items-center gap-lg-5 gap-md-4 gap-3 my-md-3 my-2">
                    <div className="jjjj">
                      <div className="d-flex justify-content-center mt-md-3">
                        <img
                          src="\assets\white-tick.png"
                          className="img-fluid "
                        />
                      </div>
                    </div>
                    <div className="ci-name fff">
                      <h5 className="m-0">{data.point}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Athenapage;
