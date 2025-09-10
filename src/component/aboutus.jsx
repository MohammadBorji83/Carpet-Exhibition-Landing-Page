import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import about from "../assets/about.jpg";

const About = () => {
  // انیمیشن برای متن و تصویر
  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 bg-white py-24 dir-rtl relative font-serif"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-right"
        >
          <h1 className="text-4xl font-bold mb-6">از پشم تا اثر هنر</h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            هنرمندان ما با صبر و مهارت، الیاف طبیعی را به شاهکاری بی‌بدیل تبدیل
            می‌کنند. هر گره، نشان از تعهد ما به کیفیت و اصالت دارد. این فرآیند،
            ترکیبی از سنت‌های دیرینه و نوآوری است که به هر فرش، روحی منحصر به فرد
            می‌بخشد.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-800/50 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
          >
            بیشتر بدانید
          </motion.button>
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <img
            src={about}
            alt="درباره ما"
            className="rounded-lg shadow-xl object-cover h-90 w-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;