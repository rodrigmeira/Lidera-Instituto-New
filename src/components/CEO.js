"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ceoContent = {
  heading: {
    title: "A CEO",
    subtitle: "Jô Vicente Lima",
  },
  content: {
    img: "/person-1-min.jpg",
    title: "Fundadora e CEO da Vinci Inteligência em Pessoas",
    description:
      "Empresária, gestora de pessoas, analista de perfil comportamental, especialista em neurociência do comportamento e Master Coach de Negócios, Jô Vicente construiu sua trajetória atuando diretamente com desenvolvimento humano aplicado à gestão pública. Com sólida vivência no setor público, educação governamental e projetos institucionais, acredita que não existe política pública forte sem pessoas preparadas emocionalmente, tecnicamente e estrategicamente.",
    quote: "Meu trabalho é desenvolver pessoas para que elas desenvolvam instituições.",
  },
};

const CEO = ({ className }) => {
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
        <div className="lg:flex justify-center items-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 relative">
              <motion.div style={{ y: img1 }} className="z-[2] relative">
                <Image
                  src={ceoContent.content.img}
                  alt="Jô Vicente Lima"
                  width={400}
                  height={600}
                  className="object-cover !w-full !h-[550px] lg:max-w-2xl object-center rounded-lg"
                />
              </motion.div>
            </div>

            <div className="lg:w-6/12">
              {ceoContent.heading.subtitle && (
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
                  {ceoContent.heading.subtitle}
                </motion.span>
              )}
              {ceoContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl mb-5"
                >
                  {ceoContent.heading.title}
                </motion.h2>
              )}
              {ceoContent.content.title && (
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold mb-5"
                >
                  {ceoContent.content.title}
                </motion.h3>
              )}
              {ceoContent.content.description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-gray-500 leading-relaxed mb-5"
                >
                  {ceoContent.content.description}
                </motion.p>
              )}
              {ceoContent.content.quote && (
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-blue-600 italic font-medium"
                >
                  &quot;{ceoContent.content.quote}&quot;
                </motion.blockquote>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
