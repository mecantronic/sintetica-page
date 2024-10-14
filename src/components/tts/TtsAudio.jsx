import StyledTtsAudio from "./TtsAudio.styles";

function TtsAudio() {
  return (
    <StyledTtsAudio>
      <div>
        <img src="/assets/tts/audio1.svg" alt="audio icon" />
        <span>Audio sintetizado</span>
      </div>

      <picture>
        <img src="/assets/tts/audio2.svg" alt="audio icon" />
      </picture>
    </StyledTtsAudio>
  )
}

export default TtsAudio