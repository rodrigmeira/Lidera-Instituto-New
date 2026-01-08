"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@headlessui/react";

const aboutContent = {
  heading: {
    title: "Quem Somos",
    subtitle: "Vinci – Inteligência em Pessoas",
  },
  content: {
    img: "/img-square-2-min",
    title: "Educação e desenvolvimento humano",
    description:
      "A Vinci Inteligência em Pessoas é uma empresa de educação e desenvolvimento humano com 13 anos de atuação no setor público, especializada em formações, consultorias técnicas e projetos educacionais estratégicos voltados à qualificação de pessoas e ao fortalecimento da gestão pública. Atuamos junto a municípios, órgãos públicos estaduais e federais, com foco especial nas Secretarias Municipais de Educação, Saúde e Assistência Social, áreas onde pessoas são o principal ativo — e também o maior desafio. Nossa essência é simples e profunda: quando pessoas se desenvolvem, resultados acontecem.",
    btn: {
      href: "/about",
      label: "Saiba mais",
    },
  },
};

const About = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);
  const img2 = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);
  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-xl mx-auto mb-20 lg:mb-22 relative z-[5]">
          {aboutContent.heading.subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-blue-600 bg-blue-200/30 px-3 py-1.5 rounded-md"
            >
              
              {aboutContent.heading.subtitle}
            </motion.span>
          )}
          {aboutContent.heading.title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl"
            >
              {aboutContent.heading.title}
            </motion.h2>
          )}
        </div>

        <div className="lg:flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              <motion.div style={{ y: img1 }} className="z-[2] relative">
                <Image
                  src="/img-square-2-min.jpg"
                  alt="about"
                  width={400}
                  height={600}
                  className="object-cover !w-full !h-[550px] lg:max-w-2xl object-center"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true }}
                style={{ y: img2 }}
                className="absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]"
              >
                <Image
                  src="/dots.svg"
                  alt="dots"
                  width={200}
                  height={200}
                  className="w-64"
                />
              </motion.div>
            </div>
            <div className="lg:w-6/12">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-2xl mb-7 text-gray-800"
              >
                {aboutContent.content.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-14 text-gray-500"
              >
                {aboutContent.content.description}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Link
                  href='/about'
                  className="trannsition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-blue-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-blue-600 hover:shadow-2xl"
                >
                  {aboutContent.content.btn.label}
                </Link>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
