// import Link from "next/link";

// const Footer = () => {
//   return (
//     <div className="relative flex flex-col items-center justify-center gap-4 py-6 bg-black text-white">
//      <Link target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSex9aBBMwl8tXfNoRXqOnsYnMhBkoL1LbYVV5LgUTAtYRFw_Q/viewform" className=""> <button className="border-2 border-gray-500 p-3 rounded-full flex items-center gap-2 hover:border-[#DE9841] transition-colors duration-300 md:w-[150px] md:h-[60px] text-xl  justify-center">
//         Register Now
//       </button></Link>
//       <div className="w-full flex items-center justify-center gap-2">
//         <p className="text-center  text-lg ">
//           © 2025 DJS NOVA. All rights reserved.
//         </p>
//         <div className=" items-center gap-2 justify-center hidden md:flex">
//         |

//           <ul className="flex gap-4 text-lg tracking-wide">
//             {[
//               { name: "Heroic", href: "#heroic" },
//               { name: "Timeline", href: "#timeline" },
//               { name: "FAQs", href: "#faqs" },
//               { name: "Past Glimpse", href: "#past-glimpse" },
//             ].map(({ name, href }) => (
//               <li key={name}>
//                 <a
//                   href={href}
//                   className="relative text-gray-300 hover:text-[#DE9841] transition-colors duration-300"
//                 >
//                   {name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 py-6  text-white">
      <Link
        target="blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSex9aBBMwl8tXfNoRXqOnsYnMhBkoL1LbYVV5LgUTAtYRFw_Q/viewform"
        className=""
      >
        <button className="border-2 border-gray-500 p-3 rounded-full flex items-center gap-2 hover:border-[#DE9841] transition-colors duration-300 md:w-[150px] md:h-[60px] text-xl justify-center">
          Register Now
        </button>
      </Link>

      <div>
        <div className="w-full flex  items-center justify-center gap-2">
          <p className="text-center text-lg">
            © 2025 DJS NOVA. All rights reserved.
          </p>

          <div className="items-center gap-2 justify-center hidden md:flex">
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

          {/* Contact Numbers */}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-gray-300 text-lg mt-2">
          <a
            href="tel:+917506071608"
            className="hover:text-[#DE9841] transition-colors duration-300"
          >
            Akshat Singh: +91 75060 71608
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="tel:+917977127291"
            className="hover:text-[#DE9841] transition-colors duration-300"
          >
            Bhargavi Naik: +91 79771 27291
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
