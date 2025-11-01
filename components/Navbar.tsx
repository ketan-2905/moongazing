// // import { url } from "inspector";
// // import { headers } from "next/headers";
// // import React from "react";

// // const Navbar = () => {
// //   const routes = [
// //     { name: "Gallery", url: "/gallery" },
// //     { name: "Team", url: "/team" },
// //     { name: "Event", url: "/event" },
// //     { name: "Blog", url: "/blog" },
// //   ];

// //   return (
// //     <header className="flex justify-between items-center px-8 py-4 h-20 ">
// //       <div className="flex items-center justify-between text-2xl tracking-[0.3em]">
// //         <img src="logo/nova_logo.png" alt="NOVA_LOGO" width={100} />
// //         <span>DJS NOVA</span>
// //       </div>
// //       <nav>
// //         <ul className="flex gap-4 justify-between items-center tracking-[0.3em]">
// //           {routes.map((route) => (
// //             <li
// //               key={route.name}
// //               className="hover:text-gray-400 transition-colors duration-200 cursor-pointer text-2xl"
// //             >
// //               <a href={route.url}>{route.name}</a>
// //             </li>
// //           ))}
// //         </ul>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;

// // "use client";

// // import React from "react";
// // import { usePathname } from "next/navigation";
// // import { Camera, Users, CalendarDays, Home, PenTool } from "lucide-react"; // icons
// // import Image from "next/image";

// // const Navbar = () => {
// //   const pathname = usePathname();

// //   const routes = [
// //     { name: "Home", url: "/", icon: <Home size={18} /> },
// //     { name: "Astrophotography", url: "/astrophotography", icon: <Camera size={18} /> },
// //     { name: "Team", url: "/team", icon: <Users size={18} /> },
// //     { name: "Event", url: "/event", icon: <CalendarDays size={18} /> },
// //     { name: "Blog", url: "/blog", icon: <PenTool size={18} />, special: true },
// //   ];

// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50 ">
// //       <div className="max-w-7xl mx-auto flex justify-between items-center  py-4 h-20 text-white">
// //         {/* Logo Section */}
// //         <div className="flex items-center gap-3 text-2xl font-light tracking-[0.25em]">
// //           <Image src="/logo/nova_logo.png" alt="NOVA_LOGO" width={60} height={60} />
// //           <span className="text-white/90">DJS NOVA</span>
// //         </div>

// //         {/* Navigation Links */}
// //         <nav>
// //           <ul className="flex gap-10 text-lg tracking-[0.2em]">
// //             {routes.map(({ name, url, special }) => {
// //               const isActive = pathname === url;

// //               return (
// //                 <li key={name} className="relative group">
// //                   <a
// //                     href={url}
// //                     className={`
// //                       flex items-center gap-2 transition-all duration-300
// //                       ${isActive ? "text-white" : "text-gray-400 hover:text-white"}
// //                       ${special ? "text-amber-400 font-semibold" : ""}
// //                     `}
// //                   >
// //                     {name}
// //                   </a>

// //                   {/* Active indicator underline */}
// //                   {isActive && (
// //                     <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 to-white rounded-full"></span>
// //                   )}

// //                   {/* Blog special animation */}
// //                   {special && (
// //                     <span className="absolute inset-0 animate-pulse blur-[1px] text-amber-400 opacity-50 pointer-events-none">
// //                       {name}
// //                     </span>
// //                   )}
// //                 </li>
// //               );
// //             })}
// //           </ul>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;

// // "use client";

// // import Image from "next/image";

// // const SectionNavbar = () => {
// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50 py-4 bg-black/20 ">
// //       <div className="max-w-7xl mx-auto flex justify-between items-center">
// //         {/* Logo */}
// //         <div className="flex items-center gap-3 text-2xl font-light tracking-[0.25em]">
// //           <Image src="/logo/nova_logo.png" alt="DJS NOVA" width={50} height={50} />

// //         </div>

// //         {/* Nav Links */}
// //         <nav>
// //           <ul className="flex gap-10 text-lg tracking-wide">
// //             {[
// //               { name: "Heroic", href: "#heroic" },
// //               { name: "Timeline", href: "#timeline" },
// //               { name: "FAQs", href: "#faqs" },
// //               { name: "Past Glimpse", href: "#past-glimpse" },
// //             ].map(({ name, href }) => (
// //               <li key={name}>
// //                 <a
// //                   href={href}
// //                   className="relative text-gray-300 hover:text-[#DE9841] transition-colors duration-300"
// //                 >
// //                   {name}
// //                   <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#DE9841] transition-all duration-300 group-hover:w-full"></span>
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>
// //       </div>

