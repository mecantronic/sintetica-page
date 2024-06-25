import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/shared/HeroSection/HeroSection';

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
