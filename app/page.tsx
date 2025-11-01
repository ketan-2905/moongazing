import Carousel from "@/components/Carousel";
import FAQ from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroicSection from "@/components/HeroicSection";
import SponsoredCard from "@/components/SponsoredCard";
import TimelineSection from "@/components/TimelineSection";

export default function Astrophotography() {
const faqs = [
  {
    question: "Would we get attendance for the next day?",
    answer: "Don't worry, the next day is a public holiday, so college will be closed, so your no study gets wasted.",
  },
  {
    question: "Why should you not miss this?",
    answer: "It's an overnight event, no hassle at all, like no brain to be used, we will have games and movie screenings, and a night to remember.",
  },
  {
    question: "Would dinner be provided?",
    answer: "We are providing Jain and non-Jain food, both.",
  },
  {
    question: "Are we allowed to bring our own food?",
    answer: "Yes, you are absolutely free to bring your own food.",
  },
  {
    question: "Would we be allowed to go home at night?",
    answer: "No, the gates of the college will close at 8pm and open at 6am, so you can only leave college premises after 6, but we will show sun spots which will be an experience of a lifetime which should not be wasted.",
  },
  {
    question: "Would there be any arrangements if I want to sleep?",
    answer: "Yes, we will have mattresses in a classroom, different for boys and different for girls.",
  },
  {
    question: "Can we play our own games?",
    answer: "Yes, you are allowed to bring your own games.",
  },
  {
    question: "Are we allowed to bring musical instruments?",
    answer: "We are in desperate need of a jamming session, so if you know, then please heal us too.",
  },
  {
    question: "Are friends from other colleges allowed?",
    answer: "No, only DJ Sanghvi students are allowed.",
  },
];



  const media = [
    { type: "image", src: "/past_glimps/MoonGazingCover.jpg", alt: "First" },
    { type: "image", src: "/past_glimps/MoongazingMoon.jpg", alt: "Second" },
    { type: "video", src: "/past_glimps/PastGlimpse1.mp4", alt: "Video First" },
    { type: "image", src: "/past_glimps/MoonGazingSetup.jpg", alt: "Third" },
  ];

  const sponsorData = {
    logoSrc: "/Sponsors/genz_adda_logo.png",
    logoAlt: "Genze Adda Logo",
    locations: [
      {
        locationText: "Veera desai Rd, Azad Nagar, Andheri West",
        mapLinkUrl: "https://share.google/BeIhwjoxIM2TYmQYG",
      },
      {
        locationText: "Genze Adda Mithibai college, Vile Parle West",
        mapLinkUrl: "https://share.google/i8vnLDW00d8i3lsGK",
      },
    ],
  };

  return (
    <>
      <HeroicSection />

      <SponsoredCard
        logoSrc={sponsorData.logoSrc}
        logoAlt={sponsorData.logoAlt}
        locations={sponsorData.locations}
      />

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
