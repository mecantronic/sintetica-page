import styled from "styled-components";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import BannerSection from "../components/home/BannerSection";
import TechnologySection from "../components/home/TechnologySection";
import WhatIsSection from "../components/home/WhatIsSection";
import HeroSection from "../components/home/MisionSection";
import ContactSection from "../components/ContactSection";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background: linear-gradient(
    to top,
    ${theme.colors.prueba3} 0%,
    
    ${theme.colors.prueba2} 100%
  );
`;

function Home() {
  return (
    <HomeWrapper>
      <Navbar />
      <BannerSection />
      <TechnologySection />
      <WhatIsSection />
      <HeroSection />
      <ContactSection />
    </HomeWrapper>
  );
}

export default Home;
