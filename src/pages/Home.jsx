import styled from 'styled-components';
import theme from '../styles/theme';
import Navbar from '../components/Navbar';
import BannerSection from '../components/home/BannerSection';
import TechnologySection from '../components/home/TechnologySection';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${theme.colors.background[1]};
`;

function Home() {
  return (
    <HomeWrapper>
    <Navbar />
    <BannerSection />
    <TechnologySection />
    </HomeWrapper>
  );
}

export default Home;