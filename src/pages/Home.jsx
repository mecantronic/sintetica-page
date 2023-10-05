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

const BackcgroundImage = styled.div`
  padding: 0;
  margin: 0;

  background-image: url("assets/backgrounds/Background3.svg");
  background-size: 40%;
  background-repeat: repeat;
  background-position: top;
`;

function Home() {
  return (
    <HomeWrapper>
      <Navbar />
      <BackcgroundImage>
        <BannerSection />
        <TechnologySection />
        <WhatIsSection />
        <ContactSection id="ContactUs" />
      </BackcgroundImage>
    </HomeWrapper>
  );
}

export default Home;
