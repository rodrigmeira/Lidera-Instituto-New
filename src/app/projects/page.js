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
            <Projects className="pt-0 pb-52" itemsPerPage={4} />
            <CTA className="py-32 lg:py-32 bg-yellow-600" cta_label="Entre em contato" cta_link="/contact" title="Tem algum projeto em mente?" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
        </>
    )
}

export default page;