import React from "react";
import Hero from "@/components/about/Hero";
import Subscribe from "@/components/Subscribe";

export const metadata = {
    title: "Blog - Vinci",
};

const page = () => {
    return (
        <>
            <Hero className="pt-52 pb-24" title="Atualizações Recentes" subTitle="Nosso Blog" />
            <section className="pt-0 pb-52">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-2xl lg:text-4xl text-gray-400 font-light">Novidades em breve!</h2>
                </div>
            </section>
            <Subscribe className="bg-blue-600 py-16 lg:py-32 pt-64" />
        </>
    )
}

export default page;