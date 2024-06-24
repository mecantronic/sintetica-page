import { useMediaQuery } from 'react-responsive';
import {
  Brand,
  BrandName,
  BrandTagLine,
  Contact,
  FooterContainer,
  FooterContent,
  Icons,
  NavA,
  NavTitles,
  Robot,
  SocialIcon,
  SocialMedia,
  BrandText,
  ColumnContainer,
  SocialText,
  CopyrightContainer,
  CopyrightText,
  InfoSection,
} from './footer.style';
import theme from '../../styles/theme';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: theme.bp.m });
  return (
    <>
      {isMobile ? (
        <FooterContainer>
          <FooterContent>
            <Brand>
              <Robot src="assets/logotipo.svg" alt="logo" />
              <BrandText>
                <BrandName>Sintética</BrandName>
                <BrandTagLine>Laboratorio de voces</BrandTagLine>
              </BrandText>
            </Brand>
            <InfoSection>
              <Contact>
                <NavTitles>Contacto</NavTitles>
                <ColumnContainer>
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
                </ColumnContainer>
              </Contact>
              <SocialMedia>
                <NavTitles>Nuestras redes</NavTitles>
                <ColumnContainer>
                  <SocialText>Unite a nosotros en redes sociales</SocialText>
                  <Icons>
                    <SocialIcon
                      href="https://www.instagram.com/mecantronic/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
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
                </ColumnContainer>
              </SocialMedia>
            </InfoSection>
          </FooterContent>
          <CopyrightContainer>
            <CopyrightText>Copyright © 2024 | Mecantronic</CopyrightText>
            <CopyrightText>Todos los derechos reservados</CopyrightText>
          </CopyrightContainer>
        </FooterContainer>
      ) : (
        <FooterContainer>
          <FooterContent>
            <Brand>
              <Robot src="assets/logotipo.svg" alt="logo" />
              <BrandText>
                <BrandName>Sintética</BrandName>
                <BrandTagLine>Laboratorio de voces</BrandTagLine>
              </BrandText>
            </Brand>
            <Contact>
              <NavTitles>Contacto</NavTitles>
              <ColumnContainer>
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
              </ColumnContainer>
            </Contact>
            <SocialMedia>
              <NavTitles>Nuestras redes</NavTitles>
              <ColumnContainer>
                <SocialText>Unite a nosotros en redes sociales</SocialText>
                <Icons>
                  <SocialIcon
                    href="https://www.instagram.com/mecantronic/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
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
              </ColumnContainer>
            </SocialMedia>
          </FooterContent>
          <CopyrightContainer>
            <CopyrightText>
              Copyright © 2024 | Todos los derechos reservados
            </CopyrightText>
            <CopyrightText>Mecantronic® 2024</CopyrightText>
          </CopyrightContainer>
        </FooterContainer>
      )}
    </>
  );
}

export default Footer;
