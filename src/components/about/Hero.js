"use client";
import React from "react";
import { motion } from "framer-motion";

const aboutContent = {
  heading: {
    title: "Conheça o Instituto Lidera",
    subTitle: "Sobre Nós",
  },
};

const Hero = ({ className, title, subTitle }) => {
  if (title) {
    title = title;
  } else {
    title = aboutContent.heading.title;
  }
  if (subTitle) {
    subTitle = subTitle;
  } else {
    subTitle = aboutContent.heading.subTitle;
  }

  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex w-full lg:w-10/12 mx-auto items-center justify-between">
          <div className="text-center lg:max-w-3xl mx-auto">
            {subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.03, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-blue-500 bg-blue-200 px-3 py-1.5 rounded-md"
              >{subTitle}</motion.span>
            )}

            { title && (
              <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.06, duration: 0.5 },
              }}
              className="text-3xl sm:text-4xl md:text-5xl">{title}</motion.h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
