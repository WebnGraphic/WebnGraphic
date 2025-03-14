"use client";
import { Typewriter } from "react-simple-typewriter";

const TwHomeHero: React.FC = () => {
  return (
    <h1 className="text-white text-4xl font-bold md:text-6xl lg:text-8xl leading-tight">
      W
      <Typewriter
        words={["E DESIGN...", "E DEVELOP...", "E MARKET..."]}
        loop={true}
        cursor
        cursorStyle=""
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>
  );
};

export default TwHomeHero;
