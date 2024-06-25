import { PropTypes } from 'prop-types';
import { CardContainer, CardResume, CardTitle } from './infoCard.styles';

function InfoCard({ title, content }) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardResume>{content}</CardResume>
    </CardContainer>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
export default InfoCard;
