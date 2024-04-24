import { Container, Graphic, HeroIMG, Details, TitleDetails, ResumeDetails, Right, BTN, ContentContainer } from "./herosection.style";
import Details2Button from "../buttons/Details2Button";
import { useTranslation } from "react-i18next";

  function HeroSection({ keyName, handleClick}) {
    
    const { t } = useTranslation("data")

    const contentVoiceCloning = {
        img: "assets/voiceCloning/bannerVoice.svg",
        textTitle: t('voiceCloning.title'),
        textDescription: t('voiceCloning.description'),
        textBtn: t('voiceCloning.button'),
    }

    const contentExperienceTTS = {
        img: "assets/home/card4.svg",
        textTitle: t('experienceTTS.title'),
        textDescription: t('experienceTTS.description'),
        textBtn: t('experienceTTS.button')
    }

    const contentMaintenance = {
        img: "assets/backgrounds/maintenance.svg",
        textTitle: t('maintenance.title'),
        textDescription: t('maintenance.description'),
        textBtn: t('maintenance.button'),
    }

    const getContentStyle = (key) => {
        switch (key) {
          case 'contentExperienceTTS':
            return contentExperienceTTS;
          case 'contentVoiceCloning':
            return contentVoiceCloning;
          case 'contentMaintenance':
            return contentMaintenance;
          default:
            return {};
        }
      };

    const content = getContentStyle(keyName);

    return (
      <Container>
      <ContentContainer>
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
      </ContentContainer>
    </Container>
    );
  }
  
  export default HeroSection;
  