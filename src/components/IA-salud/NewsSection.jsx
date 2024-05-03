import {
  Container,
  Image,
  Item,
  Title,
  VocesContainer,
} from '../../styles/components/ia-salud/newsSection.style';

function NewsSection() {
  return (
    <Container>
      <Title>*** Prensa ***</Title>
      <VocesContainer>
        <Item href="https://www.tiempoar.com.ar/informacion-general/rivas-voz-inteligencia-artificial/">
          <Image src="assets/ia-salud/nota1.png" alt="Nota" />
        </Item>
        <Item href="https://www.telam.com.ar/notas/202306/631037-jorge-rivas-inteligencia-artificial-voz-original.html/">
          <Image src="assets/ia-salud/nota2.png" alt="Nota" />
        </Item>
      </VocesContainer>
    </Container>
  );
}

export default NewsSection;
