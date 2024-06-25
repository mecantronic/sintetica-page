import { useTranslation } from 'react-i18next';
import ServiceCard from './ServiceCard';
import {
  BannerImg,
  Banner,
  Container,
  Details,
  BannerResume,
  Services,
  BannerTitle,
} from './servicesSection.style';

function ServicesSection() {
  const { t } = useTranslation(['home']);

  return (
    <Container>
      <Banner>
        <BannerImg src="assets/home/card5.svg" alt="globos" />
        <Details>
          <BannerTitle>{t('servicesSection.banner.title')}</BannerTitle>
          <BannerResume>
            {t('servicesSection.banner.resume')}
            <strong>{t('servicesSection.banner.strokeResume')}</strong>
          </BannerResume>
        </Details>
      </Banner>
      <Services>
        <ServiceCard
          to="/maintenance"
          imgSrc="assets/home/card4.svg"
          imgAlt="text-icon"
          cardTitle={t('servicesSection.cards.tts.title')}
          resume={t('servicesSection.cards.tts.resume')}
        />
        <ServiceCard
          to="/voice-cloning"
          imgSrc="assets/voiceCloning/bannerVoice.svg"
          imgAlt="text-icon"
          cardTitle={t('servicesSection.cards.voiceCloning.title')}
          resume={t('servicesSection.cards.voiceCloning.resume')}
        />

        <ServiceCard
          to="/maintenance"
          imgSrc="assets/home/card6.svg"
          imgAlt="text-icon"
          cardTitle={t('servicesSection.cards.ai.title')}
          resume={t('servicesSection.cards.ai.resume')}
        />
        <ServiceCard
          to="/maintenance"
          imgSrc="assets/home/card7.svg"
          imgAlt="text-icon"
          cardTitle={t('servicesSection.cards.toolkit.title')}
          resume={t('servicesSection.cards.toolkit.resume')}
        />
      </Services>
    </Container>
  );
}

export default ServicesSection;
