import ServiceCard from './ServiceCard';
import {
  BannerImg,
  Banner,
  Container,
  Details,
  BannerResume,
  Services,
  BannerTitle,
} from './servicesSection.style';

function ServicesSection() {
  return (
    <Container>
      <Banner>
        <BannerImg src="assets/home/card5.svg" alt="globos" />
        <Details>
          <BannerTitle>Voces en Español Rioplatense</BannerTitle>
          <BannerResume>
            Sintética es un laboratorio de síntesis de voces. Nuestra pasión por
            la innovación está arraigada en el compromiso de transformar vidas.
            Impulsamos investigaciones de vanguardistas, creamos productos
            revolucionarios y promovemos la inclusión en la salud.
            <strong>Transformamos voces en posibilidades.</strong>
          </BannerResume>
        </Details>
      </Banner>
      <Services>
        <ServiceCard
          to="/Maintenance"
          imgSrc="assets/home/card4.svg"
          imgAlt="text-icon"
          cardTitle="Text To Speech - Español Latinoamericano"
          resume="Nuestra tecnología te ofrece una experiencia de conversión de
              texto a discurso única. Con acentos auténticos y entonaciones
              naturales tus proyectos, presentaciones y aplicaciones serán
              sobresalientes. Sumérgete en la nueva era del habla sintética y
              dale voz a tus ideas en tu propio idioma."
        />
        <ServiceCard
          to="/VoiceCloning"
          imgSrc="assets/voiceCloning/bannerVoice.svg"
          imgAlt="text-icon"
          cardTitle="Voice Cloning - Español Latinoamericano"
          resume="¿Te imaginas poder replicar cualquier voz? Con nuestro sistema
              podés hacerlo realidad. Experimenta la libertad de dar vida a tus
              proyectos con voces familiares o icónicas en español rioplatense."
        />

        <ServiceCard
          to="/Maintenance"
          imgSrc="assets/home/card6.svg"
          imgAlt="text-icon"
          cardTitle="AI al servicio de la salud y la inclusión"
          resume="Nuestra clonación de voz es la herramienta que cambiará vidas,
              brindando independencia a través del habla sintética
              personalizada. Explora cómo estamos redefiniendo la comunicación
              inclusiva."
        />
        <ServiceCard
          to="/Maintenance"
          imgSrc="assets/home/card7.svg"
          imgAlt="text-icon"
          cardTitle="Toolkit para voces"
          resume="Nuestro toolkit te brinda el control completo sobre tus archivos
              de audio, desde el inicio hasta el final. ¿Necesitas dividir
              automáticamente pistas largas? Hecho. ¿No cuentas con
              transcripciones? No hay problema. ¿Buscas validar transcripciones
              con precisión? Te cubrimos. ¿Quieres crear datasets en diferentes
              idiomas? Lo hacemos posible."
        />
      </Services>
    </Container>
  );
}

export default ServicesSection;
