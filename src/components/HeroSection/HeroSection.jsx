import { Container, Graphic, HeroIMG, Details, TitleDetails, ResumeDetails, Right, BTN } from "./herosection.style";
import Details2Button from "../buttons/Details2Button";
import data from "./keysHeroSection";

  function HeroSection({ keyName, handleClick}) {
    
    const getContentStyle = (key) => {
        switch (key) {
          case 'contentExperienceTTS':
            return data.contentExperienceTTS;
          case 'contentVoiceCloning':
            return data.contentVoiceCloning;
          case 'contentMaintenance':
            return data.contentMaintenance;
          default:
            return {};
        }
      };

    const content = getContentStyle(keyName);

    return (
        <Container>
          <Graphic>
            <HeroIMG src={content.img} />
          </Graphic>
          <Details>
          <TitleDetails>{content.textTitle}</TitleDetails>
          <ResumeDetails>{content.textDescription}</ResumeDetails>
            <Right>
                <BTN>
                <Details2Button
                  buttonText={content.textBtn}
                  rightArrow={true}
                  handleClick={handleClick}
                />
              </BTN>
            </Right>
          </Details>
        </Container>
    );
  }
  
  export default HeroSection;
  