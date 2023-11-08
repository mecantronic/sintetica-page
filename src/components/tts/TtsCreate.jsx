import { Container, FileSection, Left, OptionSection, TextSection, VewPort } from "../../styles/components/tts/ttsCreate.style";
import AudioPlayer from "../audioPlayer/AudioPlayer";



function TtsCreate() {
  
  return (
    <VewPort>
      <Container>
        <Left>
          <FileSection>
            <AudioPlayer light={true} audioSrc={"/"} />
          </FileSection>
          <TextSection></TextSection>
        </Left>
        <OptionSection />
      </Container>
    </VewPort>
  );
}

export default TtsCreate;
