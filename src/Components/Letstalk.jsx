import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { formdata } from "../Api/Form";
import { toast, ToastContainer } from "react-toastify";

function Letstalk() {
  const schema = Yup.object().shape({

    first_name: Yup.string()
    .required("Enter First name")
    .matches(/^[a-zA-Z]*$/, "Invalid name"),

    last_name: Yup.string()
    .required("Enter Last name")
    .matches(/^[a-zA-Z]*$/, "Invalid name"),
    
    email: Yup.string().required("Enter Email")
    .email("Enter Valid Email")
    .test((value) => {
      return value === value.toLocaleLowerCase();
    }),

    mobile: Yup.string().required("Enter Mobile number")
    .min(10, "Invalid Mobile No")
    .max(10, "Invalid Mobile No")
    .matches(/^[0-9]+$/, "Invalid Mobile No"),

    menu: Yup.string().required("Select Menu"),

    message: Yup.string().required("Enter Message"),
  });

  const Formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      mobile: "",
      email: "",
      menu: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      formdata(values)
        .then((data) => {
          console.log(data);
          toast.success('Success !')
          resetForm();
        })
        .catch((err) => {
          console.log(err);
          toast.success('Success !')
          resetForm();
        });
    },
  });



  return (
    <section className="lets-sec" id="letstalk">
      <div className="container">
        <div className="talk-title text-center">
          <h2>Lets Connect and Talk</h2>
        </div>
        <div className="entry-form">
          <form onSubmit={Formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 forms">
                <div className="input-grp">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    {...Formik.getFieldProps("first_name")}
                    
                  />
                
                </div>
                {Formik.touched.first_name && Formik.errors.first_name ? (
                    <span className="text-danger">
                      {Formik.errors.first_name}
                    </span>
                  ) : null}
              </div>
              <div className="col-lg-6 col-md-6 col-12 forms">
                <div className="input-grp">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    {...Formik.getFieldProps("last_name")}
                  />
             
                </div>
                {Formik.touched.last_name && Formik.errors.last_name ? (
                    <span className="text-danger">
                      {Formik.errors.last_name}
                    </span>
                  ) : null}
              </div>
              <div className="col-lg-6 col-md-6  col-12 forms">
                <div className="input-grp">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Mobile"
                    {...Formik.getFieldProps("mobile")}
                  />
                
                </div>
                {Formik.touched.mobile && Formik.errors.mobile ? (
                    <span className="text-danger">{Formik.errors.mobile}</span>
                  ) : null}
              </div>
              <div className="col-lg-6 col-md-6 col-12 forms">
                <div className="input-grp">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="E-Mail"
                    {...Formik.getFieldProps("email")}
                  />
             
                </div>
                {Formik.touched.email && Formik.errors.email ? (
                    <span className="text-danger">{Formik.errors.email}</span>
                  ) : null}
              </div>
              <div className="col-lg-12 col-md-12 col-12 forms">
                <div className="select-grp">
                  <select
                    class="custom-select"
                    {...Formik.getFieldProps("menu")}
                  >
                    <option selected>Open this select menu</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
              
                </div>
                {Formik.touched.menu && Formik.errors.menu ? (
                    <span className="text-danger">{Formik.errors.menu}</span>
                  ) : null}
              </div>
              <div className="col-lg-12 col-md-12 col-12 forms">
                <div className="text-grp">
                  <textarea
                    class="form-control"
                    placeholder="Message"
                    rows="7"
                    {...Formik.getFieldProps("message")}
                  ></textarea>
             
                </div>
                {Formik.touched.message && Formik.errors.message ? (
                    <span className="text-danger">{Formik.errors.message}</span>
                  ) : null}
              </div>
              <div className="submit-btn d-flex justify-content-center ">
                <button className="btn text-light" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer position="top-center"  />
      </div>
    </section>
  );
}

export default Letstalk;
