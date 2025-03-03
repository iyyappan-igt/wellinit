import React from 'react'
import { footer } from '../Constants/Footer'
import { Nav } from '../Constants/Nav'

function Footer() {
    return (
        <section className='footer-sec' >
            <div className="container-fluid" >
             <div className="footer-top">
             <div className="row">
                    <div className="col-lg-6 p-0 text-light">
                        <div className="footer-details h-100">
                            <h2>{footer?.title}</h2>
                            <p>{footer?.sub_title}</p>
                            <button className='btn'>{footer?.button}</button>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="footer-bg">
                            <img src='\assets\footer-frame.png' className='img-fluid'/>
                        </div>
 
                    </div>
                </div>
             </div>
             <div className="footer-bottom">
                <div className="row">
                    <div className="col-lg-6">
                          <div className="brand-logo h-100 text-center text-lg-start">
                                    <img src={footer?.footer_logo} className="img-fluid"/>
                                </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sign-up text-light">
                            <div className="sp-title">
                            <h3>Sign Up to Our Newsletter</h3>
                            </div>
                            <div className="sp-input d-flex align-items-center py-4">
                                <input type='text'  className='form-control' placeholder='Enter Your Mail'/>
                                <button className='btn'>Sign Up</button>
                            </div>
                            <div className="sp-info text-center text-lg-start">
                                <p>By entering the e-mail you accept the <span>terms and conditions</span> and the<span> privacy policy.</span></p>
                            </div>
                            <div className="sp-social d-flex align-items-center justify-content-lg-start justify-content-center gap-3 py-4">
                                <div>
                                <img src='\assets\linked.png' className='img-fluid'/>
                                </div>
                                <div>
                                <img src='\assets\insta.png' className='img-fluid'/>
                                </div>
                                <div>
                                <img src='\assets\facebook.png' className='img-fluid'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
             </div>
            </div>
        </section>
    )
}

export default Footer
