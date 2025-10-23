import type { Metadata } from "next";
import { Gothic_A1, Poppins, Roboto, Bokor, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import IntroOverlay from "@/components/IntroOverlay";
import localFont from 'next/font/local';

// Configure the font loader function
// You must specify the 'weight' array for non-variable Google Fonts like Poppins,
// or use a variable font for better performance and flexibility.


const myLocalFont = localFont({
  src: [
    {
      path: '/../public/fonts/BBHSansBartle-Regular.ttf', 
      weight: '200', 
      style: 'normal',
    },
  ],
});

const myLocalFontTwo = localFont({
  src: [
    {
      path: '/../public/fonts/BBHSansBogle-Regular.ttf', 
      weight: '200', 
      style: 'normal',
    },
  ],
});


export const metadata: Metadata = {
  title: "Moon Gazing",
  description: "Moon gazing event webside",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myLocalFontTwo.className}  antialiased`}>
        {/* <div className="relative bg-[url('/bg/space_bg.gif')] bg-auto bg-repeat bg-left-top overflow-hidden px-8"> */}
        <IntroOverlay />
        <Navbar />
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
