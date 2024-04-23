import { useDispatch } from "react-redux";
import { contactModal } from "../../redux/modalSlice";
import HeroSection from "../HeroSection/HeroSection";

function VoiceBanner() {

  const dispatch = useDispatch();
  const handleOpenContact = () => {
    dispatch(contactModal());
  };

  return (
    <HeroSection
      keyName="contentVoiceCloning"
      handleClick={handleOpenContact}
    />
  
  );
}

export default VoiceBanner;
