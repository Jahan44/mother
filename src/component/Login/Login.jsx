import React, { useState } from "react";
import "./Login.css";
import loginMan from "./login-img/loginMan.png";
const Login = () => {
  const [token, setToken] = useState("");
  const [user, serUser] = useState({ email: "", password: "" });
  const loginHandle = (e) => {
    e.preventDefault();
    const url = `http://localhost:600/login`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: user.password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.massage === "Login faild") {
          alert(data.massage);
        } else {
          localStorage.setItem("jwttoken", data);
          alert("Login successfull");
          serUser({ email: "", password: "" });
        }
      });

    // .then((data) => localStorage.setItem("jwttoken", data));
  };
  // headers: { 'Content-Type': 'application/json' },
  return (
    <div className="login-main-body">
      <div className="row mt-5 my-from-style">
        <div className="col-lg-12">
          <div className="login-man text-center">
            <img src={loginMan} alt="loginImage" />
          </div>
          <h2 className=" text-center"> Wellcome Login</h2>
          <form method="POST" onSubmit={loginHandle}>
            <p className="mb-2 mb-2">Email:</p>
            <input
              onChange={(e) => {
                serUser({ ...user, email: e.target.value });
              }}
              value={user.email}
              className="form-control "
              type="email"
              placeholder="Enter Email"
            />
            <p className="mb-2 mb-2">Password:</p>
            <input
              onChange={(e) => {
                serUser({ ...user, password: e.target.value });
              }}
              value={user.password}
              className="form-control "
              type="password"
              placeholder="Enter Password"
            />
            <input className="btn-login" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
