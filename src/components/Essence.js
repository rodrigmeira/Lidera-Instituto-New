"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const essenceContent = {
  heading: {
    title: "Nossa Essência",
    subtitle: "Inteligência em Pessoas não é discurso. É método.",
  },
  content: {
    description:
      "Trabalhamos com uma abordagem humanizada, técnica e estratégica, integrando: Desenvolvimento humano, Gestão de pessoas e processos, Educação aplicada, Neurociência do comportamento, Cultura organizacional, Resultados mensuráveis na gestão pública. Tudo isso com respeito ao contexto legal, institucional e social do setor público.",
  },
};

const Essence = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-3xl mx-auto mb-20 lg:mb-22 relative z-[5]">
          {essenceContent.heading.subtitle && (
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
              {essenceContent.heading.subtitle}
            </motion.span>
          )}
          {essenceContent.heading.title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl mb-8"
            >
              {essenceContent.heading.title}
            </motion.h2>
          )}
          {essenceContent.content.description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-gray-500 leading-relaxed text-lg"
            >
              {essenceContent.content.description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Essence;
