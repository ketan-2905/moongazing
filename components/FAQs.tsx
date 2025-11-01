"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { div } from "framer-motion/client";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Ensures component only renders after client hydration
    setMounted(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!mounted) return null; // Avoids SSR mismatch

  return (
    <section id="faqs" className="w-full flex flex-col items-center py-16 px-4  text-white">
      <h2 className=" text-3xl md:text-5xl font-semibold mb-12 tracking-[0.05em] text-center">
        FAQs
      </h2>

      <div className="w-full max-w-3xl space-y-6">
        {faqs.map((faq, i) => (
          <div>
            <div
              key={i}
              className={`border border-gray-700 ${
                openIndex === i ? "rounded-t-2xl" : "rounded-2xl"
              } overflow-hidden bg-gray-800/60`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-2 md:p-4 text-left"
              >
                <span className="text-lg md:text-xl font-medium  text-[#DE9841] tracking-[0.02em]">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="text-[#DE9841]" />
                ) : (
                  <ChevronDown className="text-[#DE9841]" />
                )}
              </button>
            </div>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ originY: 0 }} // expand from top
                  className="text-start md:py-2 px-4 md:px-6 py-2 md:pb-2 text-[#d0d0d0] text-base md:text-lg  border-t border-gray-700 overflow-hidden bg-gray-800/60 backdrop-blur-md shadow-md rounded-b-2xl tracking-[0.01em]"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
