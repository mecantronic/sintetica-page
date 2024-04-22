import { Container, Graphic, HeroIMG, Details, TitleDetails, ResumeDetails, Right, BTN } from "./herosection.style";
import Details2Button from "../buttons/Details2Button";

  function HeroSection({imgPath, mainTitle, description, btnText, handleClick}) {
    
    return (
        <Container>
          <Graphic>
            <HeroIMG src={imgPath} />
          </Graphic>
          <Details>
          <TitleDetails>{mainTitle}</TitleDetails>
          <ResumeDetails>{description}</ResumeDetails>
            <Right>
                <BTN>
                <Details2Button
                  buttonText={btnText}
                  rightArrow={true}
                  handleClick={handleClick}
                />
              </BTN>
            </Right>
          </Details>
        </Container>
    );
  }
  
  export default HeroSection;
  