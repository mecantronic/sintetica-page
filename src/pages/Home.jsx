import ServicesSection from '../components/home/servicesSection/ServicesSection';
import ContactForm from '../components/ContactForm';
import { HelmetProvider } from 'react-helmet-async';
import { PageContainer } from '../components/shared/sharedComponents.styles';
import HomeHeroSection from '../components/home/homeBanner/HomeHeroSection';
import CustomSection from '../components/shared/customSection/CustomSection';
import OurObjectives from '../components/home/ourObjectives/OurObjectives';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t: homeTranslation } = useTranslation(['home']);
  const { t: contactTranslation } = useTranslation(['contact']);
  return (
    <PageContainer>
      <HelmetProvider>
        {/* Título de la página */}
        <title>Sintética</title>
        {/* Descripción de la página */}
        <meta
          name="description"
          content="Sintética es un laboratorio de síntesis de voces en español rioplatense. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."
        />
        {/* Palabras clave para motores de búsqueda */}
        <meta
          name="keywords"
          content="Clonación de voz, español rioplatense, voice cloning, síntesis de voces, text to speech, voice bots"
        />
        {/* Etiqueta canónica */}
        <meta name="canonical" href="https://www.ejemplo.com/mi-pagina" />
        {/* Título que aparece al compartir en redes sociales */}
        <meta name="og:title" content="Sintética" />
        {/* Descripción */}
        <meta
          name="og:description"
          content="Sintética es un laboratorio de síntesis de voces en español rioplatense. Nuestra pasión por la innovación está arraigada en el compromiso de transformar vidas. Impulsamos investigaciones vanguardistas, creamos productos revolucionarios y promovemos la inclusión en la salud."
        />
        <meta name="robots" content="index, follow" />
      </HelmetProvider>
      <HomeHeroSection />
      <CustomSection
        sectionTitle={homeTranslation('ourObjectivesSection.title')}
      >
        <OurObjectives />
      </CustomSection>
      <CustomSection sectionTitle={homeTranslation('servicesSection.title')}>
        <ServicesSection />
      </CustomSection>
      <CustomSection sectionTitle={contactTranslation('sectionName')}>
        <ContactForm />
      </CustomSection>
    </PageContainer>
  );
}

export default Home;
