//import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { useState } from "react";
const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md relative font-serif">
      {/* لوگو */}
      <h1 className="font-bold text-3xl">KARPET</h1>

      {/* لینک‌های دسکتاپ */}
      <div className="hidden md:flex gap-6">
        <a href="#">تماس با ما</a>
        <a href="#">هنر بافندگی</a>
        <a href="#">درباره ما</a>
        <a href="#">کالکشن‌ها</a>
      </div>

      {/* دکمه نمایشگاه */}
      <div className="hidden md:block">
        <button className="bg-yellow-100 p-2 rounded-3xl">
          بازدید از نمایشگاه
        </button>
      </div>

      {/* دکمه منوی موبایل */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* منوی موبایل */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-300 flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#">هنر بافندگی</a>
          <a href="#">درباره ما</a>
          <a href="#">کالکشن‌ها</a>
          <a href="#">تماس با ما</a>
          <button className="bg-yellow-100 p-2 rounded-3xl font-serif">
            بازدید از نمایشگاه
          </button>
        </div>
      )}
    </nav>
  );
};

export default Menu;