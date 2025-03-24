import React, { useEffect } from "react";
import { Athena } from "../Constants/Athena.contant.js/Athena";
import { Link } from "react-router-dom";

function Athenapage() {
  return (
    <section className="athpage">
      <div className="athena-frame ">
        <div className="container text-center">
          <div className="athena-frame2">
            <div
              className="d-flex align-items-center justify-content-center gap-xl-4 gap-3"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="atimg1">
                <img src={Athena.banner[0]?.well_img} className="img-fluid" />
              </div>
              <h2 className="m-0">&</h2>
              <div className="atimg2">
                <img src={Athena.banner[0]?.ath_img} className="img-fluid" />
              </div>
            </div>
            <h2 data-aos="zoom-in" data-aos-duration="1500">
              {Athena.banner[0]?.title}
            </h2>

            <p data-aos="fade-right" data-aos-duration="1500">
              {Athena.banner[0]?.description}
            </p>
            <p data-aos="fade-left" data-aos-duration="1500">
              {Athena.banner[0]?.description_2}
            </p>
          </div>
        </div>
      </div>

      <div className="athena-main">
        <div className="athena-banner text-center">
          <img src={Athena.banner[0]?.image} className="img-fluid" />
        </div>
      </div>

      <div className="common-issue value-issue">
        <div className="container">
          <div className="ci-title d-flex justify-content-center   text-center align-items-center">
            <h2 data-aos="zoom-in" data-aos-duration="1500">
              {Athena.partner[0]?.title}
            </h2>
          </div>
          <div className="ci-issue mt-3">
            {Athena.partner[0]?.points.map((data, i) => {
              return (
                <div
                  className="d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="ci-point value-point d-flex align-items-center gap-4">
                    <div className="ci-icon">
                      <img src={data.icon} className="img-fluid" />
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

      <div className="modular-service">
        <div className="container">
          <div
            className="athena-modular"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="d-md-flex  d-block align-items-center justify-content-start gap-2">
              <div className="mdimg">
                <img src={Athena.banner[0]?.ath_img} className="img-fluid" />
              </div>
              <h2 className="m-0">{Athena.modular[0]?.title}</h2>
            </div>
            <p>{Athena.modular[0]?.description}</p>
          </div>
          <div className="ath-module">
            <div className="row">
              <div className="col-lg-5 col-md-7"  data-aos="fade-right"
                  data-aos-duration="1500">
                <div
                  className="d-flex d-md-block  justify-content-center justify-content-md-center"
              
>
                  <div className="point-list">
                    {Athena.modular[0].points.map((data, i) => {
                      return (
                        <div className="mo-point" key={i}>
                          <h5>
                            {" "}
                            <span className="px-2">{data?.id}.</span>
                            {data?.point}
                          </h5>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="last-point text-md-start text-center">
                  <p>And 15+ other tasks with Athenaone</p>
                </div>

                <div className="point-btn mt-xl-4 mt-lg-3 text-md-start text-center">
                  <Link to="/contact">
                    {" "}
                    <button className="btn">Get Free Consultation</button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-5">
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
              <div
                className="report-content text-center text-md-start"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="mdimg">
                  <img src={Athena.banner[0]?.ath_img} className="img-fluid" />
                </div>
                <h2 className="my-md-3">{Athena.report[0]?.title}</h2>
                <p>{Athena.report[0]?.description}</p>
                <Link to="/contact">
                  {" "}
                  <button className="report-btn btn text-white mt-xl-4 mt-lg-3 ">
                    Get Free Consultation
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-5"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="report-img text-center">
                <img src={Athena.report[0]?.image} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="athena-reason bg-light">
        <div className="container">
          <div className="ar-title text-center">
                <div className="d-md-flex d-block align-items-center gap-3 justify-content-center">
                <h2 className="m-0">{Athena.Reasons[0]?.title}</h2>
                <div className="mdimg">
                  <img src={Athena.banner[0]?.ath_img} className="img-fluid" />
                </div>
                </div>
                
              <div className="d-flex justify-content-center align-items-center text-center">
              <p>{Athena.Reasons[0]?.sub_title}</p>
              </div>
          </div>
          <div className="ci-issue mb-5">
            <div className="row">
              {Athena.Reasons[0]?.reason_points.map((data, i) => {
                return (
                  <div className="col-lg-6 col-md-6 ar">
                    <div className="ci-points d-flex align-items-center  gap-md-4 gap-3 my-md-3 my-2">
                      <div className="ticklogo">
                        <img
                          src="assets\reason-tick.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="ci-name fff">
                        <h5 className="m-0">{data.points}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="start-btn text-center d-md-flex justify-content-center">
            <Link to="/contact">
              <button className="btn text-light">Start Today</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Athenapage;
