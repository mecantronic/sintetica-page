import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Details1Button from "../buttons/Details1Button";
import Details2Button from "../buttons/Details2Button";
import theme from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { loginModal, signupModal } from "../../redux/modalSlice";
import {
  Logo,
  MenuButton,
  NavDiv,
  NavLink,
  NavLinks,
  NavbarContainer,
  UserButtons,
  Header,
  ImgMenu,
} from "./navbar.style";
import { removeUser } from "../../redux/userSlice";

const Navbar = () => {
  const token = useSelector((state) => state.user.token);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    dispatch(removeUser());
  };

  useEffect(() => {}, [token]);

  return (
    <Header>
      <NavbarContainer>
        <Logo to="/">
          <img src="assets/logotipo.svg" alt="Logo Sintética" />
        </Logo>
        {isMobile ? (
          <>
            <MenuButton onClick={toggleMenu}>
              {showMenu ? (
                "✕"
              ) : (
                <ImgMenu>
                  <img src="assets/menu.svg" alt="menu" />
                </ImgMenu>
              )}
            </MenuButton>
            {showMenu && (
              <NavLinks>
                <NavLink to="/VoiceCloning">Voice Cloning</NavLink>
                <NavLink to="/TTS">Experiencia TTS</NavLink>
                <NavLink to="/Maintenance">AI & Salud</NavLink>
                <NavLink to="/Maintenance">Investigación</NavLink>
                <NavLink to="/Maintenance">Nosotros</NavLink>
                <UserButtons>
                  {token ? (
                    <Details1Button
                      buttonText="Logout"
                      handleClick={handleLogout}
                    />
                  ) : (
                    <>
                      <Details1Button
                        buttonText="Login"
                        handleClick={handleOpenLogin}
                      />
                      <Details2Button
                        buttonText="Signup"
                        handleClick={handleOpenSignUp}
                      />
                    </>
                  )}
                </UserButtons>
              </NavLinks>
            )}
          </>
        ) : (
          <>
            <NavLinks>
              <NavLink to="/VoiceCloning">Voice Cloning</NavLink>
              <NavDiv> </NavDiv>
              <NavLink to="/TTS">Experiencia TTS</NavLink>
              <NavDiv> </NavDiv>
              <NavLink to="/Maintenance">AI & Salud</NavLink>
              <NavDiv> </NavDiv>
              <NavLink to="/Maintenance">Investigación</NavLink>
              <NavDiv> </NavDiv>
              <NavLink to="/Maintenance">Nosotros</NavLink>
              <NavDiv> </NavDiv>
            </NavLinks>
            <UserButtons>
              {token ? (
                <Details1Button
                  buttonText="Logout"
                  handleClick={handleLogout}
                />
              ) : (
                <>
                  <Details1Button
                    buttonText="Login"
                    handleClick={handleOpenLogin}
                  />
                  <Details2Button
                    buttonText="Signup"
                    handleClick={handleOpenSignUp}
                  />
                </>
              )}
            </UserButtons>
          </>
        )}
      </NavbarContainer>
    </Header>
  );
};

export default Navbar;
