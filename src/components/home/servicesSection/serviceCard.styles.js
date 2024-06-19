import styled from 'styled-components';
import theme from '../../../styles/theme';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 900px;
  height: 240px;
  padding: 24px 16px 16px 24px;
  border-radius: 24px;

  border: 2px solid ${theme.colors.details.periwinkle};
  background-color: ${theme.colors.backgrounds.seasalt};

  @media (max-width: ${theme.bp.l}) {
    width: 720px;
    height: 278px;
  }

  @media (max-width: ${theme.bp.m}) {
    width: 320px;
    height: fit-content;
    gap: 24px;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const CardImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 676px;

  @media (max-width: ${theme.bp.l}) {
    width: 496px;
  }
  @media (max-width: ${theme.bp.m}) {
    width: 280px;
    gap: 8px;
  }
`;

export const CardTitle = styled.h6`
  color: ${theme.colors.black.jet};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  text-transform: uppercase;

  @media (max-width: ${theme.bp.m}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardResume = styled.p`
  color: ${theme.colors.black.jet};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  @media (max-width: ${theme.bp.m}) {
    font-size: 12px;
    line-height: 24px;
  }
`;

export const ButtonContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  width: 100%;
`;
