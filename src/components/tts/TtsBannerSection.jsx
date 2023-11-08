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
        <HeroIMG src="assets/voiceCloning/bannerVoice.svg" />
      </Graphic>
      <Details>
        <TitleDetails>Ultricies integer quis auctor elit sed</TitleDetails>
        <ResumeDetails>
          Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices
          vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra
          vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet
          bibendum enim facilisis gravida neque convallis a.
        </ResumeDetails>
        {/* <Right>
          <BTN  >
          <Details2Button buttonText='Cloná tu voz ' rightArrow={true} />
          </BTN>
        </Right> */}
      </Details>
    </Container>
  );
}

export default TtsBanner;
