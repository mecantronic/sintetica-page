import {
  Container,
  Details,
  Image,
  ImageContainer,
  ResumeWhy,
  TitleWhy,
  Why,
} from "../../styles/components/ia-salud/whySection.style";

function WhySection() {
  return (
    <Container>
      <Details>
        <Why>*** ¿Porqué lo hacemos?</Why>
        <TitleWhy>Tecnología al servicio de la salud y la inclusión</TitleWhy>
        <ResumeWhy>
          En Sintética, estamos convencidos de que la tecnología debe ser una
          fuerza impulsora para mejorar la vida de las personas en todo el
          mundo. Con ese compromiso en mente, hemos dirigido nuestros esfuerzos
          hacia una visión transformadora: empoderar a individuos de todas las
          capacidades y orígenes a través de soluciones innovadoras.
        </ResumeWhy>
        <ResumeWhy>
          En la intersección de la vanguardia tecnológica y el bienestar humano,
          la inteligencia artificial ha emergido como un faro de posibilidades.
          Creemos en la importancia de la inclusión, en la eliminación de
          barreras y en la promoción de la igualdad en todos los niveles.
        </ResumeWhy>
        <ResumeWhy>
          La clonación de voz no solo es un avance técnico, es un testimonio de
          nuestro compromiso de construir un mundo donde cada voz sea escuchada
          y respetada. Te invitamos a explorar nuestros proyectos y descubrir
          cómo la inteligencia artificial está transformando la salud de maneras
          que antes solo podíamos imaginar.
        </ResumeWhy>
      </Details>
      <ImageContainer>
        <Image
          src="assets/ia-salud/logo_1.png"
          alt="Logo IA-salud"
        />
      </ImageContainer>
    </Container>
  );
}

export default WhySection;
