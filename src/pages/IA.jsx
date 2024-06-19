import Navbar from '../components/header/Navbar';
import ContactForm from '../components/ContactForm';
import WhySection from '../components/IA-salud/WhySection';
import MiIdentidadVocal from '../components/IA-salud/MiIdentidadVocal';
import NewsSection from '../components/IA-salud/NewsSection';
import { IaWrapper } from '../styles/pages/ia.style';
import Footer from '../components/footer/Footer';

function IA() {
  return (
    <IaWrapper>
      <Navbar />
      <WhySection />
      <MiIdentidadVocal />
      <NewsSection />
      <ContactForm />
      <Footer />
    </IaWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default IA;
