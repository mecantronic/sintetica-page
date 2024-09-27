import styled from "styled-components";
import { useState, useEffect } from "react"

import TtsLanguage from "./TtsLanguage"
import TtsForm from "./TtsForm";
import TtsAudio from "./TtsAudio";

import { LANGUAGES, SPEACHERS } from "./config";

import { AudioVisualizer } from "react-audio-visualize";
import { urlToBlob } from "../../utils/urlToBlob";

const StyledTtsService = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;
  padding: 0px 24px;
  max-width: 1160px;
`;

function TtsService() {
  const [language, setLanguage] = useState(LANGUAGES[0])
  const [speach, setSpeach] = useState(SPEACHERS[0])
  const [speed, setSpeed] = useState(1)

  const [blob, setBlob] = useState(null)

  const wavUrl = '/audios-voice/fem1.wav';
  useEffect(() => {
    urlToBlob(wavUrl)
      .then(blobRead => setBlob(blobRead))
      .catch(error => console.error('Error al convertir la URL WAV a Blob:', error));
  }, [])

  const formMethods = {
    onDecrement: () => {
      if (speed <= 0.5) return
      setSpeed(
        Math.round((speed - 0.05) * 100)/100
      )
    },
    onIncrement: () => {
      if (speed >= 1.5) return
      setSpeed(
        Math.round((speed + 0.05) * 100)/100
      )
    },
    onReset: () => {
      setLanguage(LANGUAGES[0])
      setSpeach(SPEACHERS[0])
      setSpeed(1)
    },
    onSubmit: (e) => {
      e.preventDefault()
  
      const formData = new FormData(e.target)
      const text = formData.get('text-input')
  
      console.log(language.value, text, speach.value, speed)
    }
  }

  return (
    <StyledTtsService>
      <TtsLanguage
        language={language}
        setLanguage={setLanguage}
        options={LANGUAGES}
      />
      <TtsForm
        speach={speach}
        setSpeach={setSpeach}
        speed={speed}
        speachers={SPEACHERS}
        formMethods={formMethods}
      />
      <TtsAudio />

      {blob &&
        <AudioVisualizer
          blob={blob}
          width={200}
          height={75}
        />
      }
    </StyledTtsService>
  )
}

export default TtsService