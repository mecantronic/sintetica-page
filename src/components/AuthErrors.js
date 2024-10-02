/* eslint-disable no-useless-escape */
const AUTH_ERRORS = {
  username: {
    required: 'Por favor, completa tu nombre de usuario.',
    pattern: 'El nombre de usuario solo puede contener letras, números y guiones bajos.',
    length: 'El nombre de usuario debe tener entre 2 y 18 caracteres.',
  },
  firstName: {
    required: 'Por favor, completa tu nombre.',
    pattern: 'El nombre solo puede contener letras y espacios.',
    length: 'El nombre debe tener entre 2 y 18 caracteres.',
  },
  lastName: {
    required: 'Por favor, completa tu apellido.',
    pattern: 'El apellido solo puede contener letras y espacios.',
    length: 'El apellido debe tener entre 2 y 18 caracteres.',
  },
  email: {
    required: 'Por favor, completa tu correo electrónico.',
    pattern: 'Por favor, ingresa una dirección de correo electrónico válida.',
  },
  phone: {
    required: 'Por favor, completa tu número de telefono.',
    pattern: 'El número de telefono debe tener 10 digitos.',
  },
  password: {
    required: 'Por favor, completa tu contraseña.',
    length: 'La contraseña debe tener entre 8 y 50 caracteres.',
  },
}

const formDataTypes = {
  firstName: {
    required: AUTH_ERRORS.firstName.required,
    pattern: [/^[a-zA-ZñÑ ]+$/, AUTH_ERRORS.firstName.pattern],
    length: [2, 18, AUTH_ERRORS.firstName.length]
  },
  lastName: {
    required: AUTH_ERRORS.lastName.required,
    pattern: [/^[a-zA-ZñÑ ]+$/, AUTH_ERRORS.lastName.pattern],
    length: [2, 18, AUTH_ERRORS.lastName.length]
  },
  email: {
    required: AUTH_ERRORS.email.required,
    pattern: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, AUTH_ERRORS.email.pattern],
  },
  phone: {
    required: AUTH_ERRORS.phone.required,
    pattern: [/^[0-9()-]+$/, AUTH_ERRORS.phone.pattern],
  },
  password: {
    required: AUTH_ERRORS.password.required,
    length: [8, 50, AUTH_ERRORS.password.length]
  },
  userName: {
    required: AUTH_ERRORS.username.required,
    pattern: [/^[a-zA-Z0-9_]+$/, AUTH_ERRORS.username.pattern],
    length: [2, 18, AUTH_ERRORS.username.length]
  },
};

export default formDataTypes