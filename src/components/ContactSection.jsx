import styled from "styled-components";
import theme from "../styles/theme";
import { MdArrowForwardIos } from "react-icons/md";
//import { Link } from "react-router-dom";

const Container = styled.section`
  background-color: ${theme.colors.background[1]};
  color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  width: 100vw;
`;

const Contact = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.detail1[1]};
  letter-spacing: 1px;
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 50px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding-top: 5px;
  margin: 0;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: ${theme.bp.large}) {
    width: 80vw;
  }
  @media (max-width: ${theme.bp.small}) {
    flex-direction: column;
  }
`;

const InfoItem = styled.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.primary};
`;

const Icon = styled.img`
  width: 50px;
`;

const ContactForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80vw;
  @media (max-width: ${theme.bp.large}) {
    width: 90vw;
  }
`;

const ButtonForm = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 20px;
  font-size: 20px;
  line-height: 36px;
  color: ${theme.colors.background[1]};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${theme.colors.detail1[1]} 0%,
    ${theme.colors.detail1[2]} 50%,
    ${theme.colors.detail1[3]} 100%
  );
  text-decoration: none;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SmallInput = styled.input`
  line-height: 24px;
  background-color: ${theme.colors.background[3]};
  border-radius: 4px;
  border: 0;
  color: ${theme.colors.text[1]};
  margin: 10px 0;
  width: 48%;

  @media (max-width: ${theme.bp.large}) {
    width: 46%;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 90vw;
  }
  &::placeholder {
    opacity: 1;
    color: ${theme.colors.text[2]};
  }
`;

const BigInput = styled.textarea`
  line-height: 24px;
  background-color: ${theme.colors.background[3]};
  border-radius: 4px;
  border: 0;
  color: ${theme.colors.text[1]};
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  &::placeholder {
    opacity: 1;
    color: ${theme.colors.text[2]};
  }
`;

function ContactSection() {
  return (
    <Container>
      <Contact>***Contacto***</Contact>
      <Title>Dejanos tu consulta</Title>
      <ContactInfo>
        <InfoItem href='tel:+61383766284'>
          <Icon src='assets/icons/phone.svg' alt='phone-icon' />
          +54 9 11 5 739 7834
        </InfoItem>
        <InfoItem href='info@mecantronic.com.ar'>
          <Icon src='assets/icons/mail.svg' alt='phone-icon' />
          info@mecantronic.com.ar
        </InfoItem>
      </ContactInfo>
      <ContactForm>
        <SmallInput type='text' placeholder='Nombre' id='name' />
        <SmallInput type='text' placeholder='Email' id='email' />
        <SmallInput type='text' placeholder='Teléfono' id='phone' />
        <SmallInput type='text' placeholder='Asunto' id='subject' />
        <BigInput
          name='#'
          id='message'
          cols='30'
          rows='5'
          placeholder='Mensaje'
        />
        <Center>
          <ButtonForm>
            {" "}
            Enviar mensaje <MdArrowForwardIos size={20} />
          </ButtonForm>
        </Center>
      </ContactForm>
    </Container>
  );
}

export default ContactSection;
