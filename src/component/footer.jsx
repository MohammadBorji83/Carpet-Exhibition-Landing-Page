import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 dir-rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* لوگو و توضیح */}
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-2xl font-bold mb-4">KARPET</h3>
            <p className="text-gray-300 mb-4 text-base md:text-lg">
              نمایشگاه فرش ما، پلی بین هنر سنتی ایرانی و سلیقه‌های مدرن. با ما جهان زیبای فرش‌های دستباف و ماشینی را کشف کنید.
            </p>
            <div className="flex space-x-4 space-x-reverse gap-2">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <FaInstagram className="text-2xl md:text-3xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <RiTelegram2Fill className="text-2xl md:text-3xl" />
              </a>
               <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <  FaWhatsapp className="text-2xl md:text-3xl" />
              </a>
              
            </div>
          </div>

          {/* لینک‌های ناوبری */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">لینک‌های مفید</h4>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">خانه</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">کالکشن‌ها</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">درباره ما</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">تماس</a></li>
            </ul>
          </div>

          {/* تماس */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">تماس با ما</h4>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>ایمیل: info@karpet.ir</li>
              <li>آدرس: تهران، خیابان فرش، پلاک ۱۰۰</li>
            </ul>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>&copy; ۲۰۲۵ KARPET. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;