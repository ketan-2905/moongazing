import React from "react";
import Button from "./Button";

const HeroicSection = () => {
  return (
    <section
      id="heroic"
      className="h-screen w-full bg-[url('/event/moon.jpg')] bg-cover bg-center bg-no-repeat relative flex items-center justify-center overflow-x-hidden"
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Fade-to-black at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>

      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center gap-8">
        {/* Tagline */}
        <p className="text-lg md:text-2xl font-light mb-2 tracking-[0.05em] text-[#aeaeae]">
          Witness the magic of the night sky like never before.
        </p>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-9xl font-light mb-3 tracking-[0.05em]">
          Moon Gazing
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-2xl text-[#aeaeae] mb-6">
          4th November 2025 · College Terrace
        </p>

        {/* Call to Action Button */}
        <Button />
      </div>
    </section>
  );
};

export default HeroicSection;
