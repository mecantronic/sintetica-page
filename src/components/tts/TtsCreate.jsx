import { useState } from "react";
import {
  Container,
  FileSection,
  Left,
  OptionSection,
  TextSection,
  VewPort,
  TtsInput,
  BNTSection,
  Options,
} from "../../styles/components/tts/ttsCreate.style";
import Select from "../Select";
import AudioPlayer from "../audioPlayer/AudioPlayer";
import Details2Button from "../buttons/Details2Button";
import { useDispatch, useSelector } from "react-redux";
import Details1Button from "../buttons/Details1Button";
import { loginModal } from "../../redux/modalSlice";

const voicesOptions = [
  { value: "option1", label: "Opción 1" },
  { value: "option2", label: "Opción 2" },
  { value: "option3", label: "Opción 3" },
];
const languageOptions = [{ value: "españolAR", label: "Español AR" }];

function TtsCreate() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const [selectedVoice, setSelectedVoice] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleSelectVoice = (event) => {
    setSelectedVoice(event.target.value);
  };
  const handleSelectLanguaje = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleOpenLogin = () => {
    dispatch(loginModal());
  };

  return (
    <VewPort>
      {token ? (
        <Container>
          <Left>
            <FileSection>
              <AudioPlayer light={true} audioSrc={"/"} />
            </FileSection>
            <TextSection>
              <TtsInput name="message" placeholder="Escribí acá el texto..." />
            </TextSection>
          </Left>
          <OptionSection>
            <Options>
              <Select
                label="Voz"
                options={voicesOptions}
                value={selectedVoice}
                onChange={handleSelectVoice}
              />
              <Select
                label="Lenguaje"
                options={languageOptions}
                value={selectedLanguage}
                onChange={handleSelectLanguaje}
              />
            </Options>
            <BNTSection>
              <Details2Button buttonText="Generar voz" square={true} />
            </BNTSection>
          </OptionSection>
        </Container>
      ) : (
        <Container>
          <Left>
            <FileSection>
              <AudioPlayer light={true} audioSrc={""} />
            </FileSection>
            <TextSection>
              <TtsInput name="message" placeholder="Escribí acá el texto..." />
            </TextSection>
          </Left>
          <OptionSection>
            <Options>
              <Select
                label="Voz"
                options={voicesOptions}
                value={selectedVoice}
                onChange={handleSelectVoice}
              />
              <Select
                label="Lenguaje"
                options={languageOptions}
                value={selectedLanguage}
                onChange={handleSelectLanguaje}
              />
            </Options>
            <BNTSection>
              <Details1Button buttonText="Iniciá sesión" square={true} handleClick={handleOpenLogin} />
            </BNTSection>
          </OptionSection>
        </Container>
      )}
    </VewPort>
  );
}

export default TtsCreate;
