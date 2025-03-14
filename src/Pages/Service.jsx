import React from "react";
import Ourservice from "../Components/Ourservice";
import Securebanner from "../Components/Securebanner";
import Letstalk from "../Components/Letstalk";
import { servicepage } from "../Constants/Service.contant.js/Service";
import { ServiceData } from "../Constants/ServiceData";


function Service() {
  const themecode = "#00153C";
  const fontcode = "#ffff";
   const iconbgcode  = "#25CEBA"
   const link_name = "/contact"

  return (
    <section className="service-page">
      <div className="service-intro">
        <div className="container">
          <div className="service-name text-center">
            <h2  data-aos="fade-left"  data-aos-duration="1500"> {servicepage.service_intro[0]?.title}</h2>
            <p data-aos="fade-right"  data-aos-duration="1500">{servicepage.service_intro[0]?.description}</p>
          </div>
          <div className="service-img text-center">
            <img
              src={servicepage.service_intro[0]?.image}
              className="img-fluid"
               data-aos="zoom-in"  data-aos-duration="1500"
            />
          </div>
        </div>
      </div>
      <div className="service-partner">
        <div className="container">
          <div className="sp-title text-center">
            <h2 data-aos="zoom-in" data-aos-duration="1500">{servicepage.partner[0]?.title}</h2>
          </div>
          <div className="sp-box">
            <div className="row">
              {servicepage.partner[0]?.partner_data?.map((data) => {
                return (
                  <div className="col-lg-6  col-md-6 d-flex align-items-center justify-content-center"  >
                    <div className="partner-box d-flex align-items-center justify-content-evenly" data-aos="fade-up"  data-aos-duration="1500">
                      <div className="pb-img">
                        <img src={data?.image} className="img-fluid" />
                      </div>
                      <div className="pb-name">
                        <h4><span className="bold-name">{data?.srt_name}</span>{data?.name}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Ourservice 
      theme={themecode} 
      colorcode={fontcode} 
       servicess={ServiceData.Explore_service} 
       iconbg={iconbgcode}
       linkpage={link_name}/>

     <Securebanner/>
     <Letstalk/>

      
    </section>
  );
}

export default Service;
