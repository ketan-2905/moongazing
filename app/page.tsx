import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import FAQ from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroicSection from "@/components/HeroicSection";
import ScrollTimeline from "@/components/ScrollTimeline";
import TimelineSection from "@/components/TimelineSection";

export default function Astrophotography() {
  const faqs = [
    {
      question: "What is the event about?",
      answer:
        "The event explores moon gazing sessions with detailed explanations from astronomers.",
    },
    {
      question: "Do I need to register beforehand?",
      answer:
        "Yes, pre-registration is required due to limited seats for each time slot.",
    },
    {
      question: "Is there an age restriction?",
      answer: "No, it's open to all age groups interested in astronomy.",
    },
    {
      question: "What is the event about?",
      answer:
        "The event explores moon gazing sessions with detailed explanations from astronomers.",
    },
    {
      question: "Do I need to register beforehand?",
      answer:
        "Yes, pre-registration is required due to limited seats for each time slot.",
    },
    {
      question: "Is there an age restriction?",
      answer: "No, it's open to all age groups interested in astronomy.",
    },
    {
      question: "What is the event about?",
      answer:
        "The event explores moon gazing sessions with detailed explanations from astronomers.",
    },
    {
      question: "Do I need to register beforehand?",
      answer:
        "Yes, pre-registration is required due to limited seats for each time slot.",
    },
    {
      question: "Is there an age restriction?",
      answer: "No, it's open to all age groups interested in astronomy.",
    },
     {
      question: "Do I need to register beforehand?",
      answer:
        "Yes, pre-registration is required due to limited seats for each time slot.",
    },
    {
      question: "Is there an age restriction?",
      answer: "No, it's open to all age groups interested in astronomy.",
    },
  ];

  const media = [
    { type: "image", src: "/astro1.png", alt: "First" },
    { type: "image", src: "astro2.png", alt: "Second" },
    { type: "video", src: "/event/stargazing.mp4", alt: "Video First" },
    { type: "image", src: "astro3.png", alt: "Third" },
  ];

  return (
    <>
      <HeroicSection />

      <TimelineSection />

      {/* <section className="min-h-screen pt-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_90%),radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,1)_70%)]">
  <ScrollTimeline events={events2} />
</section> */}

      {/* <div className="bg-[url('/event/ sunrise.jpg')] bg-cover bg-center bg-no-repeat">
       <FAQ faqs={faqs} />

      <Carousel items={media} />
     </div> */}

      <div className="relative bg-black">
        {/* 1. Background Image Container */}
        <div className="bg-[url('/event/sunrise.jpg')] bg-cover bg-center bg-no-repeat absolute inset-0 z-0">
          {/* 2. Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* 3. Gradient blend overlay */}
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/40 to-transparent"></div>
        </div>

        {/* 4. Foreground content */}
        <div className="relative z-10">
          <FAQ faqs={faqs} />
          <Carousel items={media} />
        </div>
        <Footer />
      </div>
    </>
  );
}
