import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styled from "styled-components";
import theme from "../styles/theme";
emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
const Container = styled.section`
  background: none;
  color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  width: 100vw;

  background-image: url("assets/backgrounds/Background2.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: ${theme.bp.large}) {
    background-size: 30%;
  }
`;

const NameSection = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${theme.colors.lavenderfloral};
  background-color: ${theme.colors.lavender};
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.raisinblack};
  font-size: 45px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 30px 0;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${theme.bp.small}) {
    line-height: 44px;
    font-size: 36px;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    line-height: 36px;
    font-size: 30px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;
  gap: 10px;
  margin-bottom: 20px;
  background-color: ${theme.colors.white};
  border-radius: 25px;

  @media (max-width: ${theme.bp.large}) {
    width: 90vw;
  }
  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
`;

const InfoItem = styled.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  border: 2px solid ${theme.colors.platinum};
  border-radius: 20px;
  padding: 0px 18px;
  width: 50%;
  height: 80px;
  @media (max-width: ${theme.bp.medium}) {
    width: 85vw;
  }
`;

const TagText = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`;

const TagCTA = styled.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.raisinblack};

  @media (max-width: ${theme.bp["x-small"]}) {
    display: none;
  }
`;

const TagInfo = styled.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.gray};
`;

const Icon = styled.img`
  align-items: flex-start;
  width: 50px;
`;

const ContactForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  border: 2px solid ${theme.colors.platinum};
  border-radius: 20px;
  padding: 40px 0px 40px 0px;
  row-gap: 50px;
  column-gap: 20px;
  background-color: ${theme.colors.white};

  @media (max-width: ${theme.bp.large}) {
    width: 90vw;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SmallInput = styled.input`
  height: 40px;
  width: 40%;

  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${theme.colors.platinum};
  color: ${theme.colors.onyx};
  padding: 0 15px;
  
  @media (max-width: ${theme.bp.medium}) {
    width: calc(80% + 50px);
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    width: 80%;
  }
  &::placeholder {
    opacity: 1;
    color: ${theme.colors.platinum};
  }
`;

const BigInput = styled.textarea`
  width: calc(80% + 50px);
  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${theme.colors.platinum};
  color: ${theme.colors.onyx};
  padding: 10px 15px;
  @media (max-width: ${theme.bp["x-small"]}) {
    width: 80%;
  }
  &::placeholder {
    opacity: 1;
    color: ${theme.colors.platinum};
  }
`;

const ContatcButton = styled.button`
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: ${theme.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${theme.colors.electricindigo} 0%,
    ${theme.colors.lavenderfloral} 100%
  );
  text-decoration: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;

function ContactSection() {
  const form = useRef();
  // eslint-disable-next-line no-unused-vars
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleErrors = (e, values) => {
    e.preventDefault();
    const errors = {};

    // eslint-disable-next-line no-useless-escape
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.name) {
      errors.name = "Por favor, completa tu nombre";
      toast.error(errors.name);
    }
    if (!values.email) {
      errors.email = "Por favor, completa tu email";
      toast.error(errors.email);
    } else if (!regex.test(values.email)) {
      errors.email = "El formato del email no es valido";
      toast.error(errors.email);
    }
    if (!values.message) {
      errors.message = "Por favor, contanos cómo podemos ayudarte";
      toast.error(errors.message);
    }
    if (!values.phone) {
      errors.phone = "Por favor, completa tu teléfono";
      toast.error(errors.phone);
    }
    if (!values.subject) {
      errors.subject = "Por favor, escribe un asunto";
      toast.error(errors.subject);
    }
    if (values.message.length < 8) {
      errors.message =
        "Por favor, completa el mensaje con al menos 8 caracteres";
      toast.error(errors.message);
    }
    if (values.message.length > 200) {
      errors.message =
        "Mensaje demasiado largo, debe contener menos de 200 caracteres";
      toast.error(errors.message);
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      submitForm();
    }
  };

  const submitForm = () => {
    const { name, email, phone, subject, message } = formData;
    console.log("serviceID", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("templateID", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("userID", import.meta.env.VITE_EMAILJS_USER_ID);
    toast.info("Enviando mensaje");
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message, phone, subject },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "¡Gracias por escribirnos, pronto estaremos respondiendo!"
          );
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
          );
        }
      );
    clearForm();
  };

  const clearForm = () => {
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    // Puedes restablecer los campos del formulario utilizando las refs si es necesario.
    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <Container>
      <NameSection>Contacto</NameSection>
      <Title>Dejanos tu consulta</Title>
      <ContactInfo>
        <InfoItem href="tel:+61383766284">
          <Icon src="assets/icons/phoneicon.svg" alt="phone-icon" />
          <TagText>
            <TagCTA>Llamanos</TagCTA>
            <TagInfo>+54 9 11 5 739 7834</TagInfo>
          </TagText>
        </InfoItem>
        <InfoItem href="info@mecantronic.com.ar">
          <Icon src="assets/icons/emailicon.svg" alt="phone-icon" />
          <TagText>
            <TagCTA>Escribinos</TagCTA>
            <TagInfo>info@mecantronic.com.ar</TagInfo>
          </TagText>
        </InfoItem>
      </ContactInfo>
      <ContactForm ref={form} onSubmit={(e) => handleErrors(e, formData)}>
        <SmallInput
          type="text"
          placeholder="Nombre*"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <SmallInput
          type="text"
          placeholder="Email*"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <SmallInput
          type="text"
          placeholder="Teléfono*"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <SmallInput
          type="text"
          placeholder="Asunto*"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <BigInput
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Mensaje*"
          value={formData.message}
          onChange={handleChange}
        />
        <Center>
          <ContatcButton type="submit">Enviar mensaje</ContatcButton>
        </Center>
      </ContactForm>
      <ToastContainer position="bottom-right" />
    </Container>
  );
}

export default ContactSection;
