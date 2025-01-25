import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Software Engineer",
          "MERN Stack Developer",
          "Team Player",
          "Gamer",
          "Traveller",
          "Prompt Engineer",
          "Web developer",
          "Full-stack Developer",
          "Backend Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
