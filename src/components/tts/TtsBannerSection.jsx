import HeroSection from "../HeroSection/HeroSection";
import data from "../HeroSection/keysHeroSection"

function TtsBanner() {

  const { img, textTitle, textDescription, textBtn } = data.contentExperienceTTS
  return (
    <HeroSection
      imgPath={img}
      mainTitle= {textTitle}
      description={textDescription}
      btnText={textBtn}
      openModal={true}
    /> 
  );
}

export default TtsBanner;