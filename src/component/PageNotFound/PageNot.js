import React from "react";
import { Link } from "react-router-dom";
import "./PageNot.css";
const PageNot = () => {
  return (
    <div className="pageNot">
      <button className="btn btn-primary mt-5">
        {" "}
        <Link className=" btn btn-primary" to="/home">
          {" "}
          Go Home
        </Link>
      </button>
    </div>
  );
};

export default PageNot;
