import styled from "styled-components";
import Navbar from "../components/Navbar";
import TtsBanner from "../components/tts/TtsBannerSection";
import TtsCreate from "../components/tts/TtsCreate";

const TtsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

function Tts() {
  return (
    <TtsWrapper>
      <Navbar />
      <TtsBanner />
      <TtsCreate />
    </TtsWrapper>
  );
}

export default Tts;
