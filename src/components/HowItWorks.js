"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BiHardHat,
  BiBulb,
  BiOutline,
  BiBook,
  BiBriefcase,
  BiCertification,
} from "react-icons/bi";

const howItWorksContent = {
  heading: {
    title: "Nossas Áreas de Atuação",
    subtitle: "Serviços",
    description:
      "Atuamos em três frentes principais para transformar a gestão pública e privada, oferecendo soluções completas em educação e consultoria. Nossa abordagem integra conhecimento prático e estratégico.",
  },
  steps: [
    {
      number: "01",
      icon: BiBook,
      title: "Educação Pública",
      description:
        "Formação continuada de professores e gestores, Abertura do Ano Letivo, Capacitação de equipes pedagógicas, Desenvolvimento de lideranças educacionais, Projetos educacionais estruturantes.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
    {
      number: "02",
      icon: BiBriefcase,
      title: "Assistência Social",
      description:
        "Cursos de qualificação profissional para usuários, Formação de equipes técnicas (SUAS), Oficinas socioeducativas, Projetos de fortalecimento de vínculos, Desenvolvimento humano para inclusão produtiva.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
    {
      number: "03",
      icon: BiCertification,
      title: "Saúde",
      description:
        "Formação humanizada para equipes de saúde, Comunicação, empatia e atendimento ao público, Desenvolvimento comportamental e emocional.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
  ],
  features: [
    {
      icon: BiHardHat,
      title: "Consultoria Técnica Especializada",
      description:
        "Diagnóstico institucional e humano, Planejamento estratégico educacional, Desenvolvimento de equipes e lideranças, Acompanhamento técnico e pedagógico. Consultoria que sai do papel e chega na prática.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
    {
      icon: BiBulb,
      title: "Programas e Metodologias Exclusivas",
      description:
        "A Vinci desenvolve Programas próprios, com metodologias aplicadas e adaptáveis à realidade local, como: Educação Singular, Comunica+. Esses programas unem conteúdo, prática, comportamento e gestão.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
    {
      icon: BiOutline,
      title: "Eventos Institucionais",
      description:
        "Planejamento e execução de: Conferências, Congressos, Encontros institucionais, Workshops e seminários. Eventos pensados como ferramentas de transformação, não apenas cerimônias.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
  ],
};

const HowItWorks = ({ className }) => {
  return (
    <>
      <section className={`${className}`}>
        <div className="container mx-auto px-4">
          <div className="lg:flex justify-center mb-20 lg:mb-36">
            <div className="w-full lg:w-8/12 lg:flex gap-0 items-center">
              <div className="lg:w-7/12 mb-5 lg:mb-0">
                {howItWorksContent.heading.subtitle && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500"
                  >
                    {howItWorksContent.heading.subtitle}
                  </motion.span>
                )}
                {howItWorksContent.heading.title && (
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
                    {howItWorksContent.heading.title}
                  </motion.h2>
                )}
              </div>

              <div className="lg:w-5/12 self-end">
                {howItWorksContent.heading.description && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.6, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="text-gray-500"
                  >
                    {howItWorksContent.heading.description}
                  </motion.p>
                )}
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 -mb-72 lg:w-10/12 mx-auto">
            {howItWorksContent.steps.map((step, idx) => {
              idx *= 0.2;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: 0.1 }}
                  className="group duration-300 pt-32 pl-10 pr-10 pb-20 bg-white relative overflow-hidden hover:bg-[#061F3D] hover:shadow-2xl"
                >
                  <span className="text-[200px] inline-block z-[1] group-hover:text-white font-semibold absolute -top-[120px] opacity-5 left-0 leading-0">
                    {step.number}
                  </span>
                  <div className="absolute top-10 right-10">
                    <span className="text-3xl text-blue-600 duration-300 transition-all ease-in-out group-hover:text-white">
                      <step.icon />
                    </span>
                  </div>
                  <div className="relative z-40 flex gap-3 items-start">
                    <div className="font-semibold duration-300 transition-all ease-in-out group-hover:text-opacity-50 group-hover:text-white">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-[18px] mb-4 duration-300 transition-all ease-in-out group-hover:text-white">
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-[15px] text-gray-500 mb-7 duration-300 transition-all ease-in-out group-hover:text-white">
                        {step.description}
                      </p>
                      <p>
                        <Link
                          href={step.btn.href}
                          className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-blue-600 duration-300 transition-all ease-in-out group-hover:border-white group-hover:text-white"
                        >
                          {step.btn.label}
                        </Link>
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-72 lg:pt-60 pb-32 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="lg:flex justify-center">
            <div className="w-full lg:w-8/12 flex gap-0 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {howItWorksContent.features.map((feature, idx) => {
                  idx *= 0.2;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: idx, duration: 0.5 },
                      }}
                      viewport={{ once: true }}
                      className="relative z-40 flex gap-3 items-start"
                    >
                        <div>
                            <span className="text-3xl text-white">
                                <feature.icon />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-lg mb-4 text-white">{feature.title}</h3>
                            <p className="leading-relaxed text-white text-[15px] text-opacity-75 mb-7">{feature.description}</p>
                            <p>
                                <Link href={feature.btn.href} className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-white border-opacity-25 text-white transition-all duration-300 ease-in-out hover:border-opacity-100">{feature.btn.label}</Link>
                            </p>
                        </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
