import PropTypes from "prop-types";
import {
  Options,
  StyledOption,
  StyledTtsHeader,
  StyledTtsLanguage
} from "./TtsLanguage.styles";

function Option ({ children, onClick, active }) {
  return (
    <StyledOption onClick={onClick} active={active}>
      {children}
    </StyledOption>
  )
}
Option.propTypes = {
  children: PropTypes.element,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

function TtsLanguage ({ language, setLanguage, options }) {
  return (
    <StyledTtsLanguage>
      <StyledTtsHeader>
        <h3>Idioma</h3>
        <p>Próximamente nuevos idiomas disponibles</p>
      </StyledTtsHeader>

      <Options>
        {options.map((option) => (
          <StyledOption
            key={option.value}
            active={language.value === option.value}
            onClick={() => setLanguage(option)}
            >
            <div className="ball" />
            {option.label}
          </StyledOption>
        ))}
      </Options>
    </StyledTtsLanguage>
  );
};
TtsLanguage.propTypes = {
  language: PropTypes.object,
  setLanguage: PropTypes.func,
  options: PropTypes.array
}

export default TtsLanguage