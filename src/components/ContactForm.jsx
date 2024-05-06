import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BigInput,
  Center,
  ContactInfo,
  Container,
  ContatcButton,
  Form,
  Icon,
  InfoItem,
  SmallInput,
  TagCTA,
  TagInfo,
  TagText,
  Title,
} from '../styles/components/contactForm.style';

emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

function ContactForm() {
  const form = useRef();
  // eslint-disable-next-line no-unused-vars
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleErrors = (e, values) => {
    e.preventDefault();
    const errors = {};

    // eslint-disable-next-line no-useless-escape
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.name) {
      errors.name = 'Por favor, completa tu nombre';
      toast.error(errors.name);
    }
    if (!values.email) {
      errors.email = 'Por favor, completa tu email';
      toast.error(errors.email);
    } else if (!regex.test(values.email)) {
      errors.email = 'El formato del email no es valido';
      toast.error(errors.email);
    }
    if (!values.message) {
      errors.message = 'Por favor, contanos cómo podemos ayudarte';
      toast.error(errors.message);
    }
    if (!values.phone) {
      errors.phone = 'Por favor, completa tu teléfono';
      toast.error(errors.phone);
    }
    if (!values.subject) {
      errors.subject = 'Por favor, escribe un asunto';
      toast.error(errors.subject);
    }
    if (values.message.length < 8) {
      errors.message =
        'Por favor, completa el mensaje con al menos 8 caracteres';
      toast.error(errors.message);
    }
    if (values.message.length > 200) {
      errors.message =
        'Mensaje demasiado largo, debe contener menos de 200 caracteres';
      toast.error(errors.message);
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      submitForm();
    }
  };

  const submitForm = () => {
    const { name, email, phone, subject, message } = formData;
    toast.info('Enviando mensaje');
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message, phone, subject },
        import.meta.env.VITE_EMAILJS_USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            '¡Gracias por escribirnos, pronto estaremos respondiendo!',
          );
        },
        (error) => {
          console.log(error.text);
          toast.error(
            'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
          );
        },
      );
    clearForm();
  };

  const clearForm = () => {
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <Container>
      <Title>Dejanos tu consulta</Title>
      <ContactInfo>
        <InfoItem href="tel:+61383766284">
          <Icon src="assets/icons/phoneicon.svg" alt="phone-icon" />
          <TagText>
            <TagCTA>Llamanos</TagCTA>
            <TagInfo>+54 9 11 5 739 7834</TagInfo>
          </TagText>
        </InfoItem>
        <InfoItem href="info@mecantronic.com.ar">
          <Icon src="assets/icons/emailicon.svg" alt="phone-icon" />
          <TagText>
            <TagCTA>Escribinos</TagCTA>
            <TagInfo>info@mecantronic.com.ar</TagInfo>
          </TagText>
        </InfoItem>
      </ContactInfo>
      <Form ref={form} onSubmit={(e) => handleErrors(e, formData)}>
        <SmallInput
          type="text"
          placeholder="Nombre*"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <SmallInput
          type="text"
          placeholder="Email*"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <SmallInput
          type="text"
          placeholder="Teléfono*"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <SmallInput
          type="text"
          placeholder="Asunto*"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <BigInput
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Mensaje*"
          value={formData.message}
          onChange={handleChange}
        />
        <Center>
          <ContatcButton type="submit">Enviar mensaje</ContatcButton>
        </Center>
      </Form>
      <ToastContainer position="bottom-right" />
    </Container>
  );
}

export default ContactForm;
