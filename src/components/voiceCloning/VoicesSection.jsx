import styled from "styled-components";
import theme from "../../styles/theme";
import AudioPlayer from "../audioPlayer/AudioPlayer";
import audioooo from "../../../public/audios-voice/mas2.wav"

const Container = styled.section`
  background-color: ${theme.colors.white};
  color: ${theme.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: ${theme.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${theme.bp.small}) {
    padding-top: 80px;
  }
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${theme.colors.lavenderfloral};
  background-color: ${theme.colors.lavender};
`;

const VocesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
  max-width: 90vw;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${theme.colors.seasalt};
  border-radius: 15px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);
`;

const AudioItem = styled.audio`
  width: 330px;
`;

const ItemTitle = styled.h4`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: ${theme.colors.raisinblack};
  width: 100%;
`;
const ItemText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.electricindigo};
  width: 100%;
`;

function VoicesSection() {
  return (
    <Container>
      <Title>Nuestras voces</Title>
      <VocesContainer>
        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/fem1.wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Ana</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/fem1_cloned (enhanced).wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Ana</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/mas1.wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Franco</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/mas1_cloned (enhanced).wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Franco</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/fem2.wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Paula</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/fem2_cloned (enhanced).wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Paula</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/mas2.wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Darío</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/mas2_cloned (enhanced).wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Darío</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/fem3.wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Luciana</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/fem3_cloned (enhanced).wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Luciana</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/mas3.wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Hernán</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="../../../public/audios-voice/mas3_cloned (enhanced).wav"
              type="audio/mpeg"
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Hernán</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>
        <Item>
          <AudioPlayer light={true} audioSrc={audioooo} />
          <ItemTitle>Hernán</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>
      </VocesContainer>
    </Container>
  );
}

export default VoicesSection;
