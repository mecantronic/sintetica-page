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

function HomeHeroSection() {
  const dispatch = useDispatch();

  const handleOpenContact = () => {
    dispatch(contactModal());
  };
  return (
    <SectionContainer>
      <Gradient />
      <ContentContainer>
        <BrandContent>
          <SinteticaLogo src="assets/sintetica-black-logo.svg" alt="logo" />
          <BrandName>Sintética</BrandName>
          <BrandTagLine>Laboratorio de voces</BrandTagLine>
        </BrandContent>
        <CTOContent>
          <TextContainer>
            <EmphasisText>Síntesis de voces potenciados por IA</EmphasisText>
            <SimpleText>
              Desde Argentina al mundo: líderes en el desarrollo de voces
              artificiales en nuestro idioma
            </SimpleText>
          </TextContainer>
          <ButtonContainer>
            <CustomButton
              buttonText="contactanos"
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
