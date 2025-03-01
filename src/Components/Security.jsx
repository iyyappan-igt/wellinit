import React from 'react'

function Security() {
    return (
        <section className='secure-sec text-light position-relative'>
            <div className="conatiner">
                <div className="security ">
                    <div className="left-rect position-absolute">
                        <img src='\assets\Rectangle1.png' className='img-fluid'/>
                    </div>
                    <div className="right-rect position-absolute">
                        <img src='\assets\Rectangle2.png' className='img-fluid'/>
                    </div>
                    <div className="frame-icon position-absolute">
                        <img src='\assets\Frame (1).png' className='img-fluid'/>
                    </div>
                     <div className="secure-title text-center">
                        <h2>Security & compliance </h2>
                        <p>at the core of everything we do</p>
                     </div>
                     <div className="secure-img text-center">
                        <img src='\assets\security.png' className='img-fluid'/>
                     </div>
                </div>
            </div>
        </section>
    )
}

export default Security