// //       {/* Smooth scrolling */}
// //       <style jsx global>{`
// //         html {
// //           scroll-behavior: smooth;
// //         }
// //       `}</style>
// //     </header>
// //   );
// // };

// // export default SectionNavbar;

// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";
// // import { Menu, X } from "lucide-react";

// // const SectionNavbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50  bg-black/20">
// //       <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
// //         {/* Logo */}
// //         <div className="flex items-center gap-3 text-2xl font-light tracking-[0.25em]">
// //           <Image src="/logo/nova_logo.png" alt="DJS NOVA" width={80} height={80} />
// //         </div>

// //         {/* Desktop Nav */}
// //         <nav className="hidden md:block">
// //           <ul className="flex gap-10 text-lg tracking-wide">
// //             {[
// //               { name: "Heroic", href: "#heroic" },
// //               { name: "Timeline", href: "#timeline" },
// //               { name: "FAQs", href: "#faqs" },
// //               { name: "Past Glimpse", href: "#past-glimpse" },
// //             ].map(({ name, href }) => (
// //               <li key={name}>
// //                 <a
// //                   href={href}
// //                   className="relative text-gray-300 hover:text-[#DE9841] transition-colors duration-300"
// //                 >
// //                   {name}
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>

// //         {/* Hamburger Icon (Mobile) */}
// //         <button
// //           className="md:hidden text-gray-300"
// //           onClick={() => setMenuOpen(true)}
// //         >
// //           <Menu size={28} />
// //         </button>
// //       </div>

// //       {/* Mobile Menu (Slide from Right) */}
// //       <div
// //         className={`fixed top-0 right-0 h-full w-2/3 bg-black/90 transform ${
// //           menuOpen ? "translate-x-0" : "translate-x-full"
// //         } transition-transform duration-300 ease-in-out md:hidden z-50`}
// //       >
// //         <div className="flex justify-end p-4">
// //           <button onClick={() => setMenuOpen(false)} className="text-gray-300">
// //             <X size={28} />
// //           </button>
// //         </div>

// //         <ul className="flex flex-col items-center gap-8 mt-10 text-lg">
// //           {[
// //             { name: "Heroic", href: "#heroic" },
// //             { name: "Timeline", href: "#timeline" },
// //             { name: "FAQs", href: "#faqs" },
// //             { name: "Past Glimpse", href: "#past-glimpse" },
// //           ].map(({ name, href }) => (
// //             <li key={name}>
// //               <a
// //                 href={href}
// //                 onClick={() => setMenuOpen(false)}
// //                 className="text-gray-300 hover:text-[#DE9841] transition-colors duration-300"
// //               >
// //                 {name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Smooth Scrolling */}
// //       <style jsx global>{`
// //         html {
// //           scroll-behavior: smooth;
// //         }
// //       `}</style>
// //     </header>
// //   );
// // };

// // export default SectionNavbar;

// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";
// // import { Menu, X } from "lucide-react";

// // const SectionNavbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition-all duration-300">
// //       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-1">
// //         {/* Logo */}
// //         <div className="flex items-center gap-3 text-2xl font-light tracking-[0.25em]">
// //           <Image src="/logo/nova_logo.png" alt="DJS NOVA" width={55} height={55} />
// //         </div>

// //         {/* Desktop Nav */}
// //         <nav className="hidden md:block">
// //           <ul className="flex gap-8 text-[1rem] tracking-wide">
// //             {[
// //               { name: "Heroic", href: "#heroic" },
// //               { name: "Timeline", href: "#timeline" },
// //               { name: "FAQs", href: "#faqs" },
// //               { name: "Past Glimpse", href: "#past-glimpse" },
// //             ].map(({ name, href }) => (
// //               <li key={name}>
// //                 <a
// //                   href={href}
// //                   className="relative text-gray-300 hover:text-[#DE9841] transition-colors duration-300"
// //                 >
// //                   {name}
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>

// //         {/* Hamburger Icon (Mobile) */}
// //        {!menuOpen &&  <button
// //           className="md:hidden text-gray-300"
// //           onClick={() => setMenuOpen(true)}
// //         >
// //           <Menu size={26} />
// //         </button>}
// //       </div>

// //       {/* Mobile Menu (Slide from Right) */}
// //       <div
// //         className={`fixed top-0 right-0 h-full w-2/3  backdrop-blur-md transform ${
// //           menuOpen ? "translate-x-0" : "translate-x-full"
// //         } transition-transform duration-300 ease-in-out md:hidden z-50`}
// //       >
// //         <div className="flex justify-end p-3">
// //           <button onClick={() => setMenuOpen(false)} className="text-gray-300">
// //             <X size={28} />
// //           </button>
// //         </div>

