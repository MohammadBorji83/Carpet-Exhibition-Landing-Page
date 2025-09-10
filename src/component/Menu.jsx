
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "کالکشن‌ها" },
    { href: "#", label: "درباره ما" },
    { href: "#", label: "هنر بافندگی" },
    { href: "#", label: "تماس با ما" },
  ];

  // انیمیشن برای منوی موبایل
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  // انیمیشن برای هر لینک
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      initial={{ scale: 0.7, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-between p-4 bg-white shadow-md relative font-serif dir-rtl"
    >
      {/* لوگو */}
      <h1 className="font-bold text-3xl">KARPET</h1>

      {/* لینک‌های دسکتاپ */}
      <div className="hidden md:flex flex-row-reverse gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-800 hover:text-yellow-500 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* دکمه نمایشگاه */}
      <div className="hidden md:block">
        <button className="bg-yellow-100 px-4 py-2 rounded-full hover:bg-yellow-200 transition-colors">
          بازدید از نمایشگاه
        </button>
      </div>

      {/* دکمه منوی موبایل */}
      <motion.button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
        aria-label={open ? "بستن منو" : "باز کردن منو"}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <FaTimes /> : <FaBars />}
        </motion.div>
      </motion.button>

      {/* منوی موبایل */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden z-50"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                variants={linkVariants}
                className="text-gray-800 hover:text-yellow-500 text-lg transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              variants={linkVariants}
              className="bg-yellow-100 px-4 py-2 rounded-full hover:bg-yellow-200 transition-colors"
            >
              بازدید از نمایشگاه
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Menu;