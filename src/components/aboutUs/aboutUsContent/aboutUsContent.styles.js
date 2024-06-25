import styled from 'styled-components';
import theme from '../../../styles/theme';
import { quicksandMixin } from '../../../styles/mixins';

export const BackgroundGradient = styled.div`
  position: absolute;
  padding: 0;
  width: 100vw;
  height: 989px;
  background: ${theme.gradients.about};

  @media (max-width: ${theme.bp.l}) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 48px 80px 60px 80px;
  gap: 48px;
  z-index: 10;

  @media (max-width: ${theme.bp.l}) {
    max-width: 928px;
    min-width: 819px;
    padding: 24px 32px 24px 32px;
    gap: 24px;
  }

  @media (max-width: ${theme.bp.m}) {
    max-width: 480px;
    min-width: 375px;
    padding: 24px 24px 16px 24px;
  }
`;

export const BrandName = styled.h3`
  align-self: center;
  color: ${theme.colors.black.jet};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 63px;
  letter-spacing: -1px;

  @media (max-width: ${theme.bp.l}) {
    font-size: 42px;
    line-height: 34px;
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 32px;
  }
`;

export const SectionTitle = styled.h1`
  align-self: stretch;
  color: ${theme.colors.black.jet};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;

  @media (max-width: ${theme.bp.l}) {
    font-size: 20px;
  }
`;

export const Resume = styled.p`
  ${quicksandMixin}
  align-self: stretch;
  color: ${theme.colors.black.jet};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;

  @media (max-width: ${theme.bp.l}) {
    font-size: 20px;
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 14px;
    align-self: center;
    width: 327px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: ${theme.bp.l}) {
    width: 100%;
  }

  @media (max-width: ${theme.bp.l}) {
    gap: 32px;
  }
`;
