import {
  Container,
  Details,
  Graphic,
  HeroIMG,
  ResumeDetails,
  TitleDetails,
} from "../../styles/components/ia-salud/IABannerSection.style";

function IABanner() {
  return (
    <Container>
      <Graphic>
        <HeroIMG src="assets/home/card2.svg" />
      </Graphic>
      <Details>
        <TitleDetails>Inclusión y accesibilidad en nuestro idioma</TitleDetails>
        <ResumeDetails>
          En Sintética creemos que la tecnología debe ser accesible para toda la
          sociedad. Por eso, desarrollamos soluciones de text to speech y voice
          cloning que promueven la accesibilidad y la autonomía de personas con
          discapacidad.
        </ResumeDetails>
      </Details>
    </Container>
  );
}

export default IABanner;
