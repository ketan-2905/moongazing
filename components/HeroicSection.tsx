// import React from "react";
// import Button from "./Button";
// import Image from "next/image";

// const HeroicSection = () => {
//   return (
// <section
//   id="heroic"
//   className="h-screen w-full relative flex items-center justify-center overflow-x-hidden"
// >
//   <Image
//     src="/event/moon.jpg"
//     alt="moon background"
//     fill
//     priority
//     quality={85}
//     sizes="100vw"
//     className="object-cover object-center -z-10"
//   />
//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Fade-to-black at bottom to blend with next section */}
//       <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>

//       <div className="relative z-10 text-center text-white px-4 flex flex-col items-center gap-8">
//         {/* Tagline */}
//         <p className="text-lg md:text-2xl font-light mb-2 tracking-[0.05em] text-[#d0d0d0]">
//           Witness the magic of the night sky like never before.
//         </p>

//         {/* Main Heading */}
//         <h1 className="text-6xl md:text-9xl font-light mb-3 tracking-[0.05em]">
//           Moon Gazing
//         </h1>

//         {/* Subtext */}
//         <p className="text-lg md:text-2xl text-[#d0d0d0] mb-6">
//           4th November 2025 · College Terrace
//         </p>

//         {/* Call to Action Button */}
//         <Button />
//       </div>
//     </section>
//   );
// };

// export default HeroicSection;

import React from "react";
import Button from "./Button";
import Image from "next/image";

const HeroicSection = () => {
  return (
    <section
      id="heroic"
      className="h-screen w-full relative flex items-center justify-center overflow-x-hidden"
    >
      <Image
        src="/event/moon.jpg"
        alt="moon background"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Fade-to-black at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>

      <div className="relative z-10 text-center text-white px-2 md:px-4 flex flex-col items-center gap-4 md:gap-8">
        {/* Tagline */}
        <p className="text-lg md:text-2xl font-light mb-2 tracking-[0.05em] text-[#d0d0d0]">
          Witness the magic of the night sky.
        </p>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-9xl font-light mb-3 tracking-[0.05em]">
          Moon Gazing 2.0
        </h1>

        {/* Subtext */}
        {/* <p className="text-lg md:text-2xl text-[#d0d0d0] mb-2">
          4th November 2025 · 
        </p> */}

        <div className=" px-6 py-3 rounded-2xl  shadow-lg hover:scale-105 transition-transform duration-300">
          <span className="text-3xl md:text-4xl font-semibold text-yellow-300 tracking-wide ">
            4th November 2025
          </span>
          <span className="ml-2 text-lg md:text-xl text-[#d0d0d0]">College Terrace</span>
        </div>


        {/* 💫 Event Price */}
        <div className=" px-6 py-3 rounded-2xl  shadow-lg hover:scale-105 transition-transform duration-300">
          <span className="text-3xl md:text-4xl font-semibold text-yellow-300 tracking-wide">
            ₹300/-
          </span>
          <span className="ml-2 text-lg md:text-xl text-[#d0d0d0]">only</span>
        </div>

        {/* Call to Action Button */}
        <Button />
      </div>
    </section>
  );
};

export default HeroicSection;

