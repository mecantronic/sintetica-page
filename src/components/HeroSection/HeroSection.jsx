import { Container, Graphic, HeroIMG, Details, TitleDetails, ResumeDetails, Right, BTN } from "./herosection.style";
import Details2Button from "../buttons/Details2Button";
import { useDispatch } from "react-redux";
import { contactModal } from "../../redux/modalSlice";

  function HeroSection({imgPath, mainTitle, description, btnText, showButton=false}) {
    
    const dispatch = useDispatch();
    const handleOpenContact = () => {
      dispatch(contactModal());
    };

    return (
        <Container>
          <Graphic>
            <HeroIMG src={imgPath} />
          </Graphic>
          <Details>
          <TitleDetails>{mainTitle}</TitleDetails>
          <ResumeDetails>{description}</ResumeDetails>
            <Right>
              {showButton && (
                <BTN>
                <Details2Button
                  buttonText={btnText}
                  rightArrow={true}
                  handleClick={handleOpenContact}
                />
              </BTN>
              )}
            </Right>
          </Details>
        </Container>
    );
  }
  
  export default HeroSection;
  