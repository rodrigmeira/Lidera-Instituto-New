import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Lidera Instituto",
  description: "Transformando a gestao publica ao qualificar profissionais da educacao e saude",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#f3f6f8] overflow-x-hidden w-full`}
      >
        <Navigation />
        {children}
        <Footer className="bg-white py-16 md:py-24" />
      </body>
    </html>
  );
}
