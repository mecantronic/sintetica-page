import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.section`
  background-color: ${theme.colors.onyx};
  color: ${theme.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin-top: 100px;
`;

export const Title = styled.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 20px 0;
  margin: 0;
  @media (max-width: ${theme.bp["x-small"]}) {
    font-size: 40px;
  }
`;

export const Resume = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`;

export const Video = styled.iframe`
  width: 80vw;
  height: 50vw;
  padding-top: 50px;
`;
