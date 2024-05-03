import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  background-color: ${theme.colors.white};
  color: ${theme.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: ${theme.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${theme.bp.small}) {
    padding-top: 50px;
  }
`;

export const Graphic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(90vw / 2);

  @media (max-width: ${theme.bp.large}) {
    width: auto;
  }
`;

export const HeroIMG = styled.img`
  width: 500px;
  @media (max-width: ${theme.bp.large}) {
    width: 500px;
  }
  @media (max-width: ${theme.bp.medium}) {
    width: 450px;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 300px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(90vw / 2);

  @media (max-width: ${theme.bp.large}) {
    width: 80%;
  }
`;

export const TitleDetails = styled.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${theme.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  @media (max-width: ${theme.bp['x-small']}) {
    font-size: 40px;
  }
`;
export const ResumeDetails = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  padding-bottom: 20px;
  padding-top: 20px;
  color: ${theme.colors.gray};
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BTN = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${theme.bp.medium}) {
    margin-right: 50px;
  }
`;
