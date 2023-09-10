import styled from "styled-components";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import VoiceBanner from "../components/voiceCloning/VoiceBannerSection";
import VoicesSection from "../components/voiceCloning/VoicesSection";
import ContactSection from "../components/ContactSection";


const VoiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${theme.colors.background[1]};
`;

function Home() {
  return (
    <VoiceWrapper>
        <Navbar />
        <VoiceBanner />
        <VoicesSection />
        <ContactSection />
    </VoiceWrapper>
  );
}

export default Home;