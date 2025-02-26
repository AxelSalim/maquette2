'use client';

import "./globals.css";
import { poppins } from "./page/fonts";
import  { useEffect, useState } from "react";
import { ThemeModeScript } from "flowbite-react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


const Accueil: React.FC<{ childrens: React.ReactNode }> = ({ childrens }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOutLoading, setFadeOutLoading] = useState(false);


  if (loading) {
    return (
      <html>
        <head>
          <title>GUNIVERS</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
          <ThemeModeScript />
        </head>

        <body className={`${poppins.className}`}>
          <div className={`loading-screen ${fadeOutLoading ? 'fade-out' : ''}`}>
            <span className="loader"></span>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html>
      <head>
        <title>BrainWave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
        <ThemeModeScript />
      </head>

      <body className={`content ${poppins.className}`}>
        <section className="relative">
            <Header />
        </section>

        <section className="">
            { childrens }
        </section>

        <section className="bg-[#fdfcff] pt-20">
            <Footer />
        </section>
      </body>
    </html>
  );
};

export default Accueil;

