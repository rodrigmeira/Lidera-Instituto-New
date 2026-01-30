"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiWorld, BiUser, BiBuilding, BiTime } from "react-icons/bi";

const socialProofContent = {
  heading: {
    title: "Resultados que Transformam",
    subtitle: "Impacto Real",
  },
  stats: [
    {
      icon: BiWorld,
      title: "Atuação em dezenas de municípios",
      description: "Levando soluções estratégicas para diversas regiões.",
    },
    {
      icon: BiUser,
      title: "Milhares de profissionais capacitados",
      description: "Transformando carreiras e fortalecendo equipes.",
    },
    {
      icon: BiBuilding,
      title: "Projetos executados",
      description: "Em Educação, Saúde e Assistência Social.",
    },
    {
      icon: BiTime,
      title: "Experiência consolidada",
      description: "Anos de atuação e resultados no setor público.",
    },
  ],
};

const Testimonials = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-8/12 flex gap-0 items-center">
            <div className="text-center w-auto md:w-screen max-w-full md:max-w-xl mx-auto mb-16">
              {socialProofContent.heading.subtitle && (
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
                  {socialProofContent.heading.subtitle}
                </motion.span>
              )}

              {socialProofContent.heading.title && (
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
                  {socialProofContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialProofContent.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2 + index * 0.1, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-none shadow-none hover:bg-[#061F3D] transition-all duration-300 text-center group"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-[#082850] rounded-full flex items-center justify-center text-blue-600 text-3xl transition-colors duration-300">
                  <stat.icon />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">
                {stat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
