"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import ReactPaginate from "react-paginate";

import { motion } from "framer-motion";

const Items = ({ currentItems }) => {
    return (
        <>
            {currentItems && currentItems.map((project, index) => {
                index *= 0.05;
                return (
                    <motion.div
                        className="bg-white relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: index, duration: 0.3 },
                        }}
                        viewport={{ once: true }}
                        key={index}>
                        <Link href={project.url} className="relative block overflow-hidden">
                            <Image
                                src={project.image}
                                alt="liderainstituto.com"
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
                                <Link href={project.url} className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-blue-600">
                                    Leia mais
                                </Link>
                            </p>
                        </div>
                    </motion.div>
                )
            })}
        </>
    )
};

const Projects = ({ className, itemsPerPage }) => {
    const items = allProjects.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [clickPaginate, setClickPaginate] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));

        if (clickPaginate === true) {
            ref.current?.scrollIntoView({ top: -50, behavior: "smooth" });
            setClickPaginate(false);
        }
    }, [itemOffset, itemsPerPage, items, clickPaginate]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setClickPaginate(true);
        setItemOffset(newOffset);
    };

    if (!items) return null;
    return (
        <section className={`${className}`} ref={ref}>
            <div className="container px-4 mx-auto">
                <div className="lg:w-10/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Items currentItems={currentItems} />
                </div>

                <div className="lg:w-10/12 mx-auto flex flex-wrap justify-center relative z-10">
                    <ReactPaginate
                        nextLabel="Próximo"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        previousLabel="Voltar"
                        pageClassName="block"
                        pageLinkClassName="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:shadow-2xl"
                        previousClassName="block"
                        previousLinkClassName="w-auto px-3 md:px-5 rounded-none cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-blue-600 py-4 text-white hover:bg-white hover:text-blue-600 hover:shadow-2xl"
                        nextClassName="block"
                        nextLinkClassName="w-auto px-3 md:px-5 rounded-none cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-blue-600 py-4 text-white hover:bg-white hover:text-blue-600 hover:shadow-2xl"
                        breakLabel="..."
                        breakClassName="block"
                        breakLinkClassName="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center text-gray-500"
                        containerClassName="flex flex-wrap justify-center items-center gap-2"
                        activeClassName=""
                        activeLinkClassName="!bg-white !text-blue-600 shadow-2xl"
                        disabledClassName="opacity-50"
                        disabledLinkClassName="!bg-gray-300 !text-gray-500 cursor-not-allowed hover:bg-gray-300 hover:text-gray-500 hover:shadow-none"
                        pageCount={pageCount}
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;