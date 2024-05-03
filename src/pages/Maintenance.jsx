import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import { useNavigate } from 'react-router-dom';

function Maintenance() {
  const Navigate = useNavigate();

  const handleMaintenance = () => {
    Navigate('/');
  };

  return (
    <>
      <Navbar />
      <HeroSection
        keyName="contentMaintenance"
        handleClick={handleMaintenance}
      />
      <Footer />
    </>
  );
}

export default Maintenance;
