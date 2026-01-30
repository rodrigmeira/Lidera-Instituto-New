"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RxInstagramLogo } from "react-icons/rx";
import { SlSocialLinkedin } from "react-icons/sl";

const teamContent = {
  heading: {
    title: "Nossa equipe de especialistas",
    subtitle: "conheca nossa equipe",
    description:
      "Na Vinci temos uma equipe de especialistas altamente qualificados e comprometidos com a missão de ajudar os municípios a alcancar seus objetivos de gestão pública.",
  },
  team: [
    {
      image: "/jovicente.png",
      name: "Jô Vicente",
      role: "Co-Founder",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  ],
};

const Team = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-center mb-20 lg:mb-36">
          <div className="w-full lg:w-8/12 lg:flex gap-7 items-center">
            <div className="lg:w-7/12 mb-5 lg:mb-0">
              {teamContent.heading.subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.0 },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-blue-500 bg-blue-200/30 px-3 py-1.5 rounded-md"
                >
                  {teamContent.heading.subtitle}
                </motion.span>
              )}

              {teamContent.heading.title && (
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
                  {teamContent.heading.title}
                </motion.h2>
              )}
            </div>
            <div className="lg:w-5/12 self-end">
              {teamContent.heading.description && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5, duration: 0.6 },
                  }}
                  viewport={{ once: true }}
                  className="text-gray-500"
                >
                  {teamContent.heading.description}
                </motion.p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:w-7/12 mx-auto">
          {teamContent.team.map((person, idx) => {
            idx *= 0.2;
            return (
              <motion.div
                key={person.name}
                className="bg-white relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: idx, duration: 0.3 },
                }}
                viewport={{ once: true }}
              >
                <Link href="#">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={400}
                    height={400}
                    className="object-cover object-top w-full !max-h-72 !max-w-full"
                  />
                </Link>
                <div className="p-8">
                  <h3 className="mb-3">{person.name}</h3>
                  <p className="text-gray-500 mb-4 uppercase text-[12px] tracking-[1px]">
                    {person.role}
                  </p>
                  <div className="mt-5 flex space-x-5 items-center">
                    {person.instagram && (
                      <Link
                        href={person.instagram}
                        className="duration-300 transition-all ease-in-out hover:opacity-30"
                      >
                        <RxInstagramLogo className="text-lg" />
                      </Link>
                    )}
                    {person.linkedin && (
                      <Link
                        href={person.linkedin}
                        className="duration-300 transition-all ease-in-out hover:opacity-30"
                      >
                        <SlSocialLinkedin className="text-lg" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
