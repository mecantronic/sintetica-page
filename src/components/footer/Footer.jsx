import { useMediaQuery } from 'react-responsive';
import {
  Brand,
  Contact,
  Copyright,
  FooterContainer,
  FooterContent,
  Icons,
  Links,
  NavA,
  NavLink,
  NavTitles,
  Navigators,
  Robot,
  SocialIcon,
  SocialMedia,
  TextLogo,
  Hr,
} from './footer.style';
import theme from '../../styles/theme';

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: theme.bp.m });
  return (
    <FooterContainer>
      <FooterContent>
        <Brand>
          <Robot src="assets/logotipo.svg" alt="logo" />
          <TextLogo>
            <h1>Sintética</h1>
            <p>Laboratorio de voces</p>
          </TextLogo>
        </Brand>
        {isMobile && <Hr></Hr>}
        <Links>
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
            <NavA href="" rel="noreferrer">
              Belgrano, CABA.
            </NavA>
            <NavA
              href="https://wa.me/5491157397834"
              target="_blank"
              rel="noreferrer"
            >
              +54 9 11 5 739 7834
            </NavA>
            <NavA href="mailto:info@mecantronic.com.ar">
              info@mecantronic.com.ar
            </NavA>
          </Contact>
          <SocialMedia>
            <NavTitles>Nuestras redes</NavTitles>
            <p>Unite a nosotros en redes sociales</p>
            <Icons>
              <SocialIcon
                href="https://www.facebook.com/mecantronic"
                target="_blank"
                rel="noreferrer"
              >
                <img src="assets/icons/facebookIcon.svg" alt="Logo Sintética" />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/company/mecantronic-sa/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="assets/icons/linkedInIcon.svg" alt="Logo Sintética" />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/sintetica_tts/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="assets/icons/instagramIcon.svg"
                  alt="Logo Sintética"
                />
              </SocialIcon>
            </Icons>
          </SocialMedia>
        </Links>
      </FooterContent>
      <Hr></Hr>
      <Copyright>
        {isMobile ? (
          <>
            <p>Copyright © 2024 | Mecantronic</p>
            <p>Todos los derechos reservados</p>
          </>
        ) : (
          <>
            <p>Copyright © 2024 | Todos los derechos reservados</p>
            <p>Mecantronic® 2024</p>
          </>
        )}
      </Copyright>
    </FooterContainer>
    /* 1200 138 352 352 352 */
    /* 992 113 293 293 293 */
    /* 767 113 293 293 293 */
  );
}

export default Footer;
