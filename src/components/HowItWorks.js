"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BiHardHat,
  BiBulb,
  BiLayer,
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
      title: "Formações Educacionais",
      description:
        "Capacitação contínua para educadores e gestores, visando a melhoria da qualidade do ensino e a atualização de práticas pedagógicas com metodologias ativas e inovadoras.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
    {
      number: "02",
      icon: BiBriefcase,
      title: "Assessorias e Consultorias Empresariais",
      description:
        "Suporte estratégico para empresas e órgãos públicos, focando em otimização de processos, gestão eficiente, conformidade legal e alcance de resultados sustentáveis.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
    {
      number: "03",
      icon: BiCertification,
      title: "Cursos e Momentos Formativos",
      description:
        "Workshops, palestras e treinamentos práticos desenvolvidos sob medida para desenvolver competências específicas, soft skills e promover o crescimento profissional das equipes.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
  ],
  features: [
    {
      icon: BiHardHat,
      title: "Soluções Personalizadas",
      description:
        "Desenvolvemos soluções sob medida com base nos dados coletados, criando planos de ação eficientes que priorizam a melhoria da gestão e o impacto social.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
    {
      icon: BiBulb,
      title: "Equipe Especializada",
      description:
        "Contamos com profissionais qualificados e experientes, comprometidos em entregar resultados concretos e impactantes para a gestão pública.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
    {
      icon: BiOutline,
      title: "Tecnologia Inovadora",
      description:
        "Utilizamos ferramentas modernas e práticas baseadas em dados para garantir que as soluções sejam precisas e eficientes nos municípios.",
      btn: {
        href: "#",
        label: "Saiba Mais",
      },
    },
    {
      icon: BiLayer,
      title: "Acompanhamento Contínuo",
      description:
        "Monitoramos os resultados e oferecemos suporte constante para assegurar que os objetivos sejam alcançados com excelência e eficácia.",
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
                  className="group duration-300 pt-32 pl-10 pr-10 pb-20 bg-white relative overflow-hidden hover:bg-[#D29F46] hover:shadow-2xl"
                >
                  <span className="text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5 left-0 leading-0">
                    {step.number}
                  </span>
                  <div className="absolute top-10 right-10">
                    <span className="text-3xl text-yellow-600 duration-300 transition-all ease-in-out group-hover:text-white">
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
                          className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-yellow-600 duration-300 transition-all ease-in-out group-hover:border-white group-hover:text-white"
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
      <section className="pt-72 lg:pt-60 pb-32 bg-yellow-600">
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
