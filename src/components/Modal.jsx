import styled from 'styled-components';
import PropTypes from "prop-types";

const ModalOverlay = styled.div`
  position: fixed;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #333;
`;

const Modal = ({ children, closeModal}) => {
  return (
    <ModalOverlay>
      <ModalContent>
      <CloseIcon onClick={closeModal}>x</CloseIcon>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.node.isRequired,
  };

export default Modal;