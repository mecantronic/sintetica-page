import { useTranslation } from 'react-i18next';
import ObjectiveCard from './ObjectiveCard';
import { CardsContainer, Container, IntroText } from './ourObjectives.styles';

function OurObjectives() {
  const { t } = useTranslation(['home']);

  return (
    <Container>
      <IntroText>{t('ourObjectivesSection.resume')}</IntroText>
      <CardsContainer>
        <ObjectiveCard
          to="/VoiceCloning"
          cardTitle={t('ourObjectivesSection.cards.voiceCloning.title')}
          imgSrc="assets/home/card1.svg"
          imgAlt=""
        />
        <ObjectiveCard
          to="/Maintenance"
          cardTitle={t('ourObjectivesSection.cards.ia.title')}
          imgSrc="assets/home/card2.svg"
          imgAlt=""
        />
        <ObjectiveCard
          to="/Maintenance"
          cardTitle={t('ourObjectivesSection.cards.tts.title')}
          imgSrc="assets/home/card3.svg"
          imgAlt=""
        />
      </CardsContainer>
    </Container>
  );
}

export default OurObjectives;
