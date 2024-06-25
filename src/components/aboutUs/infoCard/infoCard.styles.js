import styled from 'styled-components';
import theme from '../../../styles/theme';
import { montserratMixin } from '../../../styles/mixins';

export const CardContainer = styled.div`
  display: flex;
  width: 320px;
  height: 336px;
  padding: 22px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 2px solid ${theme.colors.details.LavenderWeb};
  background: ${theme.colors.backgrounds.white};
  box-shadow: ${theme.boxShadow.card};

  @media (max-width: ${theme.bp.m}){
    width: 100%;
    height: fit-content;
  }
`;

export const CardTitle = styled.h2`
  ${montserratMixin}
  color: ${theme.colors.details.tropicalIndigo};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

export const CardResume = styled.p`
  align-self: stretch;
  color: ${theme.colors.black.jet};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;
