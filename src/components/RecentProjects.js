"use client";
import React from "react";
import { motion } from "framer-motion";
import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import Image from "next/image";

const recentProjectsContent = {
  heading: {
    title: "Projetos em Destaque",
    subtitle: "Nossos Projetos",
    description:
      "Explore nossos projetos mais recentes e veja como estamos transformando a gestão pública através de soluções inovadoras e desenvolvimento humano.",
  },
};

const ProjectCard = ({ index, project }) => {
  index *= 0.05;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="bg-white relative overflow-hidden group"
    >
      <Link href={project.url} className="relative block overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1064}
          height={644}
          className="object-cover object-center h-[200px] duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
        />
      </Link>

      <div className="p-8">
        <span className="block mb-3 text-gray-500 uppercase text-[12px] tracking-[1px]">{project.role} • {project.year}</span>
        <h3 className="mb-4">
          <Link href={project.url} className="text-lg leading-none">
            {project.title}
          </Link>
        </h3>
        <p>
          <Link
            href={project.url}
            className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-blue-600"
          >
            Leia Mais
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

const RecentProjects = ({ className }) => {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <>
      <section className={`${className}`}>
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-center mb-24">
            <div className="w-full lg:w-8/12 lg:flex gap-0 items-center">
              <div className="lg:w-7/12">
                {recentProjectsContent.heading.subtitle && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.05, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500"
                  >
                    {recentProjectsContent.heading.subtitle}
                  </motion.span>
                )}
                {recentProjectsContent.heading.description && (
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.1, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="text-2xl lg:text-4xl mb-4 lg:mb-0"
                  >
                    {recentProjectsContent.heading.title}
                  </motion.h2>
                )}
              </div>
              <div className="lg:w-5/12 self-end">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.15, duration: 0.5 },
                  }}
                  className="text-gray-500"
                >
                  {recentProjectsContent.heading.description}
                </motion.p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-10/12 mx-auto">
            {projects.slice(0, 3).map((project, idx) => (
              <ProjectCard key={idx} index={idx} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProjects;
