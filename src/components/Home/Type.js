import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ambitious and Growth Mindset",
          "Motivated and Goal-driven",
          "Organized and Time-conscious",
          "Adaptability and Flexibility",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
