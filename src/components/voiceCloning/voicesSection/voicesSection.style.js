import styled from 'styled-components';
import theme from '../../../styles/theme';

export const VoicesContainer = styled.div`
  display: flex;
  padding: 24px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 1200px;
`;

export const Item = styled.div`
  display: flex;
  width: 360px;
  height: 168px;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 15px;
  background-color: ${theme.colors.backgrounds.seasalt};
  box-shadow: ${theme.boxShadow.card};

  @media (max-width: ${theme.bp.m}) {
    width: 343px;
    height: 127px;
    padding: 16px;
  }
`;

export const AudioItem = styled.audio`
  width: 315px;
  height: 32px;

  &::-webkit-media-controls-play-button,
  &::-webkit-media-controls-panel {
    padding: 0 14px;
    color: ${theme.colors.grayScale[800]};
    background-color: ${theme.colors.details.LavenderWeb};
    display: flex;
    height: 32px;
    justify-content: center;
    align-items: center;
    border-radius: 200px;

    @media (max-width: ${theme.bp.m}) {
      width: 311px;
    }
  }
`;

export const ItemTitle = styled.span`
  color: ${theme.colors.black.jet};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;

  @media (max-width: ${theme.bp.m}) {
    font-size: 24px;
    line-height: normal;
  }
`;

export const ItemText = styled.p`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${theme.colors.details.mediumSlateBlue};

  @media (max-width: ${theme.bp.m}) {
    font-size: 16px;
  }
`;
