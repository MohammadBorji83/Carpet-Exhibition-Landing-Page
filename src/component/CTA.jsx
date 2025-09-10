// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-16 dir-rtl">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            آماده‌اید تا فرش رویایی‌تان را پیدا کنید؟
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            با بازدید از نمایشگاه ما، از نزدیک با شاهکارهای هنری فرش‌های دستباف و ماشینی آشنا شوید. هر قطعه، داستانی منحصربه‌فرد از فرهنگ و هنر ایرانی را روایت می‌کند. فرصت را از دست ندهید!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg">
              بازدید از نمایشگاه
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;