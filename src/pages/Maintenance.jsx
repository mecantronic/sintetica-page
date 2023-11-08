import Details2Link from "../components/buttons/Details2Link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  BTN,
  Container,
  Image,
  MaintenanceWrapper,
  Text,
} from "../styles/pages/maintenance.style";

function Maintenance() {
  return (
    <MaintenanceWrapper>
      <Navbar />
      <Container>
        <Image src="assets/backgrounds/maintenance.svg" />
        <Text>
          <h2>¡Lo sentimos!</h2>
          <span>Sección en mantenimiento.</span>
          <BTN>
            <Details2Link to="/" buttonText="Volver a Inicio" />
          </BTN>
        </Text>
      </Container>
      <Footer />
    </MaintenanceWrapper>
  );
}

export default Maintenance;
