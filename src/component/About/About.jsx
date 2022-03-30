import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import userImage from "./image/user.png";
const About = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    cookie();
  }, []);
  const cookie = async () => {
    try {
      const url = `http://localhost:600/about`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwttoken")}`,
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
        // credentials: "include",
      })
        .then((res) => res.json())
        .then((user) => {
          setData(user.data);
          //  console.log(user);
          if (user?.message === "not token") {
            const login = window.confirm("Please Login website!!!");
            if (login) {
              window.location.assign("/login");
            } else {
              window.location.assign("/about");
            }
          }
          if (data?.data) {
            window.location.assign("/about");
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="about-main-body">
      {data && (
        <div className="about-body">
          <div className="about-image">
            <img className=" img-fluid" src={userImage} alt="userImage" />
          </div>
          <h4>
            {" "}
            Name: <span> {data?.name}</span>
          </h4>
          <h4>
            {" "}
            Email: <span> {data?.email}</span>
          </h4>
          <h4>
            {" "}
            Phone: <span>{data?.phone}</span>
          </h4>
          <div className="about-btn mt-5 mb-4">
            <button
              className=" btn btn-success"
              onClick={() => console.log(data._id)}
            >
              <Link
                className="text-white text-decoration-none"
                to={`/update/${data._id}`}
              >
                {" "}
                Update
              </Link>
            </button>
            <button
              className=" btn btn-danger"
              onClick={() => console.log(data._id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
