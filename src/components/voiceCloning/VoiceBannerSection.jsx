import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { contactModal } from "../../redux/modalSlice";
import HeroSection from "../HeroSection/HeroSection";

function VoiceBanner({ openModal }) {
  const dispatch = useDispatch();

  const handleOpenContact = () => {
    dispatch(contactModal());
  };
  return (
    <HeroSection/>
  );
}
VoiceBanner.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default VoiceBanner;
