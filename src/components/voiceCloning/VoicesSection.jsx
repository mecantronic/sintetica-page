import {
  AudioItem,
  Container,
  Item,
  ItemText,
  ItemTitle,
  Title,
  VocesContainer,
} from "../../styles/components/voiceCloning/voicesSection.style";

function VoicesSection() {
  return (
    <Container>
      <Title>Nuestras voces</Title>
      <VocesContainer>
        <Item>
          <AudioItem controls>
            <source

              src="audios-voice/fem1.wav"
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

              src="audios-voice/fem1_cloned(enhanced).wav"
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

              src="audios-voice/mas1.wav"
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
              src="audios-voice/mas1_cloned(enhanced).wav"
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
              src="audios-voice/fem2.wav"
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
              src="audios-voice/fem2_cloned(enhanced).wav"
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
              src="audios-voice/mas2.wav"
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

              src="audios-voice/mas2_cloned(enhanced).wav"
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
              src="audios-voice/fem3.wav"
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
              src="audios-voice/fem3_cloned(enhanced).wav"
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
              src="audios-voice/mas3.wav"
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
              src="audios-voice/mas3_cloned(enhanced).wav"
              type="audio/mpeg"
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
