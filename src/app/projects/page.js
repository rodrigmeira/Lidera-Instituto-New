import React from 'react'
import Link from 'next/link';
import Hero from '@/components/about/Hero';
import Projects from '@/components/projects/Projects';
import CTA from '@/components/CTA';
import Image from 'next/image';

export const metadata = {
    title: "Projetos - Vinci",
};

function page() {
    return (
        <>
            <Hero className="pt-52 pb-24" title="Projetos" subTitle="Conheça nossos projetos" />
            <Projects className="pt-0 pb-52" itemsPerPage={6} />
            <CTA className="py-32 lg:py-32 bg-blue-600" cta_label="Vamos conversar!" cta_link="/contact" title="Quer transformar sua ideia em realidade?" description="Conte com a Vinci para criar soluções únicas, inovadoras e feitas sob medida para o seu negócio. Fale com nossa equipe e dê o primeiro passo rumo ao sucesso." />
        </>
    )
}

export default page;