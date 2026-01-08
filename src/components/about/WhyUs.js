"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiCheckShield, BiAward, BiUser, BiNavigation, BiRocket } from "react-icons/bi";
import Image from "next/image";

const WhyUsContent = {
  heading: {
    title: "Por que nos escolher?",
    subtitle:
      "Transformamos desafios em soluções através de excelência e inovação.",
  },
  whyusItems: [
    {
      icon: BiAward,
      title: "Experiência Consolidada",
      description:
        "Mais de duas décadas no mercado, atuando em gestão pública e privada.",
    },
    {
      icon: BiUser,
      title: "Equipe Especializada",
      description:
        "Profissionais altamente qualificados, com expertise em diversas áreas.",
    },
    {
      icon: BiCheckShield,
      title: "Soluções Personalizadas",
      description:
        "Cada projeto é desenhado para atender ás necessidades específicas dos clientes.",
    },
    {
      icon: BiNavigation,
      title: "Inovação e Tecnologia",
      description: "Uso de ferramentas modernas para garantir eficiência e qualidade."
    },
    {
      icon: BiRocket,
      title: "Compromisso com Resultados",
      description: "Monitramento contínuo e impacto sustentável em todas as ações.",
    }
  ],
};

const WhyUs = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  return (
    <section className={`${className}`} ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center lg:max-w-3xl mx-auto mb-20 lg:mb-32">
          {WhyUsContent.heading.subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-blue-500 bg-blue-200/30 px-3 py-1.5 rounded-md"
            >
              {WhyUsContent.heading.title}
            </motion.span>
          )}
          {WhyUsContent.heading.title && (
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl"
            >
              {WhyUsContent.heading.subtitle}
            </motion.h2>
          )}
        </div>
        <div className="lg:flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-start">
            <div className="mb-7 lg:mb-0 lg:6/12 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: true }}
                style={{ y: img1 }}
              >
                <Image
                  src="/img-square-2-min.jpg"
                  className="object-cover !w-full h-[500px] lg:max-w-2xl object-center"
                  width={400}
                  height={300}
                  alt="Image"
                />
              </motion.div>
            </div>
            <div className="lg:w-6/12">
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.9, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="list-none"
              >
                {WhyUsContent.whyusItems.map((item, idx) => (
                  <li
                    className="flex space-x-4 items-start mb-7"
                    key={item.title}
                  >
                    <span className="text-xl grown-0 flex-none inline-flex justify-center items-center w-12 h-12 rounded-full relative bg-[#061F3D]/50">
                      {<item.icon className="z-20 relative text-white" />}
                    </span>
                    <div>
                      <h3 className="text-gray-800 text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
