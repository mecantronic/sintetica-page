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
import {
  AccountText,
  Center,
  Container,
  ContentPanel,
  FormTitle,
  InputContainer,
  InputIcon,
  LeftPanel,
  Login,
  PanelBTN,
  PanelsContainer,
  RightPanel,
  SignUp,
  SignupLogin,
  SocialIcon,
  SocialMedia,
  SocialText,
  SubmitBTN,
} from "../styles/components/loginForm.style";

function LoginForm({ initialType = "login" }) {
  const [formType, setFormType] = useState(initialType);

  const handleClick = () => {
    if (formType === "login") {
      setFormType("signup");
      return;
    }
    if (formType === "signup") {
      setFormType("login");
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
            <p>Iniciá sesión para disfrutar de nuestros servicios</p>
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
