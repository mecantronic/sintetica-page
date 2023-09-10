import styled from "styled-components";
import theme from "../styles/theme";
import Details1Button from "../components/buttons/Details1Button";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: ${theme.colors.background[1]};
  h2 {
    font-size: 110px;
    font-weight: 400;
    line-height: 110px;
    padding-bottom: 4px;
    color: ${theme.colors.text.error}
  }
  span {
    font-size: 60px;
    color: ${theme.colors.primary};
    padding-bottom: 19px;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    padding-bottom: 45px;
    color: ${theme.colors.text[2]};
  }
`;

function NotFound() {
  return (
    <HomeWrapper>
      <h2>Oops!</h2>
      <span>Sección en mantenimiento.</span>
      <p>Volvé a intentar pronto </p>
      <Details1Button to="/" buttonText="Volver" />
    </HomeWrapper>
  );
}

export default NotFound;
