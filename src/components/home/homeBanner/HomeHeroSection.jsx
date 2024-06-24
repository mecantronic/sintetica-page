import { useDispatch } from 'react-redux';
import {
  ContentContainer,
  CTOContent,
  SectionContainer,
  Gradient,
  BrandContent,
  SimpleText,
  EmphasisText,
  TextContainer,
  ButtonContainer,
  SinteticaLogo,
  BrandName,
  BrandTagLine,
} from './homeHeroSection.style';
import { contactModal } from '../../../redux/modalSlice';
import CustomButton from '../../shared/customButtons/CustomButton';
import { useTranslation } from 'react-i18next';

function HomeHeroSection() {
  const dispatch = useDispatch();
  const { t: homeTranslation } = useTranslation(['home']);
  const { t: brandTranslation } = useTranslation(['brand']);

  const handleOpenContact = () => {
    dispatch(contactModal());
  };
  return (
    <SectionContainer>
      <Gradient />
      <ContentContainer>
        <BrandContent>
          <SinteticaLogo src="assets/sintetica-black-logo.svg" alt="logo" />
          <BrandName>{brandTranslation('name')}</BrandName>
          <BrandTagLine>{brandTranslation('tagLine')}</BrandTagLine>
        </BrandContent>
        <CTOContent>
          <TextContainer>
            <EmphasisText>
              {homeTranslation('homeHeroSection.title')}
            </EmphasisText>
            <SimpleText>{homeTranslation('homeHeroSection.resume')}</SimpleText>
          </TextContainer>
          <ButtonContainer>
            <CustomButton
              buttonText={homeTranslation('homeHeroSection.button')}
              pattern="cto-rounded"
              handleClick={handleOpenContact}
            />
          </ButtonContainer>
        </CTOContent>
      </ContentContainer>
    </SectionContainer>
  );
}

export default HomeHeroSection;
