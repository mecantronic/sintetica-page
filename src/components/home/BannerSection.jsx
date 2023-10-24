import Details1Button from "../buttons/Details1Button";
import { useDispatch } from "react-redux";
import { contactModal } from "../../redux/modalSlice";
import { BTN, Container, Left, Resume, Right, Robot, TextLogo, Title } from "../../styles/components/home/bannerSection.style";

function BannerSection() {
  const dispatch = useDispatch();

  const handleOpenContact = () => {
    dispatch(contactModal());
  };
  return (
    <Container>
      <Left>
        <Robot src="assets/sintetica-black-logo.svg" alt="logo" />
        <TextLogo>
          <h1>Sintética</h1>
          <p>Laboratorio de voces</p>
        </TextLogo>
      </Left>
      <Right>
        <Title>Síntesis de voces potenciadas por AI</Title>
        <Resume>
          Desde Argentina al mundo: Líderes en el desarrollo de voces
          artificiales en nuestro idioma.
        </Resume>
        <BTN>
          <Details1Button
            buttonText="Contactanos"
            handleClick={handleOpenContact}
          />
        </BTN>
      </Right>
    </Container>
  );
}

export default BannerSection;
