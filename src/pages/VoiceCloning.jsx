import styled from "styled-components";
import Navbar from "../components/Navbar";
import VoiceBanner from "../components/voiceCloning/VoiceBannerSection";
import VoicesSection from "../components/voiceCloning/VoicesSection";
import ContactSection from "../components/ContactSection";
import { useState } from "react";
import Modal from "../components/Modal";
import ContactForm from "../components/ContactForm";

const VoiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

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
      <VoiceBanner openModal={openModal}/>
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
