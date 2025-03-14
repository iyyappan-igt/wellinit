import React from "react";
import { footer } from "../Constants/Footer";
import { Nav } from "../Constants/Nav";
import { Link, useLocation } from "react-router-dom";

function Footer() {


  return (
    <section className="footer-sec">
      <div className="container-fluid">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 p-0 text-light">
              <div className="footer-black position-relative h-100">
                <div className="fb-overlay d-none d-md-block position-absolute h-100"></div>
                <div className="fb-overlay2 d-block d-md-none position-absolute h-100"></div>


                <div className="footer-details position-absolute h-100">
                  <h2>{footer?.title}</h2>
                  <p>{footer?.sub_title}</p>
                  <a href="#letstalk">
                    <button className="btn">{footer?.button}</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  col-12 p-0">
              <div className="footer-bg">
                <img src="\assets\footer-frame.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="brand-logo h-100 text-center text-md-start">
                <Link to="/">
                  {" "}
                  <img src={footer?.footer_logo} className="img-fluid" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4  col-md-6 col-12">
              <div className="information text-light">
                <div className="inf-title text-md-start text-center">
                  <h3>Information</h3>
                </div>
                <div className="if-page d-flex d-md-block  justify-content-center">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-center d-md-block">
                      <div className="pagings ">
                       <Link to="/about"><h5>About Us</h5></Link>
                       <Link to="/service"> <h5>Service</h5></Link>
                        <h5>Compliance</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-center d-md-block">
                      <div className="pagings">
                        <h5>Blogs</h5>
                       <Link to="/contact"> <h5>Contacts</h5></Link>
                        <h5>Terms of Service</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4   col-md-6  col-12">
              <div className="sign-up text-light">
                <div className="sp-title text-md-start text-center">
                  <h3>Sign Up to Our Newsletter</h3>
                </div>
                <div className="sp-input d-flex align-items-center py-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Mail"
                  />
                  <button className="btn">Sign Up</button>
                </div>
                <div className="sp-info text-center text-md-start">
                  <p>
                    By entering the e-mail you accept the 
                    <span>terms and conditions</span> and the
                    <span> privacy policy.</span>
                  </p>
                </div>
                <div className="sp-social d-flex align-items-center justify-content-md-start justify-content-center gap-3 py-4">
                  <div>
                    <img src="\assets\linked.png" className="img-fluid" />
                  </div>
                  <div>
                    <img src="\assets\insta.png" className="img-fluid" />
                  </div>
                  <div>
                    <img src="\assets\facebook.png" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
