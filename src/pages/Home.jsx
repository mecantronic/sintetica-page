import styled from "styled-components";
import Navbar from "../components/Navbar";
import BannerSection from "../components/home/BannerSection";
import TechnologySection from "../components/home/TechnologySection";
import WhatIsSection from "../components/home/WhatIsSection";
import ContactSection from "../components/ContactSection";
import ContactForm from "../components/ContactForm";
import { useState } from "react";
import Modal from "../components/Modal";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  min-height: 100vh;
`;

const BackcgroundImage = styled.div`
  padding: 0;
  margin: 0;

  background-image: url("assets/backgrounds/Background3.svg");
  background-size: 40%;
  background-repeat: repeat;
  background-position: top;
`;

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <HomeWrapper>
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
    </HomeWrapper>
  );
}

export default Home;
