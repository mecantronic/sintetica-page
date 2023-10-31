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
import { Helmet } from "react-helmet";

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
      <Helmet>
        {/* Título de la página */}
        <title>Sintética</title>
        {/* Descripción de la página */}
        <meta
          name="description"
          content="Este es un ejemplo de descripción de la página web para SEO"
        />
        {/* Palabras clave para motores de búsqueda */}
        <meta
          name="keywords"
          content="SEO, etiquetas meta, palabras clave, HTML5"
        />
        {/* Etiqueta canónica */}
        <meta name="canonical" href="https://www.ejemplo.com/mi-pagina" />
        {/* Título que aparece al compartir en redes sociales */}
        <meta name="og:title" content="Mi Página en Open Graph" />
        {/* Descripción */}
        <meta
          name="og:description"
          content="Una descripción especial para Open Graph"
        />
        <meta name="robots" content="index, follow" />

      </Helmet>
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
