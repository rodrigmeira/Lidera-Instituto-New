import React from "react";
import Hero from "@/components/about/Hero";
import Posts from "@/components/blog/Posts";
import Subscribe from "@/components/Subscribe";

export const metadata = {
    title: "Blog - Vinci",
};

const page = () => {
    return (
        <>
            <Hero className="pt-52 pb-24" title="Atualizações Recentes" subTitle="Nosso Blog" />
            <Posts className="pt-0 pb-52" itemsPerPage={6} />
            <Subscribe className="bg-blue-600 py-16 lg:py-32 pt-64" />
        </>
    )
}

export default page;