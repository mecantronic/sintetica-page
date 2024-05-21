import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0.3rem 0;
  margin: 0;
  z-index: 100;
  box-shadow: 0px -4px 24px 0px rgba(51, 51, 51, 0.33);
  background-color: ${theme.colors.seasalt};
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;

  @media (max-width: ${theme.bp.l}) {
    padding: 0 48px;
  }

  @media (max-width: ${theme.bp.m}) {
    padding: 0 24px;
  }
`;

export const Logo = styled(Link)`
  img {
    height: 58px;

    @media (max-width: ${theme.bp.l}) {
      height: 56px;
    }

    @media (max-width: ${theme.bp.m}) {
      height: 38px;
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

  img {
    @media (max-width: ${theme.bp.l}) {
      height: 42px;
    }

    @media (max-width: ${theme.bp.m}) {
      height: 32px;
    }
  }

  @media (max-width: ${theme.bp.l}) {
    display: block;
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 30px;
  }
`;

export const ImgMenu = styled.div`
  @media (max-width: ${theme.bp.l}) {
    height: 42px;
  }
  @media (max-width: ${theme.bp.m}) {
    height: 32px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.bp.l}) {
    display: ${({ showMenu }) => (showMenu ? 'none' : 'flex')};
    flex-direction: column;
    position: absolute;
    top: 370px;
    left: 0;
    background-color: ${theme.colors.white};
    width: 100%;
    padding: 10px;
    transform: ${({ showMenu }) =>
      showMenu ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease-in-out;
  }
  @media (max-width: ${theme.bp.m}) {
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

  @media (max-width: ${theme.bp.l}) {
    font-size: 12px;
  }
`;

export const NavDiv = styled.div`
  width: 2px;
  height: 40px;
  padding: 0px 10px;
  @media (max-width: ${theme.bp.l}) {
    padding: 0px 0px;
  }
`;

export const UserButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
