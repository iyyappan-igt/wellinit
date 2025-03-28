import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Experience from "../Components/Experience";
import Introduction from "../Components/Introduction";
import Whychoose from "../Components/Whychoose";
import Ourservice from "../Components/Ourservice";
import Success from "../Components/Success";
import Security from "../Components/Security";
import Blogs from "../Components/Blogs";
import Letstalk from "../Components/Letstalk";
import Footer from "../Components/Footer";
import Securebanner from "../Components/Securebanner";
import { ServiceData } from "../Constants/ServiceData";
import { Athena } from "../Constants/Athena.contant.js/Athena";
import { Link } from "react-router-dom";

function Home() {
  const themecode = "#DEFFFB";
  const fontcode = "#000";
  const iconbgcode = "#000";
  const link_name = "/service";

  return (
    <section>
      <Banner />

      <Introduction />


      <Security />

     <div className="common-issue">
        <div className="container">
          <div className="ci-title d-flex justify-content-center  text-center">
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
                  <div className="ci-points d-flex align-items-center gap-xl-5 gap-md-4 gap-3  my-xl-4 my-md-3 my-2">
                  <div className="browntick">
                        <img
                          src="\assets\brown-tick.png"
                          className="img-fluid "
                        />
                      </div>
                    <div className="ci-name">
                      <h5 className="m-0">{data.issues}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="ci-button d-flex justify-content-center mt-lg-5 mt-md-3"  data-aos="fade-up"
                  data-aos-duration="1500" >
            <Link to="/contact"><button className="btn text-light">{Athena.common_issues[0]?.button}</button></Link>
          </div>
        </div>
      </div>

      <Securebanner />

      <Blogs />

      <Letstalk />
    </section>
  );
}

export default Home;
