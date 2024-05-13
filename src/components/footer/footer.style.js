import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 100%;
  background-color: ${theme.colors.seasalt};

  p {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
  }
`;

export const Hr = styled.hr`
  border: 1px solid ${theme.colors.mediumstateblue + '59'};

  @media (max-width: ${theme.bp.m}) {
    width: 325px;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 138px;
  margin-right: 60px;

  @media (max-width: ${theme.bp.m}) {
    margin-right: 0px;
  }
`;
export const Robot = styled.img`
  width: 124px;
`;

export const TextLogo = styled.div`
  h1 {
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

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  @media (max-width: ${theme.bp.m}) {
    width: 300px;
    flex-direction: column;
    height: 100%;
    align-items: center;
    padding: 24px 0px;
  }
`;

export const Navigators = styled.div`
  display: flex;
  flex-direction: column;
  width: 128px;
  padding: 24px 0px;

  @media (max-width: ${theme.bp.m}) {
    width: 300px;
    padding: 0px;
  }
`;

export const NavTitles = styled.h5`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  padding-bottom: 16px;
  margin: 0;

  @media (max-width: ${theme.bp.m}) {
    color: ${theme.colors.lightSlateBlue};
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  color: ${theme.colors.raisinblack};
  text-decoration: none;
  text-align: center;
  width: fit-content;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  position: relative;
  margin: 0;
  padding-bottom: 5px;
  margin-bottom: 5px;

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
    margin-left: 24px;
  }
`;

export const NavA = styled.a`
  display: flex;
  color: ${theme.colors.raisinblack};
  text-decoration: none;
  text-align: center;
  width: fit-content;
  font-size: 16px !important;
  line-height: 16px !important;
  font-weight: 500 !important;
  position: relative;
  margin: 0;
  padding-bottom: 5px;
  margin-bottom: 5px;

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
    margin-left: 24px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 212px;
  padding: 24px 0px;
  margin: 0px 48px;

  @media (min-width: ${theme.bp.m}) and (max-width: ${theme.bp.l}) {
    margin: 0px 24px;
  }
  @media (max-width: ${theme.bp.m}) {
    width: 300px;
    padding: 0px;
    margin: 32px 0px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  width: 162px;
  padding: 24px 0px;

  p {
    margin: 0;
  }

  @media (max-width: ${theme.bp.m}) {
    width: 300px;
    padding: 0px;
    p {
      margin-left: 24px;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 12px;
  @media (max-width: ${theme.bp.m}) {
    margin-left: 24px;
  }
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 90px;
  p {
    font-size: 14px;
    font-weight: 400;
  }
  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 24px;
    p {
      margin: 0;
    }
  }
`;
