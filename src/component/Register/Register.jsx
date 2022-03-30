import React, { useState } from "react";
import "./Register.css";
import regiImg from "./login-img/login.jpg";
import axios from "axios";
const Register = () => {
  const [massage, setMassage] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const registerHandle = (e) => {
    e.preventDefault();
    if (
      !user.name ||
      !user.email ||
      !user.phone ||
      !user.password ||
      !user.cpassword
    ) {
      setMassage("please fill in form");
      return;
    } else {
      const url = `http://localhost:600/register`;
      axios
        .post(url, user, { Headers: { "Content-Type": "application/json" } })
        .then((res) => alert(res.data?.massage))
        .catch((err) => console.log(err));

      setUser({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
      });
      setMassage("");
    }
  };
  return (
    <div>
      <div className="row  regi-row">
        <div className="col-lg-6 p-5 order-sm-1 order-md-1 order-lg-0">
          <form onSubmit={registerHandle}>
            <p className="mb-1 mt-2 regi-form-title">Name:</p>
            <input
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
              className=" form-control regi-from-style"
              type="text"
            />
            <p className="mb-1 mt-2 regi-form-title">Email:</p>
            <input
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              className=" form-control regi-from-style"
              type="email"
            />
            <p className="mb-1 mt-2 regi-form-title">Phone Number:</p>
            <input
              value={user.phone}
              onChange={(e) => {
                setUser({ ...user, phone: e.target.value });
              }}
              className=" form-control regi-from-style"
              type="number"
            />
            <p className="mb-1 mt-2">Password:</p>
            <input
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              className=" form-control regi-from-style"
              type="password"
            />
            <p className="mb-1 mt-2 regi-form-title">Conform Password:</p>
            <input
              value={user.cpassword}
              onChange={(e) => {
                setUser({ ...user, cpassword: e.target.value });
              }}
              className=" form-control regi-from-style"
              type="password"
            />
            <div className=" text-danger">{massage}</div>
            <input className="regi-submit-btn" type="submit" value="Submit" />
          </form>
        </div>
        <div className="col-lg-6  order-sm-0 order-lg-1 order-md-0">
          <div className="regi-img ">
            <img className=" img-fluid " src={regiImg} alt="registerImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
