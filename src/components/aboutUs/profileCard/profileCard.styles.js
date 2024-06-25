import styled from 'styled-components';
import theme from '../../../styles/theme';

export const CardContainer = styled.div`
  display: flex;
  width: 342px;
  padding: 22px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  border: 2px solid ${theme.colors.details.LavenderWeb};
  background: ${theme.colors.backgrounds.white};
  box-shadow: ${theme.boxShadow.card};

  @media (max-width: ${theme.bp.m}) {
    width: 100%;
    height: fit-content;
  }
`;

export const CardImg = styled.div`
  width: 125px;
  height: 125px;
  flex-shrink: 0;
  border-radius: 50%;
  background: url(${(props) => props.imgUrl});
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const ProfileName = styled.p`
  color: ${theme.colors.grayScale[900]};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

export const ProfileRole = styled.p`
  color: ${theme.colors.grayScale[800]};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const SocialSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const Icon = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  color: ${theme.colors.black.night};
  border: 1px solid ${theme.colors.black.night};
  border-radius: 100%;

  &:hover {
    color: ${theme.colors.main.primary};
    border-color: ${theme.colors.main.primary};
  }
`;
