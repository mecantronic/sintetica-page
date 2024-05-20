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
  NavTitles,
  Robot,
  SocialIcon,
  SocialMedia,
  TextLogo,
  Hr,
  LogoContent,
} from './footer.style';
import theme from '../../styles/theme';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: theme.bp.m });
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContent>
          <Brand>
            <Robot src="assets/logotipo.svg" alt="logo" />
            <TextLogo>
              <h1>Sintética</h1>
              <p>Laboratorio de voces</p>
            </TextLogo>
          </Brand>
          {isMobile && <Hr></Hr>}
          <Links>
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
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon
                  href="https://www.linkedin.com/company/mecantronic-sa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </SocialIcon>
                <SocialIcon
                  href="https://sintetica.com.ar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbWorld />
                </SocialIcon>
              </Icons>
            </SocialMedia>
          </Links>
        </LogoContent>
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
      </FooterContent>
    </FooterContainer>
    /* 1200 138 352 352 352 */
    /* 992 113 293 293 293 */
    /* 767 113 293 293 293 */
  );
}

export default Footer;
