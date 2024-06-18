import { CardContainer, CardImg, CardTitle } from './objectiveCard.styles';
import PropTypes from 'prop-types';

function ObjectiveCard({ to, title, imgSrc, imgAlt }) {
  return (
    <CardContainer to={to}>
      <CardImg src={imgSrc} alt={imgAlt} />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
}

export default ObjectiveCard;

ObjectiveCard.propTypes = {
  to: PropTypes.string,
  title: PropTypes.element,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};
