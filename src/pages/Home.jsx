import Navbar from "../components/Navbar";
import BannerSection from "../components/home/BannerSection";
import TechnologySection from "../components/home/TechnologySection";
import WhatIsSection from "../components/home/WhatIsSection";
import ContactSection from "../components/ContactSection";
import ContactForm from "../components/ContactForm";
import { useState } from "react";
import Modal from "../components/Modal";
import { BackcgroundImage, HomeWrapper } from "../styles/pages/home.style";
import Footer from "../components/Footer";
import { HelmetProvider } from "react-helmet-async";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <HomeWrapper>
      <HelmetProvider>
        {/* Título de la página */}
        <title>Sintética</title>
        {/* Descripción de la página */}
        <meta
          name="description"
          content="Sintética es un laboratorio de síntesis de voces en español rioplatense. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."
        />
        {/* Palabras clave para motores de búsqueda */}
        <meta
          name="keywords"
          content="Clonación de voz, español rioplatense, voice cloning, síntesis de voces, text to speech, voice bots"
        />
        {/* Etiqueta canónica */}
        <meta name="canonical" href="https://www.ejemplo.com/mi-pagina" />
        {/* Título que aparece al compartir en redes sociales */}
        <meta name="og:title" content="Sintética" />
        {/* Descripción */}
        <meta
          name="og:description"
          content="Sintética es un laboratorio de síntesis de voces en español rioplatense. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."
        />
        <meta name="robots" content="index, follow" />
      </HelmetProvider>
      <Navbar />
      <BannerSection openModal={openModal} />
      <BackcgroundImage>
        <TechnologySection />
        <WhatIsSection />
        <ContactSection />
      </BackcgroundImage>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <ContactForm />
        </Modal>
      )}
      <Footer />
    </HomeWrapper>
  );
}

export default Home;
