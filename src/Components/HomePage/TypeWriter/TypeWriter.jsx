import React from "react";
import Typewriter from "typewriter-effect";
import "./TypeWriter.css";
const TypeWriter = () => {
  return (
    <div className="typeWriterContainer">
      <h2>
        <Typewriter
          options={{
            strings: ["Hello" , "Welcome to Goodway Attestation"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </div>
  );
};

export default TypeWriter;
