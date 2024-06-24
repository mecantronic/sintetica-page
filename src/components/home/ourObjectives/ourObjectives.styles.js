import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: ${theme.bp.l}) {
    gap: 36px;
  }

  @media (max-width: ${theme.bp.m}) {
    width: 75%;
    max-width: 456px;
    min-width: 295px;
    gap: 32px;
  }
`;

export const IntroText = styled.span`
  width: 913px;
  color: ${theme.colors.black.jet};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 32px;
  font-style: normal;
  font-weight: 32px;
  font-weight: 700;
  line-height: 34px;

  @media (max-width: ${theme.bp.l}) {
    width: 572px;
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: ${theme.bp.m}) {
    width: 100%;
    font-size: 14px;
    line-height: 140%;
  }
`;

export const CardsContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: ${theme.bp.l}) {
    flex-direction: column;
    align-items: center;
  }
`;
