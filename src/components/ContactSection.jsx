import styled from "styled-components";
import theme from "../styles/theme";
import Details2Button from "./buttons/Details2Button";
//import { Link } from "react-router-dom";

const Container = styled.section`
  background: none;
  color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  width: 100vw;

  background-image: url('assets/backgrounds/Background2.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position:   right;
`;

const NameSection = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
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
  padding: 15px 0;
  margin: 0;
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
  border: 2px solid ${theme.colors.platinum};
  border-radius: 20px;
  padding: 0px 18px;
  width: 50%;
  height: 80px;
  
`;

const TagCTA = styled.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.raisinblack};
`
const TagInfo = styled.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.gray};
`

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
  padding: 40px 0px 0px 0px;
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

  @media (max-width: ${theme.bp.large}) {
    width: 46%;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 90vw;
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
  &::placeholder {
    opacity: 1;
    color: ${theme.colors.platinum};
  }
`;

function ContactSection() {
  return (
    <Container>
      <NameSection>Contacto</NameSection>
      <Title>Dejanos tu consulta</Title>
      <ContactInfo>
        <InfoItem href="tel:+61383766284">
          <Icon src="assets/icons/phoneicon.svg" alt="phone-icon" />
          <TagCTA>Llámanos</TagCTA>
          <TagInfo>+54 9 11 5 739 7834</TagInfo>
        </InfoItem>
        <InfoItem href="info@mecantronic.com.ar">
          <Icon src="assets/icons/emailicon.svg" alt="phone-icon" />
          <TagCTA>Escríbenos</TagCTA>
          <TagInfo>info@mecantronic.com.ar</TagInfo>
          
        </InfoItem>
      </ContactInfo>
      <ContactForm>
        <SmallInput type="text" placeholder="Nombre*" id="name" />
        <SmallInput type="text" placeholder="Email*" id="email" />
        <SmallInput type="text" placeholder="Teléfono*" id="phone" />
        <SmallInput type="text" placeholder="Asunto*" id="subject" />
        <BigInput
          name="#"
          id="message"
          cols="30"
          rows="5"
          placeholder="Mensaje*"
        />
        <Center>
        <Details2Button rightArrow={true} to="/NotFound" buttonText="Enviar mensaje" />
        </Center>
      </ContactForm>
    </Container>
  );
}

export default ContactSection;
