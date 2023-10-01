import styled from "styled-components";
import Navbar from "../components/Navbar";
import BannerSection from "../components/home/BannerSection";
import TechnologySection from "../components/home/TechnologySection";
import WhatIsSection from "../components/home/WhatIsSection";
import ContactSection from "../components/ContactSection";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  min-height: 100vh;
`;

function Home() {
  return (
    <HomeWrapper>
      <Navbar />
      <BannerSection />
      <TechnologySection />
      <WhatIsSection />
      <ContactSection />
    </HomeWrapper>
  );
}

export default Home;
