import styled from "styled-components";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";

import ContactSection from "../components/ContactSection";
import WhySection from "../components/IA-salud/WhySection";
import MiIdentidadVocal from "../components/IA-salud/MiIdentidadVocal";
import NewsSection from "../components/IA-salud/NewsSection";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${theme.colors.background[1]};
`;

function IA() {
  return (
    <HomeWrapper>
      <Navbar />
      <WhySection />
      <MiIdentidadVocal />
      <NewsSection />
      <ContactSection />
    </HomeWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default IA;
