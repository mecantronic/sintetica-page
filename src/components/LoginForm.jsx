import styled from "styled-components";
import theme from "../styles/theme";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedinIn,
  FaLock,
  FaPhoneAlt,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { useState } from "react";
import PropTypes from "prop-types";

const Container = styled.div`
  position: relative;
  width: 70vw;
  height: 80vh;
  background: ${theme.colors.white};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      ${theme.colors.electricindigo},
      ${theme.colors.lavenderfloral}
    );
    z-index: 6;
    transform: translateX(
      ${(props) => (props.formType === "login" ? "100%" : "0")}
    );
    transition: 1s ease-in-out;
  }

  @media (max-width: ${theme.bp.small}) {
    width: 95vw;
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    height: 95vh;
    &::before {
      display: none;
    }
  }
`;

const SignupLogin = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
`;

const Login = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 238px;
  padding: 0 10px;
  opacity: 1;
  opacity: ${(props) => (props.formType === "login" ? "1" : "0")};
  @media (max-width: ${theme.bp["x-small"]}) {
    display: ${(props) => (props.formType === "login" ? "flex" : "none")};
    width: 80%;
  }
`;

const SignUp = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 238px;
  padding: 0 10px;
  opacity: ${(props) => (props.formType === "login" ? "0" : "1")};
  @media (max-width: ${theme.bp["x-small"]}) {
    display: ${(props) => (props.formType === "login" ? "none" : "flex")};
    width: 80%;
  }
`;

const FormTitle = styled.h2`
  font-size: 35px;
  color: ${theme.colors.electricindigo};
  margin-bottom: 10px;
`;

const AccountText = styled.p`
  display: none;
  @media (max-width: ${theme.bp["x-small"]}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    a {
      text-decoration: none;
      color: ${theme.colors.electricindigo};
    }
  }
`;

const InputIcon = styled.i`
  flex: 1;
  text-align: center;
  color: ${theme.colors.gray};
  font-size: 16px;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  background: ${theme.colors.white};
  margin: 10px 0;
  border: 2px solid ${theme.colors.platinum};
  border-radius: 15px;
  padding: 0 15px;
  display: flex;
  align-items: center;

  input {
    flex: 5;
    background: none;
    border: none;
    outline: none;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.onyx};
  }
  @media (max-width: ${theme.bp["x-small"]}) {
    height: 30px;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SubmitBTN = styled.button`
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: ${theme.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${theme.colors.electricindigo} 0%,
    ${theme.colors.lavenderfloral} 100%
  );
  text-decoration: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;

const SocialText = styled.p`
  margin: 10px 0;
  font-size: 16px;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;
const SocialIcon = styled.a`
  text-decoration: none;
  height: 45px;
  width: 45px;
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

const PanelsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: ${theme.bp["x-small"]}) {
    display: none;
  }
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 35%;
  min-width: 238px;
  padding: 0 10px;
  text-align: center;
  z-index: 6;
  pointer-events: none;
  transform: translateX(
    ${(props) => (props.formType === "login" ? "-200%" : "0")}
  );
  pointer-events: ${(props) => (props.formType === "login" ? "none" : "all")};
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 35%;
  min-width: 238px;
  padding: 0 10px;
  text-align: center;
  z-index: 6;
  pointer-events: ${(props) => (props.formType === "login" ? "all" : "none")};
  transform: translateX(
    ${(props) => (props.formType === "login" ? "0" : "200%")}
  );
`;

const ContentPanel = styled.div`
  color: ${theme.colors.white};
  transition: 1.1s ease-in-out;
  transition-delay: 0.5s;

  h3 {
    font-size: 24px;
    font-weight: 600;
  }
  p {
    font-size: 15px;
    padding: 10px 0;
  }
  img {
    width: 100%;
    transition: 1.1s ease-in-out;
    transition-delay: 0.4s;
  }
`;

const PanelBTN = styled.button`
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: ${theme.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: ${theme.colors.onyx};
  text-decoration: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;
function LoginForm({ initialType = "login" }) {
  const [formType, setFormType] = useState(initialType);

  const handleClick = () => {
    if (formType === "login") {
      setFormType("signup");
      console.log("se ha cambiado a ", formType);
      return;
    }
    if (formType === "signup") {
      setFormType("login");
      console.log("se ha cambiado a ", formType);
      return;
    }
  };
  return (
    <Container formType={formType}>
      <SignupLogin>
        <Login action="" formType={formType}>
          <FormTitle>Log In</FormTitle>
          <InputContainer>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <input type="text" placeholder="Email" />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <input type="password" placeholder="Contraseña" />
          </InputContainer>
          <Center>
            <SubmitBTN type="submit" value="Login">
              Ingresar
            </SubmitBTN>
          </Center>
          <SocialText>O iniciá sesión con</SocialText>
          <SocialMedia>
            <SocialIcon href="#">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="">
              <FaGoogle />
            </SocialIcon>
            <SocialIcon href="">
              <FaLinkedinIn />
            </SocialIcon>
          </SocialMedia>
          <AccountText>
            ¿No tienes una cuenta? {""}
            <a href="#" onClick={handleClick} id="sign-up-btn2">
              Registrarse
            </a>
          </AccountText>
        </Login>
        <SignUp action="" formType={formType}>
          <FormTitle>Registro</FormTitle>
          <InputContainer>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <input type="text" placeholder="Nombre" />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <input type="text" placeholder="Apellido" />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <FaPhoneAlt />
            </InputIcon>
            <input type="text" placeholder="Teléfono" />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <input type="text" placeholder="Usuario" />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <IoMdMail />
            </InputIcon>
            <input type="text" placeholder="Email" />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <input type="password" placeholder="Contraseña" />
          </InputContainer>
          <Center>
            <SubmitBTN type="submit" value="Sign up">
              Registrarse
            </SubmitBTN>
          </Center>
          <SocialText>O registrate con</SocialText>
          <SocialMedia>
            <SocialIcon href="#">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="">
              <FaGoogle />
            </SocialIcon>
            <SocialIcon href="">
              <FaLinkedinIn />
            </SocialIcon>
          </SocialMedia>
          <AccountText>
            ¿ Ya tienes una cuenta? {""}
            <a href="#" onClick={handleClick} id="sign-in-btn2">
              Ingresar
            </a>
          </AccountText>
        </SignUp>
      </SignupLogin>
      <PanelsContainer>
        <LeftPanel formType={formType}>
          <ContentPanel>
            <h3>¿Ya tenés una cuenta?</h3>
            <p>
              Iniciá sesión para disfrutar de nuestros servicios
            </p>
            <PanelBTN onClick={handleClick}>Ingresar</PanelBTN>
          </ContentPanel>
          <img src="signin.svg" alt="" />
        </LeftPanel>
        <RightPanel formType={formType}>
          <ContentPanel>
            <h3>¿No tenés una cuenta?</h3>
            <p>
              Sería un placer que formes parte de Sintética. Registrate acá para
              disfrutar nuestros servicios
            </p>
            <PanelBTN onClick={handleClick}>Registrarse</PanelBTN>
          </ContentPanel>
          <img src="signup.svg" alt="" />
        </RightPanel>
      </PanelsContainer>
    </Container>
  );
}
LoginForm.propTypes = {
  initialType: PropTypes.oneOf(["login", "signup"]),
};

export default LoginForm;
