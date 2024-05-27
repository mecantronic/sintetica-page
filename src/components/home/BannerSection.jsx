import Details2Button from '../buttons/Details2Button';
import { useDispatch } from 'react-redux';
import { contactModal } from '../../redux/modalSlice';
import {
  BTN,
  Container,
  Left,
  Resume,
  Right,
  Robot,
  TextLogo,
  Title,
} from '../../styles/components/home/bannerSection.style';

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
          <h2>Sintética</h2>
          <p>Laboratorio de voces</p>
        </TextLogo>
      </Left>
      <Right>
        <Title>Síntesis de voces potenciadas por AI</Title>
        <Resume>
          Desde Argentina al mundo: líderes en el desarrollo de voces
          artificiales en nuestro idioma.
        </Resume>
        <BTN>
          <Details2Button
            buttonText="Contactanos"
            handleClick={handleOpenContact}
          />
        </BTN>
      </Right>
    </Container>
  );
}

export default BannerSection;
