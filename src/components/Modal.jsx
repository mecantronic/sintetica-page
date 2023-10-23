import LoginForm from "./LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import ContactForm from "./ContactForm";
import {
  CloseIcon,
  ModalContent,
  ModalOverlay,
} from "../styles/components/modal.style";

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
