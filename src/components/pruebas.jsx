import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  z-index: 1000;
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: none; // Inicialmente oculto en dispositivos móviles

  @media (max-width: 768px) {
    display: block; // Mostrar en dispositivos móviles
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({isOpen}) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    width: 100%;
    padding: 10px;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>Logo</Logo>
      <MenuButton onClick={toggleMenu}>{isOpen ? '✕' : '☰'}</MenuButton>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/seccion1">Sección 1</NavLink>
        <NavLink to="/seccion2">Sección 2</NavLink>
        <NavLink to="/seccion3">Sección 3</NavLink>
        <NavLink to="/seccion4">Sección 4</NavLink>
        <NavLink to="/seccion5">Sección 5</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;