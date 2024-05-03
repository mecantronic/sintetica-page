import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  background-color: ${theme.colors.onyx};
  color: ${theme.colors.electricindigo};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${theme.bp.large}) {
    margin-top: 100px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  @media (max-width: ${theme.bp.large}) {
    width: 80%;
  }
`;

export const Image = styled.img`
  position: relative;
  width: 430px;
  @media (max-width: ${theme.bp.large}) {
    width: 400px;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 80vw;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60vw;

  @media (max-width: ${theme.bp.large}) {
    width: 90%;
  }
`;

export const Why = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.onyx};
  letter-spacing: 1px;
`;

export const TitleWhy = styled.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 20px 0;
  margin: 0;
  @media (max-width: ${theme.bp['x-small']}) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const ResumeWhy = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
`;
