import React from "react";
import { Aboucontent } from "../Constants/About.contant.js/Abt";
import Securebanner from "../Components/Securebanner";
import Letstalk from "../Components/Letstalk";


function About() {

  
  return (

    <section>

        <div className="abt-who ">
          <div className="container-fluid p-0 ">
            <div className="row">
              <div className="col-lg-6  col-12 p-0"  >
               <div className="whofm position-relative h-100">
                <div className="who-overlay position-absolute d-lg-block d-none"></div>
               <div className="abtwho-cnt h-100 text-lg-start text-center" >
                <div data-aos="fade-right" data-aos-duration="1500">
                <h2>{Aboucontent?.whowe[0]?.title}</h2>
                  <h5>{Aboucontent?.whowe[0]?.sub_title}</h5>
                  <p>{Aboucontent?.whowe[0]?.content}</p>
                  <p>{Aboucontent?.whowe[0]?.content_2}</p>
                </div>
                  
                </div>
               </div>
              </div>
              <div className="col-lg-6  col-12 p-0 ">
                <div className="abtwho-pic h-100">
                  <img src="\assets\medteam.png" className="img-fluid h-100" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="abt-billing">
          <div className="container p-0">
                 <div className="abt-mission text-center" >
                         <h4 data-aos="zoom-in"  data-aos-duration="1500">{Aboucontent?.missions[0]?.title}</h4>
                         <h2 data-aos="fade-left"  data-aos-duration="1500">{Aboucontent?.missions[0]?.sub_title}</h2>
                         <p data-aos="fade-right"  data-aos-duration="1500">{Aboucontent?.missions[0]?.content}</p>
                         <p data-aos="fade-right"  data-aos-duration="1500">{Aboucontent?.missions[0]?.content_2}</p>
                         
                 </div>
                 <div className="mission-img text-center">
                  <img src={Aboucontent?.missions[0]?.image} className="img-fluid" data-aos="fade-up"  data-aos-duration="1500"/>
                 </div>
          </div>
        </div>


        <Letstalk/>

  </section>

  );
}

export default About;
