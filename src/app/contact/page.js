import React from 'react'
import Hero from '@/components/about/Hero'
import ContactForm from '@/components/ContactForm'

const page = () => {
    return (
        <>
            <Hero className="pt-52 pb-24" title="Contato" subTitle="Entre em contato" />
            <ContactForm />
        </>
    )
}

export default page