import { Title, Container } from './section.styles';
import PropTypes from 'prop-types';
function Section({ children, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
Section.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default Section;
