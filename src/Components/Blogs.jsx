import React from "react";
import { blogs } from "../Constants/Blogs";

function Blogs() {
  return (
    <section className="blog-sec">
      <div className="container">
        <div className="blog-title text-center">
          <h2>See whats Happening through our blogs</h2>
        </div>
        <div className="blog-pic">
          <div className="row">
            {blogs.data.map((data) => {
              return (
                <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                  <div className="blog-box">
                    <div className="blog-img">
                      <img src={data?.blogs_img} className="img-fluid" />
                    </div>
                    <div className="row">
                      <div className="col-md-8   col-6 ">
                        <div className="blog-info">
                          <h6>{data?.blogs_name}</h6>
                        </div>
                      </div>
                      <div className="col-md-4  col-6 ">
                        <div className="blog-btn text-center">
                          <button className="btn">{data?.blogs_btn}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="blog-load d-flex justify-content-center">
            <p>LoadMore...</p>
          </div>

      </div>
    </section>
  );
}

export default Blogs;
