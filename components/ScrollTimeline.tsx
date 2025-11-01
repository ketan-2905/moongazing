// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// type TimelineEvent = {
//   time: string;
//   title: string;
// };

// interface ScrollTimelineProps {
//   events: TimelineEvent[];
// }

// const ScrollTimeline: React.FC<ScrollTimelineProps> = ({ events }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start center", "end end"],
//   });

//   const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   return (
//     <div ref={ref} className="relative w-full flex justify-center py-20 overflow-x-hidden">
//       {/* Center line background */}
//       <div className="absolute top-0 w-1 bg-gray-300 h-full rounded-full" />

//       {/* Animated filled line */}
//       <motion.div
//         className="absolute top-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"
//         style={{ height: lineHeight }}
//       />

//       <div className="w-full max-w-4xl md:max-w-3xl md:space-y-20 overflow-x-hidden">
//         {events.map((event, i) => (
//           <div
//             key={i}
//             className={`relative flex items-center ${
//               i % 2 === 0
//                 ? "md:justify-start justify-end "
//                 : "md:justify-end justify-start"
//             }`}
//           >
//             <div
//               className={` p-4 w-80 ${
//                 i % 2 === 0 ? " text-right" : "text-left"
//               }`}
//             >
//               <h3 className="font-semibold  text-xl  md:text-2xl text-[#DE9841]">
//                 {event.time}
//               </h3>
//               <p
//                 className={`text-lg md:text-3xl text-gray-600 dark:text-gray-300 md:w-full  ${
//                   i % 2 === 0 ? "" : "w-[147px]"
//                 }`}
//               >
//                 {event.title}
//               </p>
//             </div>

//             <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#aeaeae]  rounded-full z-10" />
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default ScrollTimeline;

"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import React, { useRef } from "react";

type TimelineEvent = {
  time: string;
  title: string;
};

interface ScrollTimelineProps {
  events: TimelineEvent[];
}

const ScrollTimeline: React.FC<ScrollTimelineProps> = ({ events }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // ✅ Create stable refs for each event
  const eventRefs = React.useMemo(
    () => events.map(() => React.createRef<HTMLDivElement>()),
    [events]
  );

  return (
    <div
      ref={ref}
      className="relative w-full flex justify-center py-20 overflow-x-hidden"
      style={{
        transform: "translateZ(0)", // ✅ force GPU layer for smoother scroll
        willChange: "transform",
      }}
    >
      {/* Center line background */}
      <div className="absolute top-0 w-1 bg-gray-300 h-full rounded-full" />

      {/* Animated filled line */}
      <motion.div
        className="absolute top-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"
        style={{ height: lineHeight, willChange: "height" }}
      />

      <div className="w-full max-w-4xl md:max-w-3xl md:space-y-20 overflow-x-hidden overflow-y-hidden">
        {events.map((event, i) => {
          const eventRef = eventRefs[i];
          const isInView = useInView(eventRef, {
            margin: "-100px",
            amount: 0.35, // ✅ slightly reduced triggers
            once: true, // ✅ animate only first time visible
          });

          return (
            <div
              key={i}
              ref={eventRef}
              className={`relative flex items-center ${
                i % 2 === 0
                  ? "md:justify-start justify-end"
                  : "md:justify-end justify-start"
              }`}
              style={{
                backfaceVisibility: "hidden", // ✅ prevents flicker during scale
                perspective: 1000,
              }}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0.6 }}
                style={{ willChange: "transform, opacity" }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.9, opacity: 0.6 }
                }
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 15,
                  mass: 0.6,
                }}
                className={`p-2 py-4 md:p-4 w-42 md:w-80 ${
                  i % 2 === 0 ? "flex flex-col justify-end items-end" : "text-left"
                }`}
              >
                <h3 className={`font-semibold text-[19px] md:text-2xl text-[#DE9841] w-full ${
                    i % 2 === 0 ? "text-left md:text-right" : "text-right md:text-left"
                  }`}>
                  {event.time}
                </h3>
                <p
                  className={`text-[17px] md:text-3xl text-gray-600 dark:text-gray-300 w-[147px] md:w-full ${
                    i % 2 === 0 ? "text-left md:text-right" : "text-right md:text-left"
                  }`}
                >
                  {event.title}
                </p>
              </motion.div>

              {/* Animated Dot */}
              <motion.div
                style={{ willChange: "transform, opacity" }}
                initial={{ scale: 0.7, opacity: 0.5 }}
                animate={
                  isInView
                    ? { scale: 1.3, opacity: 1 }
                    : { scale: 0.7, opacity: 0.5 }
                }
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 14,
                  mass: 0.5,
                }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#aeaeae] rounded-full z-10"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollTimeline;


// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// type TimelineEvent = {
//   time: string;
//   title: string;
// };

// interface ScrollTimelineProps {
//   events: TimelineEvent[];
// }

// const ScrollTimeline: React.FC<ScrollTimelineProps> = ({ events }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   // framer-motion scroll logic
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start center", "end end"],
//   });

//   const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   return (
//     <div ref={ref} className="relative w-full flex justify-center py-10 sm:py-20 px-4">

//       {/* Center line background (Desktop) / Left line background (Mobile) */}
//       {/* On mobile (sm:hidden), the line is on the left. On desktop, it's centered. */}
//       <div className="absolute top-0 w-1 bg-gray-300 h-full rounded-full left-1/2 transform -translate-x-1/2 sm:block hidden" />
//       <div className="absolute top-0 w-1 bg-gray-300 h-full rounded-full left-4 sm:hidden block" />

//       {/* Animated filled line (Desktop) / Animated filled line (Mobile) */}
//       {/* On mobile (sm:hidden), the line is on the left. On desktop, it's centered. */}
//       <motion.div
//         className="absolute top-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full left-1/2 transform -translate-x-1/2 sm:block hidden"
//         style={{ height: lineHeight }}
//       />
//       <motion.div
//         className="absolute top-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full left-4 sm:hidden block"
//         style={{ height: lineHeight }}
//       />

//       {/* Timeline items container */}
//       <div className="w-full max-w-3xl space-y-16 sm:space-y-20">
//         {events.map((event, i) => (
//           <div
//             key={i}
//             // Mobile: left-aligned content (start)
//             // Desktop (sm+): alternating alignment based on index
//             className={`relative flex items-center
//               ${i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}
//               justify-start`} // default to justify-start for mobile
//           >

//             {/* Event content box */}
//             <div
//               // Mobile: p-3, full width, text-left
//               // Desktop (sm+): p-4, fixed width (w-80), alternating text alignment
//               className={`p-3 sm:p-4 w-full sm:w-80
//                 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}
//                 text-left ml-8 sm:ml-0`} // ml-8 pushes content away from the left line on mobile
//             >
//               <h3 className="font-semibold text-xl sm:text-2xl text-[#DE9841]">
//                 {event.time}
//               </h3>
//               <p className="text-xl sm:text-3xl text-gray-600 dark:text-gray-300">
//                 {event.title}
//               </p>
//             </div>

//             {/* Timeline circle */}
//             <div
//               // Mobile: absolute left-4 (to align with the left line)
//               // Desktop (sm+): absolute left-1/2 (to align with the center line)
//               className="absolute w-4 h-4 bg-[#aeaeae] rounded-full z-10
//               left-4 sm:left-1/2 transform sm:-translate-x-1/2"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollTimeline;
