import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaFacebook,
  FaGoogle,
  FaLinkedinIn,
  FaLock,
  FaPhoneAlt,
  FaTwitter,
  FaUser,
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
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
} from '../styles/components/loginForm.style';
import { loginRequest, registerRequest, setUser } from '../redux/userSlice';
import { closeModal } from '../redux/modalSlice';
import { useDispatch } from 'react-redux';
import Loader from './Loader';
import HANDLE_FORMDATA from './AuthErrors';
import { t } from 'i18next';

function LoginForm({ initialType }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formType, setFormType] = useState(initialType);
  const [formDataLogin, setFormDataLogin] = useState({
    email: '',
    password: '',
  });
  const [formDataRegister, setFormDataRegister] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });
  // eslint-disable-next-line no-unused-vars
  const [formErrors, setFormErrors] = useState({});

  const handleClick = () => {
    if (formType === 'login') {
      setFormType('signup');
      return;
    }
    if (formType === 'signup') {
      setFormType('login');
      return;
    }
  };

  const handleSetLoginData = (e) => {
    setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });
  };

  const handleErrorsLogin = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formDataLogin.email) {
      errors.email = 'Por favor, completa tu dirección de correo electrónico.';
      toast.error(errors.email);
    } else if (
      // eslint-disable-next-line no-useless-escape
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formDataLogin.email)
    ) {
      errors.email =
        'Por favor, ingresa una dirección de correo electrónico válida.';
      toast.error(errors.email);
    }
    if (!formDataLogin.password) {
      errors.password = 'Por favor, completa tu contraseña.';
      toast.error(errors.password);
    } else if (
      formDataLogin.password.length < 8 ||
      formDataLogin.password.length > 50
    ) {
      errors.password = `La contraseña debe tener entre ${8} y ${50} caracteres.`;
      toast.error(errors.password);
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      loginInit();
      setFormErrors({});
    }
  };

  const loginInit = async () => {
    setIsLoading(true);
    const response = await loginRequest(formDataLogin);
    if (response.error) {
      toast.error(response.error.message);
      setIsLoading(false);
    } else {
      dispatch(
        setUser({
          token: response.token,
          userName: response.userName,
          service: response.service,
          freeCredits: response.credits.freeCredits,
          premiumCredits: response.credits.premiumCredits,
        }),
      );
      dispatch(closeModal());
      setIsLoading(false);
    }
  };

  const handleSetRegisterData = (e) => {
    setFormDataRegister({
      ...formDataRegister,
      [e.target.name]: e.target.value,
    });
  };

  const handleErrorsRegister = (formObj) => {
    const errors = {};

    for (const key in formObj) {
      if (!formObj[key]) errors[key] = HANDLE_FORMDATA[key].required;
      else if (
        HANDLE_FORMDATA[key].pattern &&
        !HANDLE_FORMDATA[key]?.pattern[0].test(formObj[key])
      ) {
        errors[key] = HANDLE_FORMDATA[key].pattern[1];
      }
      else if (
        HANDLE_FORMDATA[key].length &&
        (formObj[key].length < HANDLE_FORMDATA[key]?.length[0] ||
          formObj[key].length > HANDLE_FORMDATA[key]?.length[1])
      ) {
        errors[key] = HANDLE_FORMDATA[key].length[2];
      }

      if (errors[key]) toast.error(errors[key]);
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // registerInit();
      setFormErrors({});
      return false
    }

    return true
  };

  const registerInit = async () => {
    setIsLoading(true);
    const response = await registerRequest(formDataRegister);
    if (response.error) {
      toast.error(response.error.message);
      setIsLoading(false);
    } else {
      dispatch(
        setUser({
          token: response.token,
          userName: response.userName,
          service: 'free',
          freeCredits: 10000,
          premiumCredits: 0,
        }),
      );
      dispatch(closeModal());
      setIsLoading(false);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault()

    if (formType !== 'signup') return

    const formData = new FormData(e.target);
    const FormObj = Object.fromEntries(formData.entries());

    if (handleErrorsRegister(FormObj)) return

    // registerInit()
    
    console.log(FormObj)
  }

  return (
    <Container formtype={formType}>
      <SignupLogin>
        <Login action="" formtype={formType}>
          <FormTitle>Log In</FormTitle>
          <InputContainer>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formDataLogin.email}
              onChange={handleSetLoginData}
            />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={formDataLogin.password}
              onChange={handleSetLoginData}
            />
          </InputContainer>
          <Center>
            {isLoading ? (
              <SubmitBTN type="submit" value="Login">
                <Loader />
              </SubmitBTN>
            ) : (
              <SubmitBTN
                type="submit"
                value="Login"
                onClick={handleErrorsLogin}
              >
                Ingresar
              </SubmitBTN>
            )}
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
            ¿No tienes una cuenta? {''}
            <a href="#" onClick={handleClick} id="sign-up-btn2">
              Registrarse
            </a>
          </AccountText>
        </Login>
        <SignUp onSubmit={handleSignUp} formtype={formType}>
          <FormTitle>Registro</FormTitle>
          <InputContainer>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <input
              type="text"
              placeholder="Nombre"
              name="firstName"
              value={formDataRegister.firstName}
              onChange={handleSetRegisterData}
            />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <input
              type="text"
              placeholder="Apellido"
              name="lastName"
              value={formDataRegister.lastName}
              onChange={handleSetRegisterData}
            />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <FaPhoneAlt />
            </InputIcon>
            <input
              type="text"
              placeholder="Teléfono"
              name="phone"
              value={formDataRegister.phone}
              onChange={handleSetRegisterData}
            />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <input
              type="text"
              placeholder="Usuario"
              name="userName"
              value={formDataRegister.userName}
              onChange={handleSetRegisterData}
            />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <IoMdMail />
            </InputIcon>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formDataRegister.email}
              onChange={handleSetRegisterData}
            />
          </InputContainer>
          <InputContainer>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={formDataRegister.password}
              onChange={handleSetRegisterData}
            />
          </InputContainer>
          <Center>
            {isLoading ? (
              <SubmitBTN type="submit" value="Sign up">
                <Loader />
              </SubmitBTN>
            ) : (
              <SubmitBTN
                type="submit"
                value="Sign up"
              >
                Registrarse
              </SubmitBTN>
            )}
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
            ¿ Ya tienes una cuenta? {''}
            <a href="#" onClick={handleClick} id="sign-in-btn2">
              Ingresar
            </a>
          </AccountText>
        </SignUp>
      </SignupLogin>
      <PanelsContainer>
        <LeftPanel formtype={formType}>
          <ContentPanel>
            <h3>¿Ya tenés una cuenta?</h3>
            <p>Iniciá sesión para disfrutar de nuestros servicios</p>
            <PanelBTN onClick={handleClick}>Ingresar</PanelBTN>
          </ContentPanel>
        </LeftPanel>
        <RightPanel formtype={formType}>
          <ContentPanel>
            <h3>¿No tenés una cuenta?</h3>
            <p>
              Sería un placer que formes parte de Sintética. Registrate acá para
              disfrutar nuestros servicios
            </p>
            <PanelBTN onClick={handleClick}>Registrarse</PanelBTN>
          </ContentPanel>
        </RightPanel>
      </PanelsContainer>
      <ToastContainer
        style={{
          position: 'absolute',
          bottom: '2vh',
          right: '2vw',
        }}
      />
    </Container>
  );
}
LoginForm.propTypes = {
  initialType: PropTypes.oneOf(['login', 'signup']),
};

export default LoginForm;
