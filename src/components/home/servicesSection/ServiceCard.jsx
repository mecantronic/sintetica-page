import CustomButton from '../../shared/customButtons/CustomButton';
import PropTypes from 'prop-types';
import {
  ButtonContainer,
  CardContainer,
  CardImage,
  CardResume,
  CardTitle,
  ContentSection,
  TextContainer,
} from './serviceCard.styles';
import { MdArrowForwardIos } from 'react-icons/md';

function ServiceCard({ to, imgSrc, imgAlt, cardTitle, resume }) {
  return (
    <CardContainer>
      <ContentSection>
        <CardImage src={imgSrc} alt={imgAlt} />
        <TextContainer>
          <CardTitle>{cardTitle}</CardTitle>
          <CardResume>{resume}</CardResume>
        </TextContainer>
      </ContentSection>
      <ButtonContainer>
        <CustomButton
          isLink={true}
          to={to}
          device="all"
          icon={<MdArrowForwardIos />}
        />
      </ButtonContainer>
    </CardContainer>
  );
}

ServiceCard.propTypes = {
  to: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  cardTitle: PropTypes.string,
  resume: PropTypes.string,
};
export default ServiceCard;
