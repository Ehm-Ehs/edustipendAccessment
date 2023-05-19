import React from "react";
import Hero from "./hero";
import Nav from "./nav";
import "../App.css";

function Index() {
  return (
    <div className="home">
      <Nav />
      <div>
        <Hero />
      </div>
    </div>
  );
}

export default Index;
