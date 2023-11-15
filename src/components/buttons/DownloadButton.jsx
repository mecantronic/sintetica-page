import { RiDownload2Line } from "react-icons/ri";
import { ButtonContainer } from "../../styles/components/buttons/downloadButton.style";
import PropTypes from "prop-types";

const DownloadButton = ({ square = false, link }) => {
  const handleDownload = () => {};

  return (
    <ButtonContainer
      to="#"
      onClick={handleDownload}
      square={square}
      link={link}
    >
      <RiDownload2Line />
    </ButtonContainer>
  );
};

DownloadButton.propTypes = {
  square: PropTypes.bool,
  link: PropTypes.string,
};

export default DownloadButton;
