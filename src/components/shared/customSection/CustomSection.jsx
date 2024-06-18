import { SectionContainer, SectionName } from './customSection.styles';
import PropTypes from 'prop-types';

function CustomSection({ sectionTitle, children }) {
  return (
    <SectionContainer>
      <SectionName>{sectionTitle}</SectionName>
      {children}
    </SectionContainer>
  );
}

export default CustomSection;

CustomSection.propTypes = {
  sectionTitle: PropTypes.string,
  children: PropTypes.element,
};
