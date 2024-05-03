import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TtsBanner from '../components/tts/TtsBannerSection';
//import TtsCreate from "../components/tts/TtsCreate";
import Ctatts from '../components/tts/cta/Ctatts';
import { TtsWrapper } from '../styles/pages/TTS.style';
import Section from '../components/section/Section';

function Tts() {
  return (
    <TtsWrapper>
      <Navbar />
      <TtsBanner />
      <Section title={'Probá nuestro TTS de forma gratuita'}>
        <Ctatts />
      </Section>
      {/* <TtsCreate /> */}
      <Footer />
    </TtsWrapper>
  );
}

export default Tts;
