import {
  Container,
  Details,
  Graphic,
  HeroIMG,
  ResumeDetails,
  TitleDetails,
} from "../../styles/components/tts/ttsBannerSection.style";

function TtsBanner() {
  return (
    <Container>
      <Graphic>
        <HeroIMG src="assets/home/card4.svg" />
      </Graphic>
      <Details>
        <TitleDetails>¡Escuchá tu texto con acento rioplatense!</TitleDetails>
        <ResumeDetails>
          Con nuestro text to speech, podrás escuchar tus textos con el acento
          más auténtico del Río de la Plata. Voces sintéticas que generan
          identidad.
        </ResumeDetails>
      </Details>
    </Container>
  );
}

export default TtsBanner;
