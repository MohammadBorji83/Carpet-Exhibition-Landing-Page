import React, { useState, useEffect } from "react";
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
    }, 10000); // ۱۰ ثانیه = ۱۰۰۰۰ میلی‌ثانیه

    return () => clearInterval(timer); // cleanup
  }, [heroes.length]);

  // تابع برای بعدی
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroes.length);
  };

  // تابع برای قبلی
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroes.length) % heroes.length);
  };

  const currentHero = heroes[currentIndex];

  return (
    <section className="container mx-auto px-4 py-16 dir-rtl relative font-serif bg-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh] transition-all duration-500 ease-in-out">
        {/* متن */}
        <div className="flex flex-col items-start space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            {currentHero.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {currentHero.description}
          </p>
          <div className="md:mx-56">
             <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors ">
            {currentHero.buttonText}
          </button>
          </div>
         
        </div>

        {/* تصویر */}
        <div className="w-full">
          <img
            className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
            src={currentHero.image}
            alt={currentHero.alt}
          />
        </div>
      </div>

      {/* دکمه‌های قبلی/بعدی */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-colors"
      >
        &larr; {/* فلش چپ برای قبلی */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-colors"
      >
        &rarr; {/* فلش راست برای بعدی */}
      </button>
    </section>
  );
};

export default HeroSlider;