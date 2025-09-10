import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "کالکشن‌ها" },
    { href: "#", label: "درباره ما" },
    { href: "#", label: "هنر بافندگی" },
    { href: "#", label: "تماس با ما" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md relative font-serif dir-rtl">
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
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
        aria-label={open ? "بستن منو" : "باز کردن منو"}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* منوی موبایل */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden z-50 transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-800 hover:text-yellow-500 text-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-yellow-100 px-4 py-2 rounded-full hover:bg-yellow-200 transition-colors">
            بازدید از نمایشگاه
          </button>
        </div>
      )}
    </nav>
  );
};

export default Menu;