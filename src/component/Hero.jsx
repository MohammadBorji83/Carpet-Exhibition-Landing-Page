import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../assets/HERO1.jpg";
import hero2 from "../assets/HERO2.jpg";

const HeroSlider = () => {
  const heroes = [
    {
      title: "جهان هنر فرش دستباف را کشف کنید",
      description: "نمایشگاه فرش ما مجموعه‌ای بی‌نظیر از فرش‌های دستباف ایرانی با طرح‌های سنتی و مدرن ارائه می‌دهد. هر قطعه داستانی از هنر، فرهنگ و مهارت است. بپیوندید و زیبایی اصیل را تجربه کنید!",
      buttonText: "بازدید کنید",
      image: hero1,
      alt: "فرش دستباف ایرانی با طرح سنتی",
    },
    {
      title: "زیبایی تابلو فرش‌های هنری را تجربه کنید",
      description: "تابلو فرش‌های ما ترکیبی از هنر سنتی و مدرن هستند که دیوارهای شما را زینت می‌دهند. هر تابلو یک شاهکار منحصربه‌فرد است که داستان‌های فرهنگی را روایت می‌کند.",
      buttonText: "کاوش کنید",
      image: hero2,
      alt: "تابلو فرش هنری با طرح مدرن",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // اتوماتیک سواپ هر ۱۰ ثانیه
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroes.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [heroes.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroes.length) % heroes.length);
  };

  const currentHero = heroes[currentIndex];

  // انیمیشن برای متن و تصویر
  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        duration: 0.5 
      }
    },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="container mx-auto px-4 py-16 dir-rtl relative font-serif bg-gray-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh]">
        {/* متن */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex + "-text"}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-start space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              {currentHero.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {currentHero.description}
            </p>
            <div className="md:mx-56">
              <motion.button
                variants={contentVariants}
                className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors"
              >
                {currentHero.buttonText}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* تصویر */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex + "-image"}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full relative"
          >
            <img
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
              src={currentHero.image}
              alt={currentHero.alt}
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* دکمه‌های قبلی/بعدی */}
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={prevSlide}
        className="absolute left-2 bottom-4 md:left-4 md:top-1/2 md:transform md:-translate-y-1/2 bg-white/70 p-3 md:p-2 rounded-full hover:bg-white transition-colors z-10 text-2xl md:text-xl"
        aria-label="اسلاید قبلی"
      >
        &larr;
      </motion.button>
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={nextSlide}
        className="absolute right-2 bottom-4 md:right-4 md:top-1/2 md:transform md:-translate-y-1/2 bg-white/70 p-3 md:p-2 rounded-full hover:bg-white transition-colors z-10 text-2xl md:text-xl"
        aria-label="اسلاید بعدی"
      >
        &rarr;
      </motion.button>
    </motion.section>
  );
};

export default HeroSlider;