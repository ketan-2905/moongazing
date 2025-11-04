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

"use client";


// import React from "react";
// import Button from "./Button";
// import Image from "next/image";
// import Link from "next/link";

// const HeroicSection = () => {
//   return (
//     <section
//       id="heroic"
//       className="h-screen w-full relative flex items-center justify-center overflow-x-hidden"
//     >
//       <Image
//         src="/event/moon.jpg"
//         alt="moon background"
//         fill
//         priority
//         quality={85}
//         sizes="100vw"
//         className="object-cover object-center -z-10"
//       />
//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Fade-to-black at bottom to blend with next section */}
//       <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>

//       <div className="relative z-10 text-center text-white px-2 md:px-4 flex flex-col items-center gap-2 md:gap-8">
//         {/* Tagline */}
//         <p className="text-lg md:text-2xl font-light mb-2 tracking-[0.05em] text-[#d0d0d0]">
//           Witness the magic of the night sky.
//         </p>

//         {/* Main Heading */}
//         <h1 className="text-6xl md:text-9xl font-light mb-3 tracking-[0.05em]">
//           Moon Gazing 2.0
//         </h1>

//         {/* Subtext */}
//         {/* <p className="text-lg md:text-2xl text-[#d0d0d0] mb-2">
//           4th November 2025 · 
//         </p> */}

//         <div className=" px-6 py-3 rounded-2xl  shadow-lg hover:scale-105 transition-transform duration-300">
//           <span className="text-3xl md:text-4xl font-semibold text-yellow-300 tracking-wide ">
//             4th November 2025
//           </span>
//           <span className="ml-2 text-lg md:text-xl text-[#d0d0d0]">College Terrace</span>
//         </div>


//         {/* 💫 Event Price */}
//         {/* <div className=" px-6 py-3 rounded-2xl  shadow-lg hover:scale-105 transition-transform duration-300">
//           <span className="text-3xl md:text-4xl font-semibold text-yellow-300 tracking-wide">
//             ₹300/-
//           </span>
//           <span className="ml-2 text-lg md:text-xl text-[#d0d0d0]">only</span>
//         </div> */}

//         {/* Call to Action Button */}
//         {/* <Link target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSex9aBBMwl8tXfNoRXqOnsYnMhBkoL1LbYVV5LgUTAtYRFw_Q/viewform" className=""><Button /></Link> */}
//       </div>
//     </section>
//   );
// };

// export default HeroicSection;

import Image from "next/image";

const HeroicSection = () => {
  return (
    <section
      id="heroic"
      className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/event/moon.jpg"
        alt="moon background"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center -z-10 scale-105 animate-pulse-slow"
      />

      {/* Dim overlay for clarity */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Stars shimmer overlay effect */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(white,transparent_1px)] bg-[size:3px_3px] opacity-10 -z-10 animate-twinkle"></div> */}

      {/* Text content */}
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center gap-6 md:gap-10">
        {/* Tagline */}
        <p className="text-lg md:text-2xl font-light tracking-[0.1em] text-[#d0d0d0] uppercase">
          Under the starlit sky
        </p>

        {/* Main heading */}
        <h1 className="text-6xl md:text-9xl font-extralight tracking-[0.08em] drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
          Moon Gazing 2.0
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-4xl text-yellow-300 tracking-wide font-medium">
          Live at DJSCE College Terrace
        </p>

        {/* Date display */}
        <div className="px-8 py-4 mt-4 ">
          <span className="text-3xl md:text-5xl font-semibold text-yellow-300 tracking-wide">
            4th November 2025
          </span>
        </div>

        {/* Tagline footer */}
        <p className="text-lg md:text-2xl text-[#e0e0e0] font-light mt-4">
          “Witness the moon like never before 🌕”
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>

      {/* Glow animation styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1.05);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.95;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroicSection;
