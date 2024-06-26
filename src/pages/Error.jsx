import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/shared/HeroSection/HeroSection';
import { PageContainer } from '../components/shared/sharedComponents.styles';

function Error() {
  const Navigate = useNavigate();

  const handleGoBack = () => {
    Navigate('/');
  };

  return (
    <PageContainer>
      <HeroSection
        imgSrc="../../public/assets/images/error.png"
        imgAlt=""
        heroTitle={`¡Ups!\n Parece que no hay NADA por aquí`}
        heroResume="¡Error 404! Este enlace ya no existe o no está disponible ahora mismo. Pedimos disculpas"
        buttonText="Volver a sintética"
        handleClick={handleGoBack}
      />
    </PageContainer>
  );
}

export default Error;
