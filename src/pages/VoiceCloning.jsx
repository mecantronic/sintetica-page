import VoiceBanner from '../components/voiceCloning/VoiceBannerSection';
import VoicesSection from '../components/voiceCloning/VoicesSection';
import ContactForm from '../components/ContactForm';
import { VoiceWrapper } from '../styles/pages/voiceCloning.style';
import Section from '../components/section/Section';

function Home() {
  return (
    <VoiceWrapper>
      <VoiceBanner />
      <Section title={'Nuestras voces'}>
        <VoicesSection />
      </Section>
      <ContactForm />
    </VoiceWrapper>
  );
}

export default Home;
