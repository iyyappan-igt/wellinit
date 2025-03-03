import React from "react";

function Whychoose() {
  return (
    <section className="choose-sec">
      <div className="container">
        <div className="choose-title text-center">
          <h2>Why Choose Wellinit ?</h2>
        </div>
        <div className="choose-option d-flex align-items-center justify-content-evenly my-5">
             <div className="choose-box d-flex align-items-center gap-3">
                 <div className="choose-img">
                  <img src="\assets\icon1.png" className="img-fluid"/>
                 </div>
                 <div className="choose-name">
                  <h5>EHR Versatility</h5>
                 </div>
             </div>
             <div className="choose-box d-flex align-items-center gap-3">
                 <div className="choose-img">
                  <img src="\assets\icon1.png" className="img-fluid"/>
                 </div>
                 <div className="choose-name ">
                  <h5>Reduced Denial Rates & Faster Reimbursements</h5>
                 </div>
             </div>
             <div className="choose-box d-flex align-items-center gap-3">
                 <div className="choose-img">
                  <img src="\assets\icon1.png" className="img-fluid"/>
                 </div>
                 <div className="choose-name">
                  <h5>HIPAA-Compliant & Secure Operations</h5>
                 </div>
             </div>
      
        </div>
        <div className="choose-option d-flex align-items-center justify-content-center gap-5 ">
        <div className="choose-box d-flex align-items-center gap-3">
                 <div className="choose-img">
                  <img src="\assets\icon1.png" className="img-fluid"/>
                 </div>
                 <div className="choose-name">
                  <h5>Dedicated Account Manager for Every Client</h5>
                 </div>
             </div>
             <div className="choose-box d-flex align-items-center gap-3">
                 <div className="choose-img">
                  <img src="\assets\icon1.png" className="img-fluid"/>
                 </div>
                 <div className="choose-name">
                  <h5>Seamless Integration with EHR & Billing Systems</h5>
                 </div>
             </div>
        </div>
        <div className="choose-button text-center my-5">
          <button className="btn"> Learn More About Our Services</button>
        </div>
      </div>
    </section>
  );
}

export default Whychoose;
