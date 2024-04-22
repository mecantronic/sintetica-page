import { Container, Graphic, HeroIMG, Details, TitleDetails, ResumeDetails, Right, BTN } from "./herosection.style";
import Details2Button from "../buttons/Details2Button";
import { useDispatch } from "react-redux";

  function HeroSection() {
    
    const dispatch = useDispatch();
    const handleOpenContact = () => {
      dispatch(contactModal());
    };

    return (
        <Container>
          <Graphic>
            <HeroIMG src="assets/voiceCloning/bannerVoice.svg" />
          </Graphic>
          <Details>
            <TitleDetails>Inteligencia Artificial para alzar tu voz</TitleDetails>
            <ResumeDetails>
              Crea una copia digital de tu voz con nuestros sistemas de inteligencia
              artificial para clonar voces. Desarrollamos modelos de IA
              personalizados para capturar tu voz y darte la experiencia más
              realista en tu propio idioma.
            </ResumeDetails>
            <Right>
              <BTN >
                <Details2Button
                  buttonText="Cloná tu voz "
                  rightArrow={true}
                  handleClick={handleOpenContact}
                />
              </BTN>
            </Right>
          </Details>
        </Container>
    );
  }
  
  export default HeroSection;
  