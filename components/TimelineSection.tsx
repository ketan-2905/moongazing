import React from "react";
import ScrollTimeline from "./ScrollTimeline";

const TimelineSection = () => {
  const events2 = [
    { time: "02:00 PM", title: "Event Inauguration" },
    { time: "03:15 PM", title: "Guest Lecture: Journey Beyond Earth" },
    { time: "06:00 PM", title: "Entry & Check-In" },
    { time: "07:00 PM", title: "Moon Gazing & Activities Begin" },
    { time: "09:15 PM", title: "Movie Screening" },
    { time: "05:30 AM", title: "Sunrise Viewing & Closing" },
  ];
  return (
    <section
      id="timeline"
      className="min-h-screen pt-20 
  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,1)_75%),linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_15%,rgba(0,0,0,0)_85%,rgba(0,0,0,1)_100%)]
  bg-cover bg-center sm:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_80%),linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_90%,rgba(0,0,0,1)_100%)] overflow-x-hidden"
    >
      <ScrollTimeline events={events2} />
    </section>
  );
};

export default TimelineSection;
