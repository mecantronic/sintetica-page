import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import WhySection from "../components/IA-salud/WhySection";
import MiIdentidadVocal from "../components/IA-salud/MiIdentidadVocal";
import NewsSection from "../components/IA-salud/NewsSection";
import { IaWrapper } from "../styles/pages/ia.style";

function IA() {
  return (
    <IaWrapper>
      <Navbar />
      <WhySection />
      <MiIdentidadVocal />
      <NewsSection />
      <ContactSection />
    </IaWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default IA;
