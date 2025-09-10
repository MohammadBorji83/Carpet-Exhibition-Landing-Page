import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import col1 from "../assets/col1.jpg";
import col2 from "../assets/col2.jpg";
import col3 from "../assets/col3.jpg";

const Collections = () => {
  const collections = [
    {
      image: col1,
      alt: "فرش ماشینی ایرانی",
      title: "فرش ماشینی ایرانی",
      description: "فرش‌های ماشینی با کیفیت بالا و طرح‌های مدرن ایرانی، مناسب برای خانه‌های امروزی.",
      link: "#",
    },
    {
      image: col2,
      alt: "فرش محلی دستباف قدیمی",
      title: "فرش محلی دستباف قدیمی",
      description: "فرش‌های دستباف محلی با الگوهای سنتی و مواد طبیعی، یادگار فرهنگ‌های بومی.",
      link: "#",
    },
    {
      image: col3,
      alt: "فرش محلی دستباف خیلی قدیمی",
      title: "فرش محلی دستباف خیلی قدیمی",
      description: "شاهکارهای باستانی دستباف که تاریخ و فرهنگ را حفظ کرده‌اند، ایده‌آل برای هر خانه.",
      link: "#",
    },
  ];

  // انیمیشن برای کارت‌ها
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    }),
  };

  // انیمیشن برای overlay
  const overlayVariants = {
    hidden: { opacity: 0, y: 30, transition: { duration: 0.2, ease: "easeIn" } },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16 dir-rtl relative font-serif"
    >
      <div>
        <h1 className="text-3xl my-3">کالکشن‌های ما</h1>
        <p className="font-bold">طراحی شده برای هر سلیقه و فضایی</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
        {collections.map((collection, index) => (
          <motion.a
            key={index}
            href={collection.link}
            className={`relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${
              index === 1 ? "md:mt-16" : ""
            }`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              className="w-full min-h-80 object-cover"
              src={collection.image}
              alt={collection.alt}
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="hidden"
              whileHover="visible"
              className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white z-10"
            >
              <h2 className="text-xl font-bold mb-2">{collection.title}</h2>
              <p className="text-sm">{collection.description}</p>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Collections;