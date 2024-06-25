import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import theme from '../../styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { loginModal, signupModal } from '../../redux/modalSlice';
import {
  Logo,
  MenuButton,
  NavLink,
  NavLinks,
  NavbarContainer,
  UserButtons,
  Header,
  ImgMenu,
} from './navbar.style';
import { removeUser } from '../../redux/userSlice';
import CustomButton from '../shared/customButtons/CustomButton';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation(['navBar']);
  const token = useSelector((state) => state.user.token);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: theme.bp.l });

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
        <Logo
          to="/"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <img src="assets/logotipo.svg" alt="Logo Sintética" />
        </Logo>
        {isMobile ? (
          <>
            <MenuButton onClick={toggleMenu}>
              {showMenu ? (
                '✕'
              ) : (
                <ImgMenu>
                  <img src="assets/menu.svg" alt="menu" />
                </ImgMenu>
              )}
            </MenuButton>
            {showMenu && (
              <NavLinks>
                <NavLink
                  to="/voice-cloning"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {t('menuLinks.voiceCloning')}
                </NavLink>
                <NavLink
                  to="/tts"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {t('menuLinks.tts')}
                </NavLink>
                <NavLink
                  to="/maintenance"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {t('menuLinks.ai')}
                </NavLink>
                <NavLink
                  to="/maintenance"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {t('menuLinks.research')}
                </NavLink>
                <NavLink
                  to="/about-us"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {t('menuLinks.our')}
                </NavLink>
                <UserButtons>
                  {token ? (
                    <CustomButton
                      buttonText={t('buttons.logout')}
                      handleClick={handleLogout}
                      buttontype="secondary"
                    />
                  ) : (
                    <>
                      <CustomButton
                        buttonText={t('buttons.login')}
                        handleClick={handleOpenLogin}
                        buttontype="secondary"
                      />
                      <CustomButton
                        buttonText={t('buttons.signup')}
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
              <NavLink to="/voice-cloning">
                {t('menuLinks.voiceCloning')}
              </NavLink>
              <NavLink to="/tts">{t('menuLinks.tts')}</NavLink>
              <NavLink to="/maintenance">{t('menuLinks.ai')}</NavLink>
              <NavLink to="/maintenance">{t('menuLinks.research')}</NavLink>
              <NavLink to="/about-us">{t('menuLinks.our')}</NavLink>
            </NavLinks>
            <UserButtons>
              {token ? (
                <CustomButton
                  buttonText={t('buttons.logout')}
                  handleClick={handleLogout}
                  buttontype="secondary"
                />
              ) : (
                <>
                  <CustomButton
                    buttonText={t('buttons.login')}
                    handleClick={handleOpenLogin}
                    buttontype="secondary"
                  />
                  <CustomButton
                    buttonText={t('buttons.signup')}
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
