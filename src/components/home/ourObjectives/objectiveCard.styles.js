import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 340px;
  height: 450px;
  padding: 24px;
  gap: 50px;
  border-radius: 12px;
  border: 2px solid ${theme.colors.details.LavenderWeb};
  background-color: ${theme.colors.backgrounds.white};
  box-shadow: ${theme.boxShadow.card};
  text-decoration: none;

  @media (max-width: ${theme.bp.m}) {
    width: 85vw;
    max-width: 350px;
    min-width: 300px;
  }
`;

export const CardImg = styled.img`
  width: 250px;
  height: 250px;
  flex-shrink: 0;
`;
export const CardTitle = styled.h4`
  width: 285px;
  color: ${theme.colors.black.jet};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  text-transform: uppercase;
`;
