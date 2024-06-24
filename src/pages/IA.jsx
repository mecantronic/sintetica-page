import ContactForm from '../components/ContactForm';
import WhySection from '../components/IA-salud/WhySection';
import MiIdentidadVocal from '../components/IA-salud/MiIdentidadVocal';
import NewsSection from '../components/IA-salud/NewsSection';
import { IaWrapper } from '../styles/pages/ia.style';

function IA() {
  return (
    <IaWrapper>
      <WhySection />
      <MiIdentidadVocal />
      <NewsSection />
      <ContactForm />
    </IaWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default IA;
