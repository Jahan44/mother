import React, { useEffect } from "react";
import { axios } from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
  const { updateId } = useParams();
  //   useEffect(() => {
  //     const url = `ewg`;
  //     axios.get(url, { Headers: { contentType: "application/json" } });
  //   }, []);
  //   const updateHandle = (e) => {};
  return (
    <div>
      <h1> {updateId}</h1>
      {/* <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <form onSubmit={updateHandle}>
            <p className="mb-1 mt-2 regi-form-title">Name:</p>
            <input
              //   value={user.name}
              //   onChange={(e) => {
              //     setUser({ ...user, name: e.target.value });
              //   }}
              className=" form-control regi-from-style"
              type="text"
            />
            <p className="mb-1 mt-2 regi-form-title">Email:</p>
            <input
              //   value={user.email}
              //   onChange={(e) => {
              //     setUser({ ...user, email: e.target.value });
              //   }}
              className=" form-control regi-from-style"
              type="email"
            />
            <p className="mb-1 mt-2 regi-form-title">Phone Number:</p>
            <input
              //   value={user.phone}
              //   onChange={(e) => {
              //     setUser({ ...user, phone: e.target.value });
              //   }}
              className=" form-control regi-from-style"
              type="number"
            />
            <p className="mb-1 mt-2">Password:</p>
            <input
              //   value={user.password}
              //   onChange={(e) => {
              //     setUser({ ...user, password: e.target.value });
              //   }}
              className=" form-control regi-from-style"
              type="password"
            />
            <p className="mb-1 mt-2 regi-form-title">Conform Password:</p>
            <input
              //   value={user.cpassword}
              //   onChange={(e) => {
              //     setUser({ ...user, cpassword: e.target.value });
              //   }}
              className=" form-control regi-from-style"
              type="password"
            />
            <div className=" text-danger"></div>
            <input className="regi-submit-btn" type="submit" value="Submit" />
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div> */}
    </div>
  );
};

export default Update;
