import { PageContainer } from '../components/shared/sharedComponents.styles';
import HeroSection from '../components/shared/HeroSection/HeroSection';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { contactModal } from '../redux/modalSlice';
import CustomSection from '../components/shared/customSection/CustomSection';
import CustomButton from '../components/shared/customButtons/CustomButton';
import VoicesSection from '../components/voiceCloning/voicesSection/VoicesSection';

function Home() {
  const { t } = useTranslation('voiceCloning');
  const dispatch = useDispatch();

  const handleOpenContact = () => {
    dispatch(contactModal());
  };

  return (
    <PageContainer>
      <HeroSection
        imgSrc="assets/voiceCloning/bannerVoice.svg"
        imgAlt=""
        heroTitle={t('heroSection.title')}
        heroResume={t('heroSection.resume')}
        buttonText={t('heroSection.buttonText')}
        handleClick={handleOpenContact}
      />
      <CustomSection sectionTitle={t('ourVoicesSection.title')}>
        <VoicesSection />
      </CustomSection>
      <CustomSection>
        <CustomButton
          buttonText={t('heroSection.buttonText')}
          handleClick={handleOpenContact}
        />
      </CustomSection>
    </PageContainer>
  );
}

export default Home;
