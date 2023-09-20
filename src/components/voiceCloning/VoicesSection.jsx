import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.section`
  background-color: ${theme.colors.background[1]};
  color: ${theme.colors.primary};
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
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.detail1[1]};
  letter-spacing: 1px;
`;

const VocesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${theme.colors.background[3]};
  border-radius: 15px;
`;

const AudioItem = styled.audio`
  width: 330px;
`;

const ItemTitle = styled.h4`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
`;
const ItemText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

function VoicesSection() {
  return (
    <Container>
      <Title>*** Nuestras voces ***</Title>
      <VocesContainer>
        <Item>
          <AudioItem controls>
            <source src='../../../public/audios-voice/fem1.wav' type='audio/mpeg' />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Ana</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src='../../../public/audios-voice/fem1_cloned (enhanced).wav'
              type='audio/mpeg'
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Ana</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source src='../../../public/audios-voice/mas1.wav' type='audio/mpeg' />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Franco</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src='../../../public/audios-voice/mas1_cloned (enhanced).wav'
              type='audio/mpeg'
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Franco</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source src='../../../public/audios-voice/fem2.wav' type='audio/mpeg' />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Paula</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src='../../../public/audios-voice/fem2_cloned (enhanced).wav'
              type='audio/mpeg'
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Paula</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source src='../../../public/audios-voice/mas2.wav' type='audio/mpeg' />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Darío</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src='../../../public/audios-voice/mas2_cloned (enhanced).wav'
              type='audio/mpeg'
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Darío</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source src='../../../public/audios-voice/fem3.wav' type='audio/mpeg' />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Luciana</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src='../../../public/audios-voice/fem3_cloned (enhanced).wav'
              type='audio/mpeg'
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Luciana</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source src='../../../public/audios-voice/mas3.wav' type='audio/mpeg' />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Hernán</ItemTitle>
          <ItemText>Voz Real</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src='../../../public/audios-voice/mas3_cloned (enhanced).wav'
              type='audio/mpeg'
            />
            Tu navegador no soporta la reproducción de audio.
          </AudioItem>
          <ItemTitle>Hernán</ItemTitle>
          <ItemText>Voz AI</ItemText>
        </Item>
      </VocesContainer>
    </Container>
  );
}

export default VoicesSection;
