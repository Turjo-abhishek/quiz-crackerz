import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { name, logo, total, id } = topic;
  console.log(topic);
  return (
    <div className="col-md-3 single-card">
      <div className="card">
        <div className="card-img">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="card-body ">
          <div>
            <h6>{name}</h6>
            <h5>Total Questions: {total}</h5>
          </div>

          <Link to={`/quiz/${id}`}>
            <button className="d-flex justify-content-around btn btn-primary">
              Start Practice
              <ArrowRightIcon className="icon my-auto" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
