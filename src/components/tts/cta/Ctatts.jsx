import Details2Button from '../../buttons/Details2Button';
import { CtaContainer, Title } from './ctatts.styles';

function Ctatts() {
  const handleClick = () => {
    window.location.href =
      'https://huggingface.co/spaces/mecantronic-ai/sintetica-TTS';
  };
  return (
    <CtaContainer>
      <Title>Probá nuestro TTS de forma gratuita</Title>
      <Details2Button handleClick={handleClick} buttonText="SINTÉTICA TTS" />
    </CtaContainer>
  );
}

export default Ctatts;
