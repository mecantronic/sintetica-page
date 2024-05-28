import { Link } from 'react-router-dom';
import theme from '../../theme';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;

  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${theme.bp.small}) {
    margin-top: 80px;
  }
  @media (max-width: ${theme.bp['x-small']}) {
    margin-top: 100px;
  }
`;

export const NameSection = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 14px;
  margin: 0;
  border-radius: 12px;
  color: ${theme.colors.lavenderfloral};
  background-color: ${theme.colors.lavender};
`;

export const Title = styled.h4` 
  width: 913px;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 34px;
  color: ${theme.colors.raisinblack};
  margin: 0;
  max-width: 90vw;
  padding: 15px 0px 70px 0px;
  @media (max-width: ${theme.bp.small}) {
    font-size: 28px;
  }
  @media (max-width: ${theme.bp['x-small']}) {
    font-size: 24px;
  }
`;

export const Technologies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 40px;
  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
`;

export const Technology = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 450px;
  width: 340px;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);

  &.selected {
    background-color: ${theme.colors.white};
  }

  img {
    width: 250px;
    padding-bottom: 50px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.gray};
    margin: 0;
    text-transform: uppercase;
  }
  &:hover {
    img {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @media (max-width: ${theme.bp.medium}) {
    margin: 30px 0px;
    width: 400px;
  }

  @media (max-width: ${theme.bp['x-small']}) {
    margin: 30px 0px;
    width: 300px;
    height: 400px;
    h3 {
      font-size: 16px;
    }
  }
`;
