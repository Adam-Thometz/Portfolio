import React from "react";
import Navbar from "../navbar/Navbar";

import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <main className="NotFound">
        <h1>You're not lost. You're finding your way.</h1>
        <p>Pick something from the navbar below</p>
      </main>
      <Navbar />
    </>
  );
};

export default NotFound;