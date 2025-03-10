import React from "react";
import { Athena } from "../Constants/Athena.contant.js/Athena";

function Athenapage() {
  return (
    <section className="athpage">
      <div className="athena-frame pt-5">
        <div className="container text-center">
          <h4>{Athena.banner[0]?.sub_title}</h4>
          <h2>{Athena.banner[0]?.title}</h2>
          <p>{Athena.banner[0]?.description}</p>
        </div>
      </div>

      <div className="athena-main position-relative ">
        <div className="athena-banner">
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
            <h2>{Athena.common_issues[0]?.title}</h2>
          </div>
          <div className="ci-issue mt-lg-5 mt-md-4">
            {Athena.common_issues[0]?.points.map((data, i) => {
              return (
                  <div className="d-flex justify-content-center">
                    <div className="ci-points d-flex align-items-center gap-xl-5 gap-md-4 gap-3  my-md-3 my-2">
                          <div className="ci-tik">
                               <div className="d-flex justify-content-center mt-md-3">
                               <img src="\assets\white-tick.png" className="img-fluid "/>
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
          <div className="athena-modular">
            <h2>{Athena.modular[0]?.title}</h2>
            <p>{Athena.modular[0]?.description}</p>
          </div>
          <div className="ath-module">
            <div className="row">
              <div className="col-lg-5 col-md-6 ">
                <div className="d-flex d-md-block  justify-content-center justify-content-md-center">
                <div className="point-list">
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
     
                <div className="point-btn mt-xl-5 mt-lg-2">
                    <button className="btn text-light">
                      Get Free Consultation
                    </button>
                  </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="mo-img text-center">
                  <img src="\assets\obj.png" className="img-fluid" />
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
                <h2>{Athena.report[0]?.title}</h2>
                <p>{Athena.report[0]?.description}</p>
                <button className="report-btn btn text-white mt-xl-5 mt-lg-2 ">
                  Get Free Consultation
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="report-img text-center">
                <img src={Athena.report[0]?.image} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="common-issue value-issue">
        <div className="container">
          <div className="ci-title  text-center">
            <h2>{Athena.partner[0]?.title}</h2>
          </div>
          <div className="ci-issuemt-lg-5 mt-md-4">
            {Athena.partner[0]?.points.map((data, i) => {
              return (
                  <div className="d-flex justify-content-center">
                    <div className="ci-points value-point d-flex align-items-center gap-lg-5 gap-md-4 gap-3 my-md-3 my-2">
                          <div className="jjjj">
                               <div className="d-flex justify-content-center mt-md-3">
                               <img src="\assets\white-tick.png" className="img-fluid"/>
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
