import Navbar from '../components/header/Navbar';
import VoiceBanner from '../components/voiceCloning/VoiceBannerSection';
import VoicesSection from '../components/voiceCloning/VoicesSection';
import ContactForm from '../components/ContactForm';
import { VoiceWrapper } from '../styles/pages/voiceCloning.style';
import Footer from '../components/footer/Footer';
import Section from '../components/section/Section';

function Home() {
  return (
    <VoiceWrapper>
      <Navbar />
      <VoiceBanner />
      <Section title={'Nuestras voces'}>
        <VoicesSection />
      </Section>
      <ContactForm />
      <Footer />
    </VoiceWrapper>
  );
}

export default Home;
