'use client';
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import LandingPage from "@/components/landing/LandingPage";
import IssueTrackerPage from "@/components/landing/Navbar";
import GlowingEffectDemo from "@/components/landing/box/box1";
import End from "@/components/landing/End"
import { Merriweather, Montserrat } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // 700 for bold
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // 700 for bold text
});

const imgs = [
  "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/homepage-banners/January2024/CCeVjCKszDYpK1Zw5MPj.webp?w=3840&q=75 ",
  "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/homepage-banners/January2024/VN8DnbFlModceGUJm44g.webp?w=3840&q=75 ",
  "https://img.freepik.com/free-vector/hospital-team-diverse-healthcare-staff-doctors_107791-11611.jpg?ga=GA1.1.166189983.1736508498&semt=ais_hybrid",
  "https://img.freepik.com/premium-photo/portrait-male-doctor-with-stethoscope-arm-cross-isolated-white-wall-health-insurance-concept_3544-1512.jpg"];

const AUTO_DELAY = 6000;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Images = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [imgIndex]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
        <div>
            <IssueTrackerPage/>
        </div>
      <div className="relative overflow-hidden">
        {/* Image Carousel */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          animate={{ translateX: `-${imgIndex * 100}%` }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex cursor-grab items-center active:cursor-grabbing"
        >
          {imgs.map((imgSrc, idx) => (
            <motion.div
              key={idx}
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              animate={{ scale: imgIndex === idx ? 1.0 : 1.0  }}
              transition={SPRING_OPTIONS}
              className="w-screen shrink-0 bg-neutral-800"
            >
              {/* Reduced height */}
              <div className="h-[100px] md:h-[400px] lg:h-[450px] w-full"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dots Navigation */}
        <div className="mt-4 flex w-full justify-center gap-2">
          {imgs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
              }`}
            />
          ))}
        </div>

        {/* Gradient Edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
      </div>
      <LandingPage />
      <div className={`${merriweather.className}  text-center p-5 text-7xl font-semibold  whitespace-nowrap text-black font-serif`}> Our Services </div>
      <div className="p-12 mx-16 my-10"> 
        <GlowingEffectDemo/>
      </div>
      <End/>
    </div>
  );
};

export default Images;
