import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { contactModal } from "../../redux/modalSlice";
import HeroSection from "../HeroSection/HeroSection";
import data from "../HeroSection/keysHeroSection"

function VoiceBanner({ openModal }) {

  const dispatch = useDispatch();
  const handleOpenContact = () => {
    dispatch(contactModal());
  };

  const { img, textTitle, textDescription, textBtn } = data.contentVoiceCloning;

  return (
    <HeroSection
      imgPath={img}
      mainTitle= {textTitle}
      description={textDescription}
      btnText={textBtn}
      showButton={true}
      handleClick={handleOpenContact}
    />
  
  );
}
VoiceBanner.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default VoiceBanner;
