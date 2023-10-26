import styled from "styled-components";
import theme from "../theme";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: ${theme.colors.seasalt};
`;

export const FooterContent = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;

  @media (max-width: ${theme.bp.large}) {
    width: 992px;
  }
  @media (max-width: ${theme.bp.medium}) {
    width: 767px;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 576px;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 138px;
  margin-right: 0px;

  @media (max-width: ${theme.bp.large}) {
    width: 113px;
  }
  @media (max-width: ${theme.bp.small}) {
    display: none;
  }
`;
export const Robot = styled.img`
  width: 110px;

  @media (max-width: ${theme.bp.large}) {
    width: 90px;
  }
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
    font-size: 9px;
    font-weight: 700;
    color: ${theme.colors.electricindigo};
    text-transform: uppercase;
  }

  @media (max-width: ${theme.bp.large}) {
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 8px;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  @media (max-width: ${theme.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
    height: 100%;
  }
`;

export const Directions = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: ${theme.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
  }
`;

export const Navigators = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 354px;
  height: 100%;

  @media (max-width: ${theme.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${theme.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    width: 300px;
  }
`;

export const NavTitles = styled.h5`
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px 0;
  margin: 0;

  @media (max-width: ${theme.bp.small}) {
    font-size: 16px;
    line-height: 16px;
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
  font-weight: 400;
  position: relative;
  margin: 0;
  padding-bottom: 5px;
  margin-bottom: 10px;

  &::before {
    content: "";
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

  @media (max-width: ${theme.bp.small}) {
    font-size: 12px;
    line-height: 12px;
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
  font-weight: 400 !important;
  position: relative;
  margin: 0;
  padding-bottom: 5px;
  margin-bottom: 10px;

  &::before {
    content: "";
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

  @media (max-width: ${theme.bp.large}) {
    font-size: 12px;
  }
  @media (max-width: ${theme.bp.small}) {
    font-size: 12px !important;
    line-height: 12px !important;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 354px;
  height: 100%;

  @media (max-width: ${theme.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${theme.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    width: 300px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 354px;

  p {
    margin: 0;
  }

  @media (max-width: ${theme.bp.large}) {
    width: 293px;
  }
  @media (max-width: ${theme.bp.medium}) {
    width: 218px;
  }
  @media (max-width: ${theme.bp.small}) {
    p {
      font-size: 12px;
      line-height: 12px;
    }
  }
  @media (max-width: ${theme.bp.small}) {
    width: 192px;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    width: 300px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.raisinblack};
  border: 1px solid ${theme.colors.raisinblack};
  border-radius: 50px;
  margin: 0 5px;

  &:hover {
    color: ${theme.colors.electricindigo};
    border-color: ${theme.colors.electricindigo};
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid ${theme.colors.gray};
  @media (max-width: ${theme.bp["x-small"]}) {
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }
`;
