import React, { useState } from "react";
import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import Details1Button from "./buttons/Details1Button";
import Details2Button from "./buttons/Details2Button";
import theme from "../styles/theme";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.background};
  color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const MobileMenuIcon = styled(IoMdMenu)`
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavbarContainer>
      <Logo>Logo</Logo>
      {isMobile ? (
        <>
          <Details1Button buttonText='Login' to='/' />
          <Details2Button buttonText='Signup' to='/' />
          <MobileMenuIcon onClick={toggleMenu} />
          {showMenu && (
            <Menu>
              <MenuItem>Voice Cloning</MenuItem>
              <MenuItem>Experiencia TTS</MenuItem>
              <MenuItem>AI & Salud</MenuItem>
              <MenuItem>Investigación</MenuItem>
              <MenuItem>Nosotros</MenuItem>
              <MenuItem>Contacto</MenuItem>
            </Menu>
          )}
        </>
      ) : (
        <>
          <Menu>
            <MenuItem>Voice Cloning</MenuItem>
            <MenuItem>Experiencia TTS</MenuItem>
            <MenuItem>AI & Salud</MenuItem>
            <MenuItem>Investigación</MenuItem>
            <MenuItem>Nosotros</MenuItem>
            <MenuItem>Contacto</MenuItem>
          </Menu>
          <Details1Button buttonText='Login' to='/' />
          <Details2Button buttonText='Signup' to='/' />
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
