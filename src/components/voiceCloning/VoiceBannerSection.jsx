import Details2Button from "../buttons/Details2Button";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { contactModal } from "../../redux/modalSlice";
import {
  BTN,
  Container,
  Details,
  Graphic,
  HeroIMG,
  ResumeDetails,
  Right,
  TitleDetails,
} from "../../styles/components/voiceCloning/voiceBannerSection.style";

function VoiceBanner({ openModal }) {
  const dispatch = useDispatch();

  const handleOpenContact = () => {
    dispatch(contactModal());
  };
  return (
    <Container>
      <Graphic>
        <HeroIMG src="assets/voiceCloning/bannerVoice.svg" />
      </Graphic>
      <Details>
        <TitleDetails>Inteligencia Artificial para alzar tu voz</TitleDetails>
        <ResumeDetails>
          Crea una copia digital de tu voz con nuestros sistemas de inteligencia
          artificial para clonar voces. Desarrollamos modelos de IA
          personalizados para capturar tu voz y darte la experiencia más
          realista en tu propio idioma.
        </ResumeDetails>
        <Right>
          <BTN onClick={openModal}>
            <Details2Button
              buttonText="Cloná tu voz "
              rightArrow={true}
              handleClick={handleOpenContact}
            />
          </BTN>
        </Right>
      </Details>
    </Container>
  );
}
VoiceBanner.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default VoiceBanner;
