import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CTA = () => {
  // انیمیشن برای محتوا
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={contentVariants}
      className="bg-gradient-to-r from-yellow-100 to-orange-100 py-16 dir-rtl"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            آماده‌اید تا فرش رویایی‌تان را پیدا کنید؟
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            با بازدید از نمایشگاه ما، از نزدیک با شاهکارهای هنری فرش‌های دستباف و
            ماشینی آشنا شوید. هر قطعه، داستانی منحصربه‌فرد از فرهنگ و هنر ایرانی را
            روایت می‌کند. فرصت را از دست ندهید!
          </motion.p>
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg"
            >
              بازدید از نمایشگاه
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;