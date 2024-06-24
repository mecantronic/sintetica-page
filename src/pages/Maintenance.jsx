import HeroSection from '../components/HeroSection/HeroSection';
import { useNavigate } from 'react-router-dom';

function Maintenance() {
  const Navigate = useNavigate();

  const handleMaintenance = () => {
    Navigate('/');
  };

  return (
    <>
      <HeroSection
        keyName="contentMaintenance"
        handleClick={handleMaintenance}
      />
    </>
  );
}

export default Maintenance;
