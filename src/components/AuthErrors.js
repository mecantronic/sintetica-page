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
    pattern: 'La contraseña debe tener entre 8 y 50 caracteres.',
  },
}

export default AUTH_ERRORS