import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TtsBanner from "../components/tts/TtsBannerSection";
//import TtsCreate from "../components/tts/TtsCreate";
import Ctatts from "../components/tts/cta/Ctatts";
import { TtsWrapper } from "../styles/pages/TTS.style";

function Tts() {
  return (
    <TtsWrapper>
      <Navbar />
      <TtsBanner />
      <Ctatts />
      {/* <TtsCreate /> */}
      <Footer />
    </TtsWrapper>
  );
}

export default Tts;
