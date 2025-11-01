import React from "react";
import ScrollTimeline from "./ScrollTimeline";

const TimelineSection = () => {
  // const events2 = [
  //   { time: "02:00 PM", title: "Event Inauguration" },
  //   { time: "03:15 PM", title: "Guest Lecture: Journey Beyond Earth" },
  //   { time: "06:00 PM", title: "Entry & Check-In" },
  //   { time: "07:00 PM", title: "Moon Gazing & Activities Begin" },
  //   { time: "09:15 PM", title: "Movie Screening" },
  //   { time: "05:30 AM", title: "Sunrise Viewing & Closing" },
  // ];

  const events = [
  { time: "03:00 PM - 03:30 PM", title: "Registration" },
  { time: "03:30 PM - 04:30 PM", title: "Inauguration and Guest Speaker" },
  { time: "04:30 PM - 05:30 PM", title: "Solar Observation" },
  { time: "05:30 PM - 06:00 PM", title: "Break" },
  { time: "06:00 PM - 06:45 PM", title: "Lecture 1" },
  { time: "06:45 PM - 09:00 PM", title: "Observation Session 1" },
  { time: "09:00 PM - 10:00 PM", title: "Dinner Break" },
  { time: "10:00 PM - 11:00 PM", title: "Astronomy Quiz" },
  { time: "11:00 PM - 12:00 AM", title: "Observation Session 2" },
  { time: "12:00 AM - 02:00 AM", title: "Late Night Discussion on Astronomy Theories" },
  { time: "02:00 AM - 04:00 AM", title: "Interactive Astronomy Games and Simulations" },
  { time: "04:00 AM - 06:00 AM", title: "Screening of GSAT Launch" },
];


  return (
     <section
      id="timeline"
      className="min-h-screen pt-20 
  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%),linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_15%,rgba(0,0,0,0)_85%,rgba(0,0,0,1)_100%)]
  bg-cover bg-center sm:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_80%),linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_90%,rgba(0,0,0,1)_100%)] overflow-x-hidden"
    ><h2 className=" text-3xl md:text-5xl font-semibold mb-12 tracking-[0.05em] text-center">
        Time Line
      </h2>
      <ScrollTimeline events={events} />
    </section>
  );
};

export default TimelineSection;
