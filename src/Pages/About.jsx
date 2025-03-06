import React from "react";
import { Aboucontent } from "../Constants/About.contant.js/Abt";
import Securebanner from "../Components/Securebanner";
import Letstalk from "../Components/Letstalk";


function About() {
  return (

    <section>
    <div className="abt-contents">
      <div className="conatiner-fluid">
        <div className="abt-banner position-relative">
          <div className="abt-frme">
            <img src="\assets\about-banner.png" className="img-fluid" />
          </div>
          <div className="abtbanner-content position-absolute w-100 text-center">

            <h2>{Aboucontent?.Bannerframe[0]?.title}</h2>
            <p>{Aboucontent?.Bannerframe[0]?.sub_title}</p>
            <button className="btn">{Aboucontent?.Bannerframe[0]?.button}</button>
          </div>
        </div>
      </div>
    </div>
    <div className="abt-who ">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-lg-6 col-12 p-0">
                <div className="abtwho-cnt h-100 text-lg-start text-center">
                  <h2>{Aboucontent?.whowe[0]?.title}</h2>
                  <h5>{Aboucontent?.whowe[0]?.sub_title}</h5>
                  <p>{Aboucontent?.whowe[0]?.content}</p>
                  <p>{Aboucontent?.whowe[0]?.content_2}</p>
                </div>
              </div>
              <div className="col-lg-6 col-12 p-0 ">
                <div className="abtwho-pic h-100">
                  <img src="\assets\medteam.png" className="img-fluid h-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="abt-billing">
          <div className="container p-0">
                 <div className="abt-mission text-center">
                         <h4>{Aboucontent?.missions[0]?.title}</h4>
                         <h2>{Aboucontent?.missions[0]?.sub_title}</h2>
                         <p>{Aboucontent?.missions[0]?.content}</p>
                 </div>
                 <div className="mission-img text-center">
                  <img src={Aboucontent?.missions[0]?.image} className="img-fluid"/>
                 </div>
          </div>
        </div>

        <Securebanner/>

        <Letstalk/>

  </section>

  );
}

export default About;
