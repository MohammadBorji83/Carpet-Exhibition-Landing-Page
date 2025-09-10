import React from "react";
import about from "../assets/about.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = ()=>{

  return(

    <section className="container mx-auto px-4 bg-white py-24 dir-rtl relative font-serif">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div className="text-center md:text-right">
          <h1 className="text-4xl font-bold mb-6">
               از پشم تا اثر هنر
          </h1 >
          <p className="text-gray-600 leading-relaxed mb-8">
          هنرمندان ما با صبر و مهارت، الیاف طبیعی را به شاهکاری بی‌بدیل تبدیل می‌کنند. هر گره، نشان از تعهد ما به کیفیت و اصالت دارد. این فرآیند، ترکیبی از سنت‌های دیرینه و نوآوری است که به هر فرش، روحی منحصر به فرد می‌بخشد.

          </p>
        
        <button className="border border-gray-800/50 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
          بیشتر بدانید
        </button>
         </div>

         <div>
          <img src={about} alt="درباره ما" className="rounded-lg shadow-xl object-cover h-90 w-full" />
         </div>
      </div>

     
    </section>
  );

};
export default About;