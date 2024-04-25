import {
  AudioItem,
  Item,
  ItemText,
  ItemTitle,
  VocesContainer,
  ButtonContainer
} from "../../styles/components/voiceCloning/voicesSection.style";
import Details2Button from "../buttons/Details2Button";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { contactModal } from "../../redux/modalSlice";


function VoicesSection() {

  const { t } = useTranslation(["voiceCloning", "data"])

  const dispatch = useDispatch();
  const handleOpenContact = () => {
    dispatch(contactModal());
  };

  return (
      <VocesContainer>
        <Item>
          <AudioItem controls>
            <source
              src="audios-voice/fem1.wav"
              type="audio/mpeg"
            />
           {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.first")}</ItemTitle>
          <ItemText>{t("voices.real")}</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source

              src="audios-voice/fem1_cloned(enhanced).wav"
              type="audio/mpeg"
            />
            {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.first")}</ItemTitle>
          <ItemText>{t("voices.ia")}</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source

              src="audios-voice/mas1.wav"
              type="audio/mpeg"
            />
            {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.second")}</ItemTitle>
          <ItemText>{t("voices.real")}</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="audios-voice/mas1_cloned(enhanced).wav"
              type="audio/mpeg"
            />
            {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.second")}</ItemTitle>
          <ItemText>{t("voices.ia")}</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="audios-voice/fem2.wav"
              type="audio/mpeg"
            />
            {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.third")}</ItemTitle>
          <ItemText>{t("voices.real")}</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="audios-voice/fem2_cloned(enhanced).wav"
              type="audio/mpeg"
            />
            {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.third")}</ItemTitle>
          <ItemText>{t("voices.ia")}</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="audios-voice/mas2.wav"
              type="audio/mpeg"
            />
            {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.fourth")}</ItemTitle>
          <ItemText>{t("voices.real")}</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source

              src="audios-voice/mas2_cloned(enhanced).wav"
              type="audio/mpeg"
            />
            {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.fourth")}</ItemTitle>
          <ItemText>{t("voices.ia")}</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="audios-voice/fem3.wav"
              type="audio/mpeg"
            />
            {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.fifth")}</ItemTitle>
          <ItemText>{t("voices.real")}</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="audios-voice/fem3_cloned(enhanced).wav"
              type="audio/mpeg"
            />
            {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.fifth")}</ItemTitle>
          <ItemText>{t("voices.ia")}</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="audios-voice/mas3.wav"
              type="audio/mpeg"
            />
            {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.sixth")}</ItemTitle>
          <ItemText>{t("voices.real")}</ItemText>
        </Item>

        <Item>
          <AudioItem controls>
            <source
              src="audios-voice/mas3_cloned(enhanced).wav"
              type="audio/mpeg"
            />
            {t("error")}
          </AudioItem>
          <ItemTitle>{t("name.sixth")}</ItemTitle>
          <ItemText>{t("voices.ia")}</ItemText>
        </Item>
          <ButtonContainer>
            <Details2Button
              buttonText={"Cloná tu voz"}
              handleClick={handleOpenContact}
            />
          </ButtonContainer>
      </VocesContainer>
  );
}

export default VoicesSection;
