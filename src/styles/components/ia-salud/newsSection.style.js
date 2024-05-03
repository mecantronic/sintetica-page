import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  background-color: ${theme.colors.onyx};
  color: ${theme.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 50px;
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.onyx};
  letter-spacing: 1px;
`;

export const VocesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
`;

export const Item = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${theme.colors.seasalt};
  border-radius: 15px;
`;

export const Image = styled.img`
  width: 320px;
  height: 380px;
`;
