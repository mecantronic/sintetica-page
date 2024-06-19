import { CardContainer, CardImg, CardTitle } from './objectiveCard.styles';
import PropTypes from 'prop-types';

function ObjectiveCard({ to, cardTitle, imgSrc, imgAlt }) {
  return (
    <CardContainer to={to}>
      <CardImg src={imgSrc} alt={imgAlt} />
      <CardTitle>{cardTitle}</CardTitle>
    </CardContainer>
  );
}

export default ObjectiveCard;

ObjectiveCard.propTypes = {
  to: PropTypes.string,
  cardTitle: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};
