import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formdata } from "../Api/Form";
import { toast, ToastContainer } from "react-toastify";

function Contact() {
  const schema = Yup.object().shape({
    first_name: Yup.string().required("Enter First name"),
    // last_name: Yup.string().required("Enter Last name"),
    email: Yup.string().required("Enter Email"),
    mobile: Yup.string().required("Enter Mobile number"),
    menu: Yup.string().required("Select Menu"),
    message: Yup.string().required("Enter Message"),
  });

  const Formik = useFormik({
    initialValues: {
      first_name: "",
      //   last_name: "",
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
          toast.success("Success !");
          resetForm();
        })
        .catch((err) => {
          console.log(err);
          toast.success("Success !");
          resetForm();
        });
    },
  });

  return (
    <section>
      <div className="container-fluid p-0">
        <div className="ct-page position-relative">
          <div className="ct-img">
            <img src="assets\contact-img.png" className="img-fluid" />
          </div>
          <div className="ct-form position-absolute">
            <div className="container">
              <div className="entry-form" id="letstalk">
              <div className="ct-title text-md-start text-center mb-5">
                    <h2>Connect with us for Partnerships</h2>
                  </div>
                <form onSubmit={Formik.handleSubmit}>
                  <div className="row">
                    <div className="col-12 forms">
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
                    {/* <div className="col-12 forms">
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
              </div> */}
                    <div className=" col-12 forms">
                      <div className="input-grp">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mobile"
                          {...Formik.getFieldProps("mobile")}
                        />
                      </div>
                      {Formik.touched.mobile && Formik.errors.mobile ? (
                        <span className="text-danger">
                          {Formik.errors.mobile}
                        </span>
                      ) : null}
                    </div>
                    <div className="col-12 forms">
                      <div className="input-grp">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="E-Mail"
                          {...Formik.getFieldProps("email")}
                        />
                      </div>
                      {Formik.touched.email && Formik.errors.email ? (
                        <span className="text-danger">
                          {Formik.errors.email}
                        </span>
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
                        <span className="text-danger">
                          {Formik.errors.menu}
                        </span>
                      ) : null}
                    </div>
                    <div className="col-lg-12 col-md-12 col-12 forms">
                      <div className="text-grp">
                        <textarea
                          class="form-control"
                          placeholder="Message"
                          rows="5"
                          {...Formik.getFieldProps("message")}
                        ></textarea>
                      </div>
                      {Formik.touched.message && Formik.errors.message ? (
                        <span className="text-danger">
                          {Formik.errors.message}
                        </span>
                      ) : null}
                    </div>
                    <div className="submit-btn d-flex justify-content-md-start justify-content-center">
                      <button className="btn text-light" type="submit">
                        Request a Callback
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </section>
  );
}

export default Contact;
