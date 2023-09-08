import React, { useState } from "react";
import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import Details1Button from "./buttons/Details1Button";
import Details2Button from "./buttons/Details2Button";
import theme from "../styles/theme";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.background[1]};
  color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 50px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04);
  z-index: 100;

  @media (max-width: ${theme.bp["x-small"]}) {
    height: 30px;
  }
`;

const Logo = styled(Link)`
  img {
    height: 50px;

    @media (max-width: ${theme.bp["x-small"]}) {
      height: 40px;
    }
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: 50px;
  cursor: pointer;
  display: none; // Inicialmente oculto en dispositivos móviles

  @media (max-width: ${theme.bp.medium}) {
    display: block; // Mostrar en dispositivos móviles
  }

  @media (max-width: ${theme.bp["x-small"]}) {
    font-size: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.bp.medium}) {
    display: ${({ showMenu }) => (showMenu ? "none" : "flex")};
    flex-direction: column;
    position: absolute;
    top: 500px;
    left: 0;
    background-color: ${theme.colors.background[1]};
    width: 100%;
    padding: 10px;
    transform: ${({ showMenu }) =>
      showMenu ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    top: 463px;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  text-decoration: none;
  height: 40px;
  margin: 10px;
  font-size: 24px;

  &:hover {
    border-bottom: 1px solid #f0a308;
  }
`;

const NavDiv = styled.div`
  width: 2px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.04);
`;

const UserButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: theme.bp.medium });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavbarContainer>
      <Logo to='/'>
        <img src='assets/logotipo.svg' alt='Logo Sintética' />
      </Logo>
      {isMobile ? (
        <>
          <MenuButton onClick={toggleMenu}>{showMenu ? "✕" : "☰"}</MenuButton>
          {showMenu && (
            <NavLinks>
              <NavLink to='/'>Voice Cloning</NavLink>
              <NavLink to='/'>Experiencia TTS</NavLink>
              <NavLink to='/'>AI & Salud</NavLink>
              <NavLink to='/'>Investigación</NavLink>
              <NavLink to='/'>Nosotros</NavLink>
              <NavLink to='/'>Contacto</NavLink>
              <UserButtons>
                <Details1Button buttonText='Login' to='/' />
                <Details2Button buttonText='Signup' to='/' />
              </UserButtons>
            </NavLinks>
          )}
        </>
      ) : (
        <>
          <NavLinks>
            <NavLink to='/'>Voice Cloning</NavLink>
            <NavDiv> </NavDiv>
            <NavLink to='/'>Experiencia TTS</NavLink>
            <NavDiv> </NavDiv>
            <NavLink to='/'>AI & Salud</NavLink>
            <NavDiv> </NavDiv>
            <NavLink to='/'>Investigación</NavLink>
            <NavDiv> </NavDiv>
            <NavLink to='/'>Nosotros</NavLink>
            <NavDiv> </NavDiv>
            <NavLink to='/'>Contacto</NavLink>
          </NavLinks>
          <UserButtons>
            <Details1Button buttonText='Login' to='/' />
            <Details2Button buttonText='Signup' to='/' />
          </UserButtons>
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