// //         <ul className="flex flex-col items-center gap-8 text-lg bg-black/90 h-screen pt-10">
// //           {[
// //             { name: "Heroic", href: "#heroic" },
// //             { name: "Timeline", href: "#timeline" },
// //             { name: "FAQs", href: "#faqs" },
// //             { name: "Past Glimpse", href: "#past-glimpse" },
// //           ].map(({ name, href }) => (
// //             <li key={name}>
// //               <a
// //                 href={href}
// //                 onClick={() => setMenuOpen(false)}
// //                 className="text-gray-300 hover:text-[#DE9841] transition-colors duration-300"
// //               >
// //                 {name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Smooth Scrolling */}
// //       <style jsx global>{`
// //         html {
// //           scroll-behavior: smooth;
// //         }
// //       `}</style>
// //     </header>
// //   );
// // };

// // export default SectionNavbar;

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";

// const SectionNavbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header
//       className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition-all duration-300"
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 md:py-3">
//         {/* Logo */}
//         <div className="flex items-center gap-2 text-2xl font-light tracking-[0.25em]">
//           <Image
//             src="/logo/nova_logo.png"
//             alt="DJS NOVA"
//             width={60}
//             height={60}
//             className="drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
//           />
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:block">
//           <ul className="flex gap-8 text-[1rem] tracking-wide">
//             {[
//               { name: "Heroic", href: "#heroic" },
//               { name: "Timeline", href: "#timeline" },
//               { name: "FAQs", href: "#faqs" },
//               { name: "Past Glimpse", href: "#past-glimpse" },
//             ].map(({ name, href }) => (
//               <li key={name}>
//                 <a
//                   href={href}
//                   className="relative text-gray-200 hover:text-[#DE9841] transition-colors duration-300"
//                 >
//                   {name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Hamburger Icon (Mobile) */}
//         {!menuOpen && (
//           <button
//             className="md:hidden text-gray-200 hover:text-[#DE9841] transition-colors duration-300"
//             onClick={() => setMenuOpen(true)}
//           >
//             <Menu size={26} />
//           </button>
//         )}
//       </div>

//       {/* Mobile Menu (Slide from Right) */}
//       <div
//         className={`fixed top-0 right-0 h-full w-2/3 bg-white/10 backdrop-blur-lg border-l border-white/20 shadow-[-8px_0_30px_rgba(255,255,255,0.1)] transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden z-50 flex flex-col`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-end p-4">
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="text-gray-200 hover:text-[#DE9841] transition-colors duration-300"
//           >
//             <X size={28} />
//           </button>
//         </div>

//         {/* Menu Links */}
//         <ul className="flex flex-col items-center justify-center flex-1 gap-8 text-lg">
//           {[
//             { name: "Heroic", href: "#heroic" },
//             { name: "Timeline", href: "#timeline" },
//             { name: "FAQs", href: "#faqs" },
//             { name: "Past Glimpse", href: "#past-glimpse" },
//           ].map(({ name, href }) => (
//             <li key={name}>
//               <a
//                 href={href}
//                 onClick={() => setMenuOpen(false)}
//                 className="text-gray-200 hover:text-[#DE9841] transition-colors duration-300"
//               >
//                 {name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Smooth Scrolling */}
//       <style jsx global>{`
//         html {
//           scroll-behavior: smooth;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default SectionNavbar;

// import { url } from "inspector";
// import { headers } from "next/headers";
// import React from "react";

// const Navbar = () => {
//   const routes = [
//     { name: "Gallery", url: "/gallery" },
//     { name: "Team", url: "/team" },
//     { name: "Event", url: "/event" },
//     { name: "Blog", url: "/blog" },
//   ];

//   return (
//     <header className="flex justify-between items-center px-8 py-4 h-20 ">
//       <div className="flex items-center justify-between text-2xl tracking-[0.3em]">
//         <img src="logo/nova_logo.png" alt="NOVA_LOGO" width={100} />
//         <span>DJS NOVA</span>
//       </div>
//       <nav>
//         <ul className="flex gap-4 justify-between items-center tracking-[0.3em]">
//           {routes.map((route) => (
//             <li
//               key={route.name}
//               className="hover:text-gray-400 transition-colors duration-200 cursor-pointer text-2xl"
//             >
//               <a href={route.url}>{route.name}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// "use client";

