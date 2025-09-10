import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  // انیمیشن برای بخش‌ها
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="bg-gray-800 text-white py-12 dir-rtl"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* لوگو و توضیح */}
          <motion.div
            variants={childVariants}
            className="col-span-1 sm:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">KARPET</h3>
            <p className="text-gray-300 mb-4 text-base md:text-lg">
              نمایشگاه فرش ما، پلی بین هنر سنتی ایرانی و سلیقه‌های مدرن. با ما جهان
              زیبای فرش‌های دستباف و ماشینی را کشف کنید.
            </p>
            <div className="flex space-x-4 space-x-reverse gap-2">
              <motion.a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="text-2xl md:text-3xl" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <RiTelegram2Fill className="text-2xl md:text-3xl" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp className="text-2xl md:text-3xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* لینک‌های ناوبری */}
          <motion.div variants={childVariants}>
            <h4 className="text-base md:text-lg font-semibold mb-4">
              لینک‌های مفید
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              {["خانه", "کالکشن‌ها", "درباره ما", "تماس"].map((item) => (
                <motion.li
                  key={item}
                  variants={childVariants}
                  whileHover={{ x: -5, color: "#FBBF24" }}
                >
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* تماس */}
          <motion.div variants={childVariants}>
            <h4 className="text-base md:text-lg font-semibold mb-4">تماس با ما</h4>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>ایمیل: info@karpet.ir</li>
              <li>آدرس: تهران، خیابان فرش، پلاک ۱۰۰</li>
            </ul>
          </motion.div>
        </div>

        {/* کپی‌رایت */}
        <motion.div
          variants={childVariants}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm md:text-base"
        >
          <p>&copy; ۲۰۲۵ KARPET. تمامی حقوق محفوظ است.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;