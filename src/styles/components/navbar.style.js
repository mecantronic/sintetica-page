import styled from "styled-components";
import theme from "../theme";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  width: 100vw;
  padding: 1rem 0;
  margin: 0;
  z-index: 100;

  background-color: ${theme.colors.seasalt};

  @media (max-width: ${theme.bp["x-small"]}) {
    height: 20px;
  }
`;

export const Logo = styled(Link)`
  padding-left: 1rem;
  img {
    height: 40px;

    @media (max-width: ${theme.bp["x-small"]}) {
      height: 30px;
    }
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.raisinblack};
  font-size: 40px;
  cursor: pointer;
  display: none;

  @media (max-width: ${theme.bp.medium}) {
    display: block;
  }

  @media (max-width: ${theme.bp["x-small"]}) {
    font-size: 30px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.bp.medium}) {
    display: ${({ showMenu }) => (showMenu ? "none" : "flex")};
    flex-direction: column;
    position: absolute;
    top: 370px;
    left: 0;
    background-color: ${theme.colors.white};
    width: 100%;
    padding: 10px;
    transform: ${({ showMenu }) =>
      showMenu ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    top: 360px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.colors.raisinblack};
  text-decoration: none;
  height: 30px;
  margin: 10px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  text-transform: uppercase;

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
`;

export const NavDiv = styled.div`
  width: 2px;
  height: 40px;
  padding: 0px 10px;
  @media (max-width: ${theme.bp.large}) {
    padding: 0px 0px;
  }
`;

export const UserButtons = styled.div`
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