// import React from "react";
// import { usePathname } from "next/navigation";
// import {
//   Camera,
//   Users,
//   CalendarDays,
//   Home,
//   PenTool,
//   Rocket,
// } from "lucide-react";
// import Image from "next/image";

// const Navbar = () => {
//   const pathname = usePathname();

//   const routes = [
//     { name: "Home", url: "/", icon: <Home size={18} /> },
//     {
//       name: "Astrophotography",
//       url: "/astrophotography",
//       icon: <Camera size={18} />,
//     },
//     { name: "Team", url: "/team", icon: <Users size={18} /> },
//     { name: "Event", url: "/event", icon: <CalendarDays size={18} /> },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 ">
//       {/* 🔮 Parent glass + shadow container */}
//       <div
//         className="
//            relative
//           backdrop-blur-xl
//           bg-white/10
//           text-white text-4xl font-light tracking-widest
//           z-10
//           text-center
//           shadow-[0_0_40px_rgba(255,255,255,0.15)]
//         "
//       >
//         <div
//           className="
//             absolute inset-0
//             bg-gradient-to-b from-white/20 to-transparent
//             blur-3xl
//             opacity-60
//             -z-10
//           "
//         ></div>

//         {/* Soft halo around glass */}
//         <div
//           className="
//             absolute inset-0
//             shadow-[0_0_100px_40px_rgba(255,255,255,0.08)]
//             pointer-events-none
//             -z-10
//           "
//         ></div>
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-6 h-14 text-white relative z-10">
//           {/* Logo Section */}
//           <div className="flex items-center gap-3 text-xl font-light tracking-[0.25em]">
//             <Image
//               src="/logo/nova_logo.png"
//               alt="NOVA_LOGO"
//               width={60}
//               height={60}
//               className="drop-shadow-lg"
//             />
//             <span className="text-white/90">DJS NOVA</span>
//           </div>

//           {/* Navigation Links */}
//           <nav>
//             <ul className="flex gap-10 text-[16px] tracking-[0.2em]">
//               {routes.map(({ name, url }) => {
//                 const isActive = pathname === url;

//                 return (
//                   <li key={name} className="relative group">
//                     <a
//                       href={url}
//                       className={`
//                         flex items-center gap-2 transition-all duration-300
//                         ${
//                           isActive
//                             ? "text-white"
//                             : "text-gray-400 hover:text-white"
//                         }
//                       `}
//                     >
//                       {name}
//                     </a>

//                     {/* Active underline */}
//                     {isActive && (
//                       <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 to-white rounded-full"></span>
//                     )}

//                     {/* Blog special animation */}

//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Camera, Users, CalendarDays, Home, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    { name: "Heroic", href: "#heroic" },
    { name: "Timeline", href: "#timeline" },
    { name: "FAQs", href: "#faqs" },
    { name: "Past glimpses", href: "#past-glimpse" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔮 Parent glass + shadow container */}
      <div
        className="
          relative backdrop-blur-xl bg-white/10
          text-white text-4xl font-light tracking-widest
          z-10 text-center shadow-[0_0_40px_rgba(255,255,255,0.15)]
        "
      >
        {/* Decorative background glows */}
        <div
          className="
            absolute inset-0 bg-gradient-to-b from-white/20 to-transparent
            blur-3xl opacity-60 -z-10
          "
        ></div>
        <div
          className="
            absolute inset-0 shadow-[0_0_100px_40px_rgba(255,255,255,0.08)]
            pointer-events-none -z-10
          "
        ></div>

        {/* Actual navbar content */}
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-6 h-14 text-white relative z-10">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-light tracking-[0.25em]"
            >
              {" "}
              <Image
                src="/logo/nova_logo.png"
                alt="NOVA_LOGO"
                width={50}
                height={50}
                className="drop-shadow-lg"
              />
            </Link>
          </div>

          {/* 🧭 Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-10 text-[15px] tracking-[0.05em]">
              {routes.map(({ name, href }) => {
                const isActive = pathname === href;

                return (
                  <li key={name} className="relative group">
                    <a
                      href={href}
                      className={`flex items-center gap-2 transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {name}
                    </a>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 to-white rounded-full"></span>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* 🍔 Hamburger Menu (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none z-20"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 📱 Mobile Menu Overlay */}
        <div
          className={`
            fixed top-14 left-0 w-full 
            backdrop-blur-xl bg-black/80 border-t border-white/10
            transition-all duration-500 ease-in-out overflow-hidden
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="flex flex-col items-center gap-6 py-6 text-base text-white tracking-[0.2em]">
            {routes.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <li key={name}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      isActive
                        ? "text-amber-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span>{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
