"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../../public/img-square-1-min.jpg";
import img2 from "../../../public/img-square-2-min.jpg";
import img3 from "../../../public/img-square-3-min.jpg";
import img4 from "../../../public/img-square-4-min.jpg";
import img5 from "../../../public/img-square-5-min.jpg";

import post1 from "../../../public/post-1-min.jpg";
import post2 from "../../../public/post-2-min.jpg";

const storyContent = {
  column1: {
    imgs: [
      {
        img: img5,
        alt: "Brainstorming",
        width: 1188,
        height: 1413,
        tailwindClass: "h-56 lg:h-96",
      },
      {
        img: img1,
        alt: "Woman",
        width: 1188,
        height: 1413,
      },
    ],
  },
  column2: {
    imgs: [
      {
        img: img2,
        alt: "Meeting",
        width: 1188,
        height: 1413,
        tailwindClass: "h-48 lg:h-64",
      },
      {
        img: post2,
        alt: "White curvy",
        width: 1188,
        height: 1413,
        tailwindClass: "h-56 lg:h-64",
      },
      {
        img: img4,
        alt: "White curvy",
        width: 1188,
        height: 1413,
        tailwindClass: "h-56 lg:h-96",
      },
    ],
  },
  column3: {
    imgs: [
      {
        img: post1,
        alt: "Building",
        width: 1188,
        height: 1413,
      },
      {
        img: img3,
        alt: "Man writing",
        width: 1188,
        height: 1413,
      },
    ],
  },
  storyText: {
    heading: "Transformando desafios em conquistas.",
    p1: "Com 21 anos de experiência, o Lidera Instituto é uma empresa dedicada a transformar o mercado público e privado por meio da educação corporativa. Acreditamos que a capacitação é o caminho para criar uma gestão mais eficiente e estratégica, tanto para órgãos públicos quanto para empresas privadas.",
    p2: "No setor público, atuamos qualificando servidores para aprimorar processos e implementar soluções inovadoras que gerem mais eficiência e impacto positivo na administração pública. No setor privado, capacitamos empresas para vender ao governo, desmistificando os processos licitatórios e ampliando suas chances de sucesso no mercado público.",
    p3: "Com quase duas décadas de atuação, somos movidos pelo propósito de facilitar o acesso a conhecimento prático e relevante, promovendo oportunidades de crescimento para nossos clientes e contribuindo para o desenvolvimento sustentável da sociedade.",
    signature: "/Bill_Smith_Signature.svg",
    name: "Daniella Interaminense",
    role: "CEO & Co-Founder",
  },
};

const Story = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="md:flex w-full md:w-10/12 mx-auto items-stretch md:gap-7">
          <div className="md:w-4/12 self-center space-y-7 mb-7 md:mb-0">
            {storyContent.column1.imgs.map((item, idx) => {
              idx *= 0.5;
              return (
                <motion.div
                  key={`column1-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: idx,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${
                      item.tailwindClass ? item.tailwindClass : ""
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="md:w-4/12 space-y-7 mb-7 md:mb-0">
            {storyContent.column2.imgs.map((item, idx) => {
              idx *= 0.5;
              return (
                <motion.div
                  key={`column2-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: idx,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${
                      item.tailwindClass ? item.tailwindClass : ""
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="md:w-4/12 self-center space-y-7">
            {storyContent.column3.imgs.map((item, idx) => {
              idx *= 0.5;
              return (
                <motion.div
                  key={`column3-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: idx,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${
                      item.tailwindClass ? item.tailwindClass : ""
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.8,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="lg:flex flex-col mt-32 text-left w-full lg:w-6/12 mx-auto"
        >
          {storyContent.storyText.heading && (
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-5">
              {storyContent.storyText.heading}
            </h2>
          )}
          {storyContent.storyText.p1 && (
            <p className="leading-relaxed text-gray-500 mb-7">
              {storyContent.storyText.p1}
            </p>
          )}
          {storyContent.storyText.p2 && (
            <p className="leading-relaxed text-gray-500 mb-10">
              {storyContent.storyText.p2}
            </p>
          )}
          {storyContent.storyText.p3 && (
            <p className="leading-relaxed text-gray-500 mb-10">
              {storyContent.storyText.p3}
            </p>
          )}

          <p>
            <Image
              src={storyContent.storyText.signature}
              alt={storyContent.storyText.name}
              width={338}
              height={113}
              className="w-48 block mb-2"
            />
            <strong className="block mb-2 text-gray-800 font-medium">
              {storyContent.storyText.name + " "}
              <span className="text-gray-400">
                {storyContent.storyText.role}
              </span>
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
