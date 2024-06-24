import styled from 'styled-components';
import theme from '../../styles/theme';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: fit-content;
  box-shadow: ${theme.boxShadow.primary};
  background-color: ${theme.colors.seasalt};
`;

export const FooterContent = styled.div`
  display: flex;
  width: 1072px;
  justify-content: center;
  align-items: center;
  gap: 200px;

  @media (max-width: ${theme.bp.l}) {
    max-width: 1072px;
    min-width: 747px;
    width: 90%;
    justify-content: space-between;
    gap: 0;
  }

  @media (max-width: ${theme.bp.m}) {
    width: 576px;
    min-width: 576px;
    flex-direction: column;
    padding: 24px 24px 0px 24px;
    align-items: center;
    gap: 0px;
  }
  @media (max-width: ${theme.bp.s}) {
    min-width: 327px;
    width: 327px;
  }
  `;

export const Brand = styled.div`
  display: flex;
  height: 159px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  
  @media (max-width: ${theme.bp.m}) {
    height: 136;
    align-self: stretch;
  }
  
  @media (max-width: ${theme.bp.s}) {
    height: fit-content;
    flex-direction: column;
    padding: 0;
    gap: 4px;
    padding-bottom: 16px;
  }
  `;

export const Robot = styled.img`
  width: 124px;
`;

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
`;
export const BrandName = styled.h6`
  color: ${theme.colors.black.night};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38.4px;
`;

export const BrandTagLine = styled.p`
  color: ${theme.colors.main.primary};
  font-style: normal;
  font-weight: 700 !important;
  line-height: 10.8px;
  text-transform: uppercase;
  font-size: 10px !important;
`;

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  padding-bottom: 12px;
  border-top: 1px solid ${theme.colors.details.periwinkle};

  @media (max-width: ${theme.bp.m}) {
    padding-top: 16px;
  }

  @media (max-width: ${theme.bp.s}) {
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  height: 159px;
  padding: 24px 0px;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: ${theme.bp.m}) {
    width: 50%;
    align-items: center;
    text-align: center;
    gap: 12px;
    padding: 0px;
    height: fit-content;
  }
`;

export const NavTitles = styled.h5`
  color: ${theme.colors.black.jet};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;

  @media (max-width: ${theme.bp.m}) {
    color: ${theme.colors.details.tropicalIndigo};
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: ${theme.bp.m}) {
    align-items: center;
    gap: 16px;
  }
`;

export const NavA = styled.a`
  text-decoration: none;
  display: flex;
  color: ${theme.colors.black.jet};
  text-align: center;
  width: fit-content;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  font-style: normal;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    border-bottom: 2px solid ${theme.colors.main.primary};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  height: 159px;
  max-width: 159px;
  padding: 24px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: ${theme.bp.m}) {
    max-width: none;
    width: 50%;
    align-items: center;
    text-align: center;
    gap: 12px;
    padding: 0px;
    height: fit-content;
  }
`;
export const SocialText = styled.p`
  color: ${theme.colors.black.jet};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 16px;

  @media (max-width: ${theme.bp.m}) {
    align-self: center;
  }
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  color: ${theme.colors.black.night};
  border: 1px solid ${theme.colors.black.night};
  border-radius: 100%;

  &:hover {
    color: ${theme.colors.main.primary};
    border-color: ${theme.colors.main.primary};
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  width: 1072px;
  padding: 16px 0px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${theme.colors.details.periwinkle};

  @media (max-width: ${theme.bp.l}) {
    max-width: 1072px;
    min-width: 747px;
    width: 90%;
    justify-content: space-between;
    gap: 0;
  }

  @media (max-width: ${theme.bp.m}) {
    width: 576px;
    min-width: 576px;
    padding: 12px 0 0 0;
  }

  @media (max-width: ${theme.bp.s}) {
    min-width: 327px;
    width: 327px;
    flex-direction: column;
  }
`;

export const CopyrightText = styled.p`
  color: ${theme.colors.black.jet};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;

  @media (max-width: ${theme.bp.m}) {
    line-height: 23px;
  }
`;
