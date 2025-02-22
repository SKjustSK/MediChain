'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    company: "MediSync",
    quote: "Secure & Decentralized: Ensuring privacy and seamless access to medical records.",
    name: "Sanidhya Madhesia",
    position: "Team lead"
  },
  {
    company: "MediSync",
    quote: "Efficient Management: Streamlined hospital operations with a user-friendly interface!",
    name: "Sarthak Singh",
    position: "Operations Head"
  },
  {
    company: "MediSync",
    quote: "Innovative Solutions: Cutting-edge technology for improved patient care!",
    name: "Dhruv Tiwari",
    position: "CodeBase member"
  }
];

const LandingPage = () => {
  const [colorToggle, setColorToggle] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [progress, setProgress] = useState(100);
  const [barColor, setBarColor] = useState('black');

  useEffect(() => {
    const interval = setInterval(() => {
      setColorToggle((prev) => !prev);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setProgress(100); // Reset progress to full
      setBarColor('black'); // Reset bar color to black
    }, 6000); // Changes every 6 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        while (prev > 0) {
          return prev - 1; // Decrease to reach 0 in 6 sec
        } 
          setBarColor('white'); // Change bar color when it reaches zero
          return 0;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <section className="flex items-center justify-center bg-white p-48">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Title & Progress Bar */}
        <div className="md:w-1/2 flex flex-col items-start">
          <h2 className="text-4xl font-bold text-black mb-6">Who are we?  </h2>
          <p className="text-gray-500 mb-8">
            Trusted by top brands, our system ensures secure and seamless hospital management.
          </p>
          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-300 mt-4 rounded-full overflow-hidden">
            <motion.div
              className="h-full"
              style={{ backgroundColor: barColor }}
              animate={{ width: progress === 0 ? "100%" : `${progress}%` }}
              transition={{ duration: progress === 0 ? 0 : 6, ease: "linear" }}
            />
          </div>
        </div>

        {/* Right Side - Testimonial Box */}
        <motion.div
          animate={{ backgroundColor: colorToggle ? '#ffffff' : '#000000', color: colorToggle ? '#000000' : '#ffffff' }}
          transition={{ duration: 1 }}
          className="md:w-1/2 p-8 rounded-lg shadow-lg min-h-[250px] flex flex-col justify-between"
        >
          <div>
            <h3 className="text-sm uppercase tracking-wider">
              {testimonials[currentTestimonial].company}
            </h3>
            <p className="italic mt-4">
              "{testimonials[currentTestimonial].quote}"
            </p>
          </div>
          <div className="mt-6">
            <p className="font-bold">{testimonials[currentTestimonial].name}</p>
            <p className="text-sm">{testimonials[currentTestimonial].position}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;
