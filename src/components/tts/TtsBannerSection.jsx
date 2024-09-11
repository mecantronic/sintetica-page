import { useTranslation } from 'react-i18next';
import HeroSection from '../shared/HeroSection/HeroSection';

function TtsBanner() {
  const { t } = useTranslation('tts');

  const handleSection = () => {}

  return <HeroSection
    imgSrc="assets/tts/bannerTts.svg"
    imgAlt=""
    heroTitle={t('heroSection.title')}
    heroResume={t('heroSection.resume')}
    buttonText={t('heroSection.buttonText')}
    handleClick={handleSection}
  />
}

export default TtsBanner;
