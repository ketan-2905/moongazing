import { Copyright } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 py-6 bg-black text-white">
      <button className="border-2 border-gray-500 p-3 rounded-full flex items-center gap-2 hover:border-[#DE9841] transition-colors duration-300 md:w-[150px] md:h-[60px] text-xl  justify-center">
        Register Now
      </button>
      <div className="w-full flex items-center justify-center gap-2">
        <p className="text-center  text-lg ">
          © 2025 DJS NOVA. All rights reserved.
        </p>
        <div className=" items-center gap-2 justify-center hidden md:flex">
        |

          <ul className="flex gap-4 text-lg tracking-wide">
            {[
              { name: "Heroic", href: "#heroic" },
              { name: "Timeline", href: "#timeline" },
              { name: "FAQs", href: "#faqs" },
              { name: "Past Glimpse", href: "#past-glimpse" },
            ].map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="relative text-gray-300 hover:text-[#DE9841] transition-colors duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
