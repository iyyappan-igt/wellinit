import React from "react";

function Letstalk() {
  return (
    <section className="lets-sec">
      <div className="container">
        <div className="talk-title text-center">
          <h2>Lets Connect and Talk</h2>
        </div>
        <div className="entry-form">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="input-grp">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="input-grp">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="input-grp">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Mobile"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="input-grp">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="E-Mail"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="select-grp">
                  <select class="custom-select">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="text-grp">
                  <textarea class="form-control"  placeholder="Message" rows="9"></textarea>
                </div>
              </div>
              <div className="submit-btn d-flex justify-content-center ">
                <button className="btn text-light">Submit</button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Letstalk;
