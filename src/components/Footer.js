import React from "react";
import Link from "next/link";
import Image from "next/image";


const footerContent = {
  footerLinks: [
    {
      heading: "Soluções",
      links: [
        { href: "#", label: "Educação", badge: "New" },
        { href: "#", label: "Saúde" },
        { href: "#", label: "Consultoria" },
        { href: "#", label: "Treinamentos" },
      ],
    },
    {
      heading: "Institucional",
      links: [
        { href: "#", label: "Sobre" },
        { href: "#", label: "Missão" },
        { href: "#", label: "Time", badge: "New" },
        { href: "#", label: "Contato" },
        { href: "#", label: "Carreiras", badge: "Hot" },
      ],
    },
    {
      heading: "Recursos",
      links: [
        { href: "#", label: "Blog" },
        { href: "#", label: "Casos" },
        { href: "#", label: "FAQ" },
        { href: "#", label: "Docs", badge: "Updated" },
        { href: "#", label: "Guia" },
      ],
    },
  ],
};

const CopyRight = () => {
    return (
        <div className="pt-7 mt-7 md:mt-14 md:pt-14 border-t border-t-gray-100 text-center text-gray-500">
            <p className="text-center items-center mx-auto text-sm">
                &copy; {new Date().getFullYear()} <span className="font-semibold text-yellow-600">Vinci</span>. Todos os direitos reservados
            </p>
        </div>
    )
}

const Footer = ({ className }) => {
  return (
    <footer className={`${className} overflow-hidden w-full h-full relative`}>
      <div className="container px-4 mx-auto z-20 relative">
        <div className="md:flex">
          <div className="md:w-4/12 mb-10 md:mb-0">
            <Link href="/" className="text-[22px] text-gray-700 font-bold">
              <Image src="/Logo.png" alt="Logo" width={150} height={150} />
            </Link>
          </div>

          <div className="md:w-8/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {footerContent.footerLinks.map((item, idx) => (
                <div className="mb-10 md:mb-0" key={item.heading}>
                  <h3 className="text-gray-800 mb-3">{item.heading}</h3>
                  <ul className="list-none">
                    {item.links.map((link, idx) => (
                      <li className="mb-2" key={link.label}>
                        <Link
                          href={link.href}
                          className={`${
                            link.badge ? "flex gap-2 items-center" : ""
                          } text-gray-500 duration-300 transition-all ease-in-out hover:text-yellow-600
                                    `}
                        >
                          {link.badge ? (
                            <>
                              <span>{link.label}</span>
                              <span className="py-0.5 px-2 rounded-full bg-yellow-100 text-[10px] text-yellow-600 font-semibold">
                                {link.badge}
                              </span>
                            </>
                          ) : (
                            link.label
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
