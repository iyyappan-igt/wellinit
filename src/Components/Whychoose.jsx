import React from "react";

function Whychoose() {
  return (
    <section className="choose-sec">
      <div className="container">
        <div className="choose-title text-center">
          <h2>Why Choose Wellinit ?</h2>
        </div>
        <div className="choose-list d-flex justify-content-center gap-5">
            <div className="ch-box d-flex align-items-center gap-4">
                <div className="icon"><img src="\assets\icon1.png" className="img-fluid"/></div>
                <div className="icon-name"><h5>Expert Team of Medical Coders</h5></div>
            </div>
            <div className="ch-box d-flex align-items-center gap-4">
                <div className="icon"><img src="\assets\icon1.png" className="img-fluid"/></div>
                <div className="icon-name"><h5>Reduced Denial Rates & Faster Reimbursements</h5></div>
            </div>
            <div className="ch-box d-flex align-items-center gap-4">
                <div className="icon"><img src="\assets\icon1.png" className="img-fluid"/></div>
                <div className="icon-name"><h5>HIPAA-Compliant & Secure Operations</h5></div>
            </div>
        </div>
        <div className="choose-list d-flex justify-content-center gap-5">
            <div className="ch-box d-flex align-items-center gap-4">
                <div className="icon"><img src="\assets\icon1.png" className="img-fluid"/></div>
                <div className="icon-name"><h5>Expert Team of Medical Coders</h5></div>
            </div>
            <div className="ch-box d-flex align-items-center gap-4">
                <div className="icon"><img src="\assets\icon1.png" className="img-fluid"/></div>
                <div className="icon-name"><h5>Reduced Denial Rates & Faster Reimbursements</h5></div>
            </div>
        </div>
 
      </div>
    </section>
  );
}

export default Whychoose;
