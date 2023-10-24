import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Details1Button from "./buttons/Details1Button";
import Details2Button from "./buttons/Details2Button";
import theme from "../styles/theme";
import { useDispatch } from "react-redux";
import { loginModal, signupModal } from "../redux/modalSlice";
import { Logo, MenuButton, NavDiv, NavLink, NavLinks, NavbarContainer, UserButtons } from "../styles/components/navbar.style";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch()

  const isMobile = useMediaQuery({ maxWidth: theme.bp.medium });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOpenLogin = () => {
    dispatch(loginModal());
  };

  const handleOpenSignUp = () => {
    dispatch(signupModal());
  };

  return (
    <NavbarContainer>
      <Logo to="/">
        <img src="assets/logotipo.svg" alt="Logo Sintética" />
      </Logo>
      {isMobile ? (
        <>
          <MenuButton onClick={toggleMenu}>{showMenu ? "✕" : "☰"}</MenuButton>
          {showMenu && (
            <NavLinks>
              <NavLink to="/VoiceCloning">Voice Cloning</NavLink>
              <NavLink to="/Maintenance">Experiencia TTS</NavLink>
              <NavLink to="/Maintenance">AI & Salud</NavLink>
              <NavLink to="/Maintenance">Investigación</NavLink>
              <NavLink to="/Maintenance">Nosotros</NavLink>
              <UserButtons>
                <Details1Button buttonText="Login" handleClick={handleOpenLogin} />
                <Details2Button buttonText="Signup" handleClick={handleOpenSignUp}/>
              </UserButtons>
            </NavLinks>
          )}
        </>
      ) : (
        <>
          <NavLinks>
            <NavLink to="/VoiceCloning">Voice Cloning</NavLink>
            <NavDiv> </NavDiv>
            <NavLink to="/Maintenance">Experiencia TTS</NavLink>
            <NavDiv> </NavDiv>
            <NavLink to="/Maintenance">AI & Salud</NavLink>
            <NavDiv> </NavDiv>
            <NavLink to="/Maintenance">Investigación</NavLink>
            <NavDiv> </NavDiv>
            <NavLink to="/Maintenance">Nosotros</NavLink>
            <NavDiv> </NavDiv>
          </NavLinks>
          <UserButtons>
            <Details1Button buttonText="Login" handleClick={handleOpenLogin}/>
            <Details2Button buttonText="Signup" handleClick={handleOpenSignUp} />
          </UserButtons>
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
