"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactForm = ({ className }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
            viewport={{ once: true }}
            className={`${className}`}
        >
            <div className="container px-4 mx-auto">
                <div className="lg:flex items-stretch mb-32">
                    <div className="lg:w-6/12 flex-1">
                        <Image
                            src="/project-4-min.jpg"
                            width={1000}
                            height={100}
                            alt="Image"
                            className="object-cover object-center max-w-full h-full bg-white"
                        />
                    </div>
                    <div className="lg:w-6/12 flex-1">
                        <form className="p-14 bg-white h-full">
                            <h2 className="text-gray-800 mb-4 text-3xl">Entre em contato</h2>
                            <p className="text-gray-500 mb-6">
                                Entre em contato agora e transforme sua gestão com o Lidera Instituto!
                            </p>
                            <div className="flex space-x-5">
                                <div className="w-6/12 mb-6">
                                    <label htmlFor="firstname" className="mb-2 block text-gray-600 text-base">
                                        Nome
                                    </label>
                                    <input type="text" className="rounded-0 appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-orange-600 block w-full sm:text-sm focus:ring-1 outline-gray-300" id="firstname" />
                                </div>
                                <div className="w-6/12 mb-6">
                                    <label htmlFor="lastname" className="mb-2 block text-gray-600 text-base">
                                        Sobrenome
                                    </label>
                                    <input type="text" className="rounded-0 appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-orange-600 block w-full sm:text-sm focus:ring-1 outline-gray-300" id="lastname"/>
                                </div>
                            </div>
                                <div className="block mb-6">
                                    <label htmlFor="email" className="mb-2 block text-gray-600 text-base">
                                        E-mail
                                    </label>
                                    <input type="text" className="rounded-0 appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-orange-600 block w-full sm:text-sm focus:ring-1 outline-gray-300" id="email"/>
                                </div>
                                <div className="block mb-6">
                                    <label htmlFor="phone" className="mb-2 block text-gray-600 text-base">
                                        Telefone
                                    </label>
                                    <input type="text" className="rounded-0 appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-orange-600 block w-full sm:text-sm focus:ring-1 outline-gray-300" id="phone"/>
                                </div>
                                <div className="block mb-6">
                                    <label htmlFor="message" className="mb-2 blok text-gray-600 text-base">
                                        Mensagem
                                    </label>
                                    <textarea name="" id="message" cols="30" rows="7" className="rounded-0 appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-orange-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"/>
                                </div>
                                <div className="block mb-6">
                                    <input type="submit" className="cursor-pointer w-full block transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-orange-600 py-4 px-5 text-white hover:bg-white hover:text-orange-600 hover:shadow-2xl" value="Enviar mensagem"/>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default ContactForm;