import styled from "styled-components";
import theme from "../styles/theme";
import LoginForm from "./LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import ContactForm from "./ContactForm";

const ModalOverlay = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3), 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const CloseIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${theme.colors.onyx};
  z-index: 12;
`;

const Modal = () => {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.modalType);

  const handleClose = () => {
    dispatch(closeModal());
  };
  let contentToRender;

  switch (modalType) {
    case "contact":
      contentToRender = <ContactForm />;
      break;
    case "login":
      contentToRender = <LoginForm initialType={"login"} />;
      break;
    case "signup":
      contentToRender = <LoginForm initialType={"signup"} />;
      break;
    default:
      contentToRender = <></>;
  }

  return modalType === "closed" ? (
    <></>
  ) : (
    <ModalOverlay>
      <ModalContent>
        <CloseIcon onClick={handleClose}>x</CloseIcon>
        {contentToRender}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
