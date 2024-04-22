import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { contactModal } from "../../redux/modalSlice";
import HeroSection from "../HeroSection/HeroSection";

function VoiceBanner({ openModal }) {
  const dispatch = useDispatch();

  const textTiple = "Inteligencia Artificial para alzar tu voz"
  const textDescription = "Crea una copia digital de tu voz con nuestros sistemas de inteligencia artificial para clonar voces. Desarrollamos modelos de IA personalizados para capturar tu voz y darte la experiencia más realista en tu propio idioma."
  const pathImg = 'assets/voiceCloning/bannerVoice.svg'
  const textBtn = 'Clona tu voz'

  return (
    <HeroSection
      imgPath={pathImg}
      mainTitle= {textTiple}
      description={textDescription}
      btnText={textBtn}
      openModal={true}
    />
  
  );
}
VoiceBanner.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default VoiceBanner;
