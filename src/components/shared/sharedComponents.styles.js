import styled from 'styled-components';
import theme from '../../styles/theme';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  z-index: 0;
  padding-top: 72px;

  @media (max-width: ${theme.bp.m}) {
    padding-top: 54px;
  }
`;

export const BackcgroundImage = styled.div`
  padding: 0;
  margin: 0;
  background-image: url('assets/backgrounds/Background3.svg');
  background-size: 40%;
  background-repeat: repeat;
  background-position: top;
`;
