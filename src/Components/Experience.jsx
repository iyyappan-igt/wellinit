import React from "react";
import CountUp from "react-countup";
import { Expdta } from "../Constants/Exp";

function Experience() {
  return (
    <section className="expsec">
      <div className="container">
        <div className="row">
          {Expdta.data.map((data , i) => {
            return (
              <div className="col-lg-3 d-flex justify-content-center" key={i}>
                <div className="ex-box">
                  <div className="ex-nums">
                    <CountUp duration={3} start={0} end={data.points} decimals={data.id == '3' ? 1 : 0} />
                    <span>{data.id == '4' ? `+` : `%`}</span>
                  </div>
                  <div className="ex-name">
                    <h6>{data.name}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
