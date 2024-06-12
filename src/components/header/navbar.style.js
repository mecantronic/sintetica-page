import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 100vw;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${theme.boxShadow.primary};
  background-color: ${theme.colors.backgrounds.seasalt};
  z-index: 100;

  @media (max-width: ${theme.bp.m}) {
    height: 54px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  padding: 8px 90px;
  position: relative;

  @media (max-width: ${theme.bp.xl}) {
    padding: 8px 32px;
  }

  @media (max-width: ${theme.bp.m}) {
    padding: 8px 48px;
  }
  @media (max-width: ${theme.bp.m}) {
    padding: 8px 24px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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
  color: ${theme.colors.grayScale[900]};
  font-size: 42px;
  cursor: pointer;
  display: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.bp.l}) {
    height: 42px;
    width: 42px;
  }

  @media (max-width: ${theme.bp.m}) {
    height: 32px;
    width: 32px;
    font-size: 32px;
  }
`;
export const ImgMenu = styled.div`
  height: 100%;
  width: auto;
  img {
    height: 100%;
    width: auto;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 748px;
  height: 50px;
  padding: 10px 12px;

  @media (max-width: ${theme.bp.l}) {
    display: ${({ showMenu }) => (showMenu ? 'none' : 'flex')};
    flex-direction: column;
    position: absolute;
    top: 302px;
    left: 0px;
    background-color: ${theme.colors.white};
    width: 100vw;
    height: 230px;
    transform: ${({ showMenu }) =>
      showMenu ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease-in-out;
    background-color: ${theme.colors.backgrounds.seasalt};
  }
  @media (max-width: ${theme.bp.m}) {
    top: 284px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.colors.black.jet};
  text-decoration: none;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  position: relative;
  text-transform: uppercase;

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

  @media (max-width: ${theme.bp.l}) {
    font-size: 12px;
  }
`;

export const UserButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  gap: 16px;
`;
