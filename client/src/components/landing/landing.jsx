import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";



const Landing = () => {
  return (
    <div className="landing">
      <Link to="/home"><button>Login</button></Link>
    </div>
  );
};

export default Landing;
