import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TtsBanner from "../components/tts/TtsBannerSection";
import TtsCreate from "../components/tts/TtsCreate";
import { TtsWrapper } from "../styles/pages/TTS.style";

function Tts() {
  return (
    <TtsWrapper>
      <Navbar />
      <TtsBanner />
      <TtsCreate />
      <Footer />
    </TtsWrapper>
  );
}

export default Tts;