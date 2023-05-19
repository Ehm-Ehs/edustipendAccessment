import React from "react";
import Button from "../component/button";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="">
        <h1>Make your party fun!</h1>
        <p>Create your own custom playlist today</p>
      </div>
      <div className="">
        <Button className="btn2" link="" text="Create playlist" />{" "}
      </div>
    </div>
  );
}

export default Hero;
