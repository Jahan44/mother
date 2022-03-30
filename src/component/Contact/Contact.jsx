import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5y6j8go",
        "template_k71gavv",
        form.current,
        "o1fuk-R_wlaAAGdGK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 col-sm-1"></div>
          <div className="col-lg-6 col-sm-10 col-12 p-5">
            <h2 className="text-center text-primary mt-5 mb-5">Contact Me</h2>
            <div className="contact-form-body">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <p>Name</p>
                  <input
                    className=" form-control"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    className=" form-control"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group">
                  <p>Message</p>
                  <textarea
                    className=" form-control"
                    type="text"
                    name="message"
                    placeholder="Write Your Message?"
                    rows="10"
                    cols="30"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="btn btn-primary mt-4"
                    type="submit"
                    value="Send"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-sm-1 col-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
