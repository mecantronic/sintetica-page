import styled from 'styled-components';
import theme from '../../styles/theme';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  box-shadow: 0px -4px 24px 0px rgba(51, 51, 51, 0.33);
  background-color: ${theme.colors.seasalt};
  font-family: 'Montserrat', sans-serif;
  padding-top: 24px;

  @media (max-width: ${theme.bp.m}) {
    padding: 24px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1072px;
  margin-bottom: 9px;

  p {
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: ${theme.bp.l}) {
    width: 747px;
  }

  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
    width: 327px;
    align-items: center;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: ${theme.bp.m}) {
    margin-right: 0px;
    gap: 0px;
    flex-direction: column;
    padding-bottom: 25px;

    width: 327px;
    border-bottom: 1px solid ${theme.colors.mediumstateblue + '59'};
  }
`;
export const Robot = styled.img`
  width: 124px;
`;

export const TextLogo = styled.div`
  h2 {
    text-align: center;
    margin: 0;
    font-size: 32px;
    color: ${theme.colors.raisinblack};
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 10px;
    font-weight: 700;
    color: ${theme.colors.electricindigo};
    text-transform: uppercase;
  }
`;

export const NavTitles = styled.h5`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  padding-bottom: 16px;
  margin: 0;

  @media (max-width: ${theme.bp.m}) {
    padding-bottom: 12px;
    color: ${theme.colors.lightSlateBlue};
  }
`;

export const NavA = styled.a`
  display: flex;
  color: ${theme.colors.raisinblack};
  text-decoration: none;
  text-align: center;
  width: fit-content;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 7px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    border-bottom: 2px solid ${theme.colors.electricindigo};
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: ${theme.bp.m}) {
    padding-bottom: 5px;
    margin-bottom: 11px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 212px;

  @media (min-width: ${theme.bp.m}) and (max-width: ${theme.bp.l}) {
    margin: 0px 42px;
  }
  @media (max-width: ${theme.bp.m}) {
    width: 279px;
    margin: 16px 0 16px 0;
    align-items: center;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  width: 162px;

  p {
    margin: 0;
  }

  @media (max-width: ${theme.bp.m}) {
    width: 279px;
    align-items: center;
    margin-bottom: 8px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  @media (max-width: ${theme.bp.m}) {
    padding-top: 16px;
    gap: 16px;
  }
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  color: ${theme.colors.raisinblack};
  border: 1px solid ${theme.colors.raisinblack};
  border-radius: 100%;

  &:hover {
    color: ${theme.colors.electricindigo};
    border-color: ${theme.colors.electricindigo};
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid ${theme.colors.mediumstateblue + '59'};
  width: 1072px;

  p {
    font-size: 14px;
    font-weight: 400;
  }
  @media (max-width: ${theme.bp.l}) {
    width: 771px;
  }

  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 327px;
    padding-top: 4px;

    p {
      margin: 0;
    }
  }
`;
