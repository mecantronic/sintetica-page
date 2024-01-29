import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {
  Brand,
  Contact,
  Copyright,
  Directions,
  FooterContainer,
  FooterContent,
  Icons,
  Links,
  Nav,
  NavA,
  NavLink,
  NavTitles,
  Navigators,
  Robot,
  SocialIcon,
  SocialMedia,
  TextLogo,
} from "../styles/components/footer.style";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Nav>
          <Brand>
            <Robot src="assets/sintetica-black-logo.svg" alt="logo" />
            <TextLogo>
              <h1>Sintética</h1>
              <p>Laboratorio de voces</p>
            </TextLogo>
          </Brand>
          <Links>
            <Directions>
              <Navigators>
                <NavTitles>Navegación</NavTitles>
                <NavLink to="/VoiceCloning">Voice Cloning</NavLink>
                <NavLink to="/Maintenance">Experiencia TTS</NavLink>
                <NavLink to="/Maintenance">AI & Salud</NavLink>
                <NavLink to="/Maintenance">Investigación</NavLink>
                <NavLink to="/Maintenance">Nosotros</NavLink>
              </Navigators>
              <Contact>
                <NavTitles>Contacto</NavTitles>
                <NavA href="" rel="noreferrer">Belgrano, CABA.</NavA>
                <NavA href="https://wa.me/5491157397834" target="_blank" rel="noreferrer">+54 9 11 5 739 7834</NavA>
                <NavA href="mailto:info@mecantronic.com.ar">info@mecantronic.com.ar</NavA>
              </Contact>
            </Directions>
            <SocialMedia>
              <NavTitles>Conectemos</NavTitles>
              <p>Seguinos en nuestras</p>
              <p>redes sociales.</p>
              <Icons>
                <SocialIcon href="https://www.facebook.com/mecantronic" target="_blank" rel="noreferrer">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/company/mecantronic-sa/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/sintetica_tts/" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </SocialIcon>
              </Icons>
            </SocialMedia>
          </Links>
        </Nav>
        <Copyright>
          <p>Copyright 2023 Todos los derechos reservados</p>
          <p>©Mecantronic 2023</p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
    /* 1200 138 352 352 352 */
    /* 992 113 293 293 293 */
    /* 767 113 293 293 293 */
  );
}

export default Footer;
