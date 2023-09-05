import styled from 'styled-components';
import theme from '../styles/theme';
import Navbar from '../components/Navbar';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: ${theme.fontSize.medium};
  background-color: ${theme.colors.background}
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary}
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

function Home() {
  return (
    <HomeWrapper>
    <Navbar />
      <Title>Welcome to My Vite React App</Title>
      <Description>
        This is the home page of your Vite React application with Styled Components and React Router DOM.
      </Description>
    </HomeWrapper>
  );
}

export default Home;