import Navbar from "../components/Navbar";
import VoiceBanner from "../components/voiceCloning/VoiceBannerSection";
import VoicesSection from "../components/voiceCloning/VoicesSection";
import ContactSection from "../components/ContactSection";
import { useState } from "react";
import Modal from "../components/Modal";
import ContactForm from "../components/ContactForm";
import { VoiceWrapper } from "../styles/pages/voiceCloning.style";

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
    <VoiceWrapper>
      <Navbar />
      <VoiceBanner openModal={openModal} />
      <VoicesSection />
      <ContactSection />
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <ContactForm />
        </Modal>
      )}
    </VoiceWrapper>
  );
}

export default Home;
