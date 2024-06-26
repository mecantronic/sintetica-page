import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/shared/HeroSection/HeroSection';
import { PageContainer } from '../components/shared/sharedComponents.styles';

function Maintenance() {
  const Navigate = useNavigate();

  const handleGoBack = () => {
    Navigate('/');
  };

  return (
    <PageContainer>
      <HeroSection
        isMaintenance={true}
        imgSrc="assets/images/maintenance.png"
        imgAlt=""
        heroTitle="¡Lo sentimos!"
        heroResume="Sección en mantenimiento."
        buttonText="Volver a sintética"
        handleClick={handleGoBack}
      />
    </PageContainer>
  );
}

export default Maintenance;
