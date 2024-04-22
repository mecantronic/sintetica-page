import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import data from "../components/HeroSection/keysHeroSection";
import { useNavigate } from "react-router-dom";

function Maintenance() {
  const Navigate = useNavigate()
  const handleMaintenance = () => {
    Navigate('/')
  }
  const { img, textTitle, textDescription, textBtn } = data.contentMaintenance;

  return (
      <>
      <Navbar />
        <HeroSection
        imgPath={img}
        mainTitle= {textTitle}
        description={textDescription}
        btnText={textBtn}
        showButton={true}
        handleClick={handleMaintenance}
        />
      <Footer />
      </>   
  );
}

export default Maintenance;
