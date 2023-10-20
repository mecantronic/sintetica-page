import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.section`
  background-color: ${theme.colors.white};
  color: ${theme.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: ${theme.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${theme.bp.small}) {
    padding-top: 50px;
  }
`;

const Graphic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(90vw / 2);

  @media (max-width: ${theme.bp.large}) {
    width: auto;
  }
`;

const HeroIMG = styled.img`
  width: 500px;
  @media (max-width: ${theme.bp.large}) {
    width: 500px;
  }
  @media (max-width: ${theme.bp.medium}) {
    width: 450px;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 300px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(90vw / 2);

  @media (max-width: ${theme.bp.large}) {
    width: 80%;
  }
`;

const TitleDetails = styled.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${theme.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  @media (max-width: ${theme.bp["x-small"]}) {
    font-size: 40px;
  }
`;
const ResumeDetails = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${theme.colors.gray};
`;

/* const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const BTN = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${theme.bp.medium}) {
    margin-right: 50px;
  }
`; */

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
