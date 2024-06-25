import {
  Container,
  HeroIMG,
  Details,
  TitleDetails,
  ResumeDetails,
  ButtonContainer,
  ContentContainer,
  TextContainer,
} from './heroSection.styles';
import PropTypes from 'prop-types';
import CustomButton from '../customButtons/CustomButton';

function HeroSection({
  imgSrc,
  imgAlt,
  heroTitle,
  heroResume,
  buttonText,
  handleClick,
}) {
  return (
    <Container>
      <ContentContainer>
        <HeroIMG src={imgSrc} alt={imgAlt} />
        <Details>
          <TextContainer>
            <TitleDetails>{heroTitle}</TitleDetails>
            <ResumeDetails>{heroResume}</ResumeDetails>
          </TextContainer>
          <ButtonContainer>
            <CustomButton
              buttonText={buttonText}
              handleClick={handleClick}
              pattern="cto-rounded"
            />
          </ButtonContainer>
        </Details>
      </ContentContainer>
    </Container>
  );
}

HeroSection.propTypes = {
  keyName: PropTypes.string,
  handleClick: PropTypes.func,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  heroTitle: PropTypes.string,
  heroResume: PropTypes.string,
  buttonText: PropTypes.string,
};

export default HeroSection;
