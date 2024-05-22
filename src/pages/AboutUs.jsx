import Navbar from '../components/header/Navbar';
import {
  SectionText,
  Container,
  CardContainerRow,
  CardImage,
  CardText,
  Icons,
  SocialIcon,
  SectionCards,
  UserCard,
  Card,
  CardContainerSecondRow,
  SectionContact,
  Title,
  SubTitle,
  MainContainer
} from '../styles/pages/aboutUs.style';
import Footer from '../components/footer/Footer';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Details2Button from '../components/buttons/Details2Button';
import { useDispatch } from 'react-redux';
import { contactModal } from '../redux/modalSlice';

function AboutUs() {
  const dispatch = useDispatch();

  const handleOpenContact = () => {
    dispatch(contactModal());
  };

  return (
    <MainContainer>
      <Navbar />
      <Container>
        <Title>
        Sintética
        </Title>
        <SubTitle>
        Quienes somos
        </SubTitle>
        <SectionText>
          <Card>
            <h4>Tecnología para la inclusión</h4>
            <p>
              En Sintética fusionamos la innovación y la tecnología para crear
              soluciones impactantes. Nuestro equipo interdisciplinario está
              compuesto por ingenieros, expertos en inteligencia artificial,
              desarrolladores de software y talentos diversos que comparten una
              visión: desarrollar tecnología para mejorar la vida de las
              personas.
            </p>
          </Card>
          <Card>
            <h4>Nuestra misión es clara</h4>
            <p>
              Nuestra misión es clara: impulsar la excelencia en la síntesis del
              discurso y el clonado de voces en nuestro idioma, el doblaje en
              tiempo real y otras aplicaciones vanguardistas. Desde la
              generación de contenido para el entretenimiento hasta la creación
              de herramientas inclusivas para personas con discapacidades,
              estamos comprometidos a ofrecer soluciones que impacten
              positivamente en la sociedad.
            </p>
          </Card>
          <Card>
            <h4>Valor y compromiso</h4>
            <p>
              En el corazón de nuestro trabajo se encuentra un valor
              fundamental: la pasión por la innovación responsable. Cada línea
              de código, cada algoritmo y cada función que desarrollamos nace
              desde un profundo compromiso con la ética y la integridad. Creemos
              en el poder transformador de la tecnología cuando se utiliza con
              responsabilidad y empatía.
            </p>
          </Card>
        </SectionText>
        <SectionCards>
          <SubTitle>
          Nuestro equipo
          </SubTitle>
          <CardContainerRow>
            <UserCard>
              <CardImage>
                <img src="assets/aboutUs/image.svg" alt="CEO" />
              </CardImage>
              <CardText>
                <h4>Hernán San Martín</h4>
                <p>CEO</p>
                <Icons>
                  <SocialIcon
                    href="https://www.linkedin.com/in/hernan-dario-san-martin/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </SocialIcon>
                  <SocialIcon
                    href="https://github.com/Hernan87"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </SocialIcon>
                  <SocialIcon
                    href="hsanmartin@mecantronic.com.ar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiMail />
                  </SocialIcon>
                </Icons>
              </CardText>
            </UserCard>
            <UserCard>
              <CardImage>
                <img src="assets/aboutUs/image-1.svg" alt="CTO" />
              </CardImage>
              <CardText>
                <h4>Maximiliano Yommi</h4>
                <p>CTO</p>
                <Icons>
                  <SocialIcon
                    href="https://www.linkedin.com/in/myommi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </SocialIcon>
                  <SocialIcon
                    href="https://github.com/maxiyommi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </SocialIcon>
                  <SocialIcon
                    href="myommi@mecantronic.com.ar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiMail />
                  </SocialIcon>
                </Icons>
              </CardText>
            </UserCard>
          </CardContainerRow>
          <CardContainerSecondRow>
            <UserCard>
              <CardImage>
                <img src="assets/aboutUs/image-2.svg" alt="Head Of IA" />
              </CardImage>
              <CardText>
                <h4>Paula Ortega Riera</h4>
                <p>Head Of IA</p>
                <Icons>
                  <SocialIcon
                    href="https://www.linkedin.com/in/paulaortegariera/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </SocialIcon>
                  <SocialIcon
                    href="https://github.com/pauortegariera"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </SocialIcon>
                  <SocialIcon
                    href="portega@mecantronic.com.ar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiMail />
                  </SocialIcon>
                </Icons>
              </CardText>
            </UserCard>
            <UserCard>
              <CardImage>
                <img
                  src="assets/aboutUs/image-3.svg"
                  alt="Machine Learning Engineer"
                />
              </CardImage>
              <CardText>
                <h4>Franco Bach</h4>
                <p>Machine Learning Engineer</p>
                <Icons>
                  <SocialIcon
                    href="https://www.linkedin.com/in/franco-bach/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </SocialIcon>
                  <SocialIcon
                    href="https://github.com/francobach47"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </SocialIcon>
                  <SocialIcon
                    href="francobach47@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiMail />
                  </SocialIcon>
                </Icons>
              </CardText>
            </UserCard>
            <UserCard>
              <CardImage>
                <img
                  src="assets/aboutUs/image-4.svg"
                  alt="Machine Learning Engineer"
                />
              </CardImage>
              <CardText>
                <h4>Darío Andrés Paez</h4>
                <p>Machine Learning Engineer</p>
                <Icons>
                  <SocialIcon
                    href="https://www.linkedin.com/in/dariopaezmlengineer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </SocialIcon>
                  <SocialIcon
                    href="https://github.com/dario248"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </SocialIcon>
                  <SocialIcon
                    href="paezdario24@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiMail />
                  </SocialIcon>
                </Icons>
              </CardText>
            </UserCard>
          </CardContainerSecondRow>
        </SectionCards>
        <SectionContact>
          <h4>
            Unite a nosotros en este viaje hacia el futuro de la tecnología del
            habla
          </h4>
          <Details2Button
            buttonText="Formá parte de sintética"
            handleClick={handleOpenContact}
          />
        </SectionContact>
      </Container>
      <Footer />
    </MainContainer>
  );
}

export default AboutUs;
