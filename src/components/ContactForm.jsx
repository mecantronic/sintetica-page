import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer,
  ContactInfo,
  Container,
  Icon,
  InfoItem,
  TagCTA,
  TagInfo,
  TagText,
  Title,
  FormRow,
  BackgroundFormContainer,
} from '../styles/components/contactSection.style';
import CustomInput from './shared/customInput/CustomInput';
import CustomButton from './shared/customButtons/CustomButton';
import { useTranslation } from 'react-i18next';

emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

function ContactForm() {
  const { t } = useTranslation(['contact']);
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
      errors.name = t('message.error.empty.name');
      toast.error(errors.name);
    }
    if (!values.email) {
      errors.email = t('message.error.empty.email');
      toast.error(errors.email);
    } else if (!regex.test(values.email)) {
      errors.email = t('message.error.invalidFormat.email');
      toast.error(errors.email);
    }
    if (!values.message) {
      errors.message = t('message.error.empty.message');
      toast.error(errors.message);
    }
    if (!values.phone) {
      errors.phone = t('message.error.empty.phone');
      toast.error(errors.phone);
    }
    if (!values.subject) {
      errors.subject = t('message.error.empty.subject');
      toast.error(errors.subject);
    }
    if (values.message.length < 8) {
      errors.message = t('message.error.tooShort');
      toast.error(errors.message);
    }
    if (values.message.length > 200) {
      errors.message = t('message.error.tooLong');
      toast.error(errors.message);
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      submitForm();
    }
  };

  const submitForm = () => {
    const { name, email, phone, subject, message } = formData;
    toast.info(t('message.sending'));
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
          toast.success(t('message.sent'));
        },
        (error) => {
          console.log(error.text);
          toast.error(t('message.error.notSent'));
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
      <Title>{t('cta.general')}</Title>
      <ContactInfo>
        <InfoItem href="tel:+61383766284">
          <Icon src="assets/icons/phoneicon.svg" alt="phone-icon" />
          <TagText>
            <TagCTA>{t('cta.call')}</TagCTA>
            <TagInfo>+54 9 11 5 739 7834</TagInfo>
          </TagText>
        </InfoItem>
        <InfoItem href="info@mecantronic.com.ar">
          <Icon src="assets/icons/emailicon.svg" alt="phone-icon" />
          <TagText>
            <TagCTA>{t('cta.write')}</TagCTA>
            <TagInfo>info@mecantronic.com.ar</TagInfo>
          </TagText>
        </InfoItem>
      </ContactInfo>

      <BackgroundFormContainer>
        <FormContainer ref={form} onSubmit={(e) => handleErrors(e, formData)}>
          <FormRow>
            <CustomInput
              placeHolder={t('inputs.name.placeholder')}
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <CustomInput
              placeHolder={t('inputs.email.placeholder')}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <CustomInput
              placeHolder={t('inputs.phone.placeholder')}
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <CustomInput
              placeHolder={t('inputs.subject.placeholder')}
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </FormRow>

          <CustomInput
            inputType="textArea"
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeHolder={t('inputs.message.placeholder')}
            value={formData.message}
            onChange={handleChange}
          />
          <CustomButton type="submit" buttonText={t('sendButton')} />
        </FormContainer>
      </BackgroundFormContainer>
      <ToastContainer position="bottom-right" />
    </Container>
  );
}

export default ContactForm;
