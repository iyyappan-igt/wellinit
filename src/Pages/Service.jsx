import React from "react";
import Ourservice from "../Components/Ourservice";
import { servicepage } from "../Constants/Service.contant.js/Service";

function Service() {
  const themecode = "#00153C";
  const fontcode = "#ffff";

  return (
    <section className="service-page">
      <div className="service-intro">
        <div className="container">
          <div className="service-name text-center">
            <h2>{servicepage.service_intro[0]?.title}</h2>
            <p>{servicepage.service_intro[0]?.description}</p>
          </div>
          <div className="service-img text-center mt-5">
            <img
              src={servicepage.service_intro[0]?.image}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="service-partner">
        <div className="container">
          <div className="sp-title text-center">
            <h2>{servicepage.partner[0]?.title}</h2>
          </div>
          <div className="sp-box">
            <div className="row">
              {servicepage.partner[0]?.partner_data?.map((data) => {
                return (
                  <div className="col-lg-6">
                    <div className="partner-box d-flex align-items-center justify-content-evenly">
                      <div className="pb-img">
                        <img src={data?.image} className="img-fluid" />
                      </div>
                      <div className="pb-name">
                        <h4>{data?.name}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Ourservice theme={themecode} colorcode={fontcode} />
    </section>
  );
}

export default Service;
