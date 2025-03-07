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
                    <h2>Common Issues faced by practices</h2>
                </div>
                <div className="ci-issue mt-5">
                    {
                        Athena.common_issues?.map((data , i)=>{
                            return(
                                <div className="d-flex justify-content-center">
                                     <div className="issue-info" key={i}>
                                    <div className="iss-tic">
                                        <img src="assets\white-tick.png" className="img-fluid"/>
                                    </div>
                                    <div className="iss-name">
                                        <h5>{data?.issues}</h5>
                                    </div>
                               </div>
                                </div>
                            )
                        })
                    }
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
                <div className="col-lg-5">
                    <div className="point-list">
                    {
                        Athena.modular[0].points.map((data , i)=>{
                            return(
                                <div className="mo-point my-4" key={i}>
                                    <h5> <span>{data?.id}.</span>{data?.point}</h5>
                                </div>
                            )
                        })
                    }


                    </div>
                
                </div>
                <div className="col-lg-7">
                    <div className="mo-img text-center">
                        <img src="\assets\obj.png" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>

        </div>

   
           
      </div>

    </section>
  );
}

export default Athenapage;
