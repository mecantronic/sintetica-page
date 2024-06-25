import {
  AudioItem,
  Item,
  ItemText,
  ItemTitle,
  VoicesContainer,
} from './voicesSection.style';
import { useTranslation } from 'react-i18next';

function VoicesSection() {
  const { t } = useTranslation(['voiceCloning', 'data']);

  return (
    <VoicesContainer>
      <Item>
        <AudioItem controls>
          <source src="audios-voice/fem1.wav" type="audio/mpeg" />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.first')}</ItemTitle>
        <ItemText>{t('voices.type.real')}</ItemText>
      </Item>

      <Item>
        <AudioItem controls>
          <source
            src="audios-voice/fem1_cloned(enhanced).wav"
            type="audio/mpeg"
          />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.first')}</ItemTitle>
        <ItemText>{t('voices.type.ia')}</ItemText>
      </Item>

      <Item>
        <AudioItem controls>
          <source src="audios-voice/mas1.wav" type="audio/mpeg" />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.second')}</ItemTitle>
        <ItemText>{t('voices.type.real')}</ItemText>
      </Item>

      <Item>
        <AudioItem controls>
          <source
            src="audios-voice/mas1_cloned(enhanced).wav"
            type="audio/mpeg"
          />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.second')}</ItemTitle>
        <ItemText>{t('voices.type.ia')}</ItemText>
      </Item>

      <Item>
        <AudioItem controls>
          <source src="audios-voice/fem2.wav" type="audio/mpeg" />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.third')}</ItemTitle>
        <ItemText>{t('voices.type.real')}</ItemText>
      </Item>

      <Item>
        <AudioItem controls>
          <source
            src="audios-voice/fem2_cloned(enhanced).wav"
            type="audio/mpeg"
          />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.third')}</ItemTitle>
        <ItemText>{t('voices.type.ia')}</ItemText>
      </Item>

      <Item>
        <AudioItem controls>
          <source src="audios-voice/mas2.wav" type="audio/mpeg" />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.fourth')}</ItemTitle>
        <ItemText>{t('voices.type.real')}</ItemText>
      </Item>

      <Item>
        <AudioItem controls>
          <source
            src="audios-voice/mas2_cloned(enhanced).wav"
            type="audio/mpeg"
          />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.fourth')}</ItemTitle>
        <ItemText>{t('voices.type.ia')}</ItemText>
      </Item>

      <Item>
        <AudioItem controls>
          <source src="audios-voice/fem3.wav" type="audio/mpeg" />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.fifth')}</ItemTitle>
        <ItemText>{t('voices.type.real')}</ItemText>
      </Item>

      <Item>
        <AudioItem controls>
          <source
            src="audios-voice/fem3_cloned(enhanced).wav"
            type="audio/mpeg"
          />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.fifth')}</ItemTitle>
        <ItemText>{t('voices.type.ia')}</ItemText>
      </Item>

      <Item>
        <AudioItem controls>
          <source src="audios-voice/mas3.wav" type="audio/mpeg" />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.sixth')}</ItemTitle>
        <ItemText>{t('voices.type.real')}</ItemText>
      </Item>

      <Item>
        <AudioItem controls>
          <source
            src="audios-voice/mas3_cloned(enhanced).wav"
            type="audio/mpeg"
          />
          {t('error')}
        </AudioItem>
        <ItemTitle>{t('voices.name.sixth')}</ItemTitle>
        <ItemText>{t('voices.type.ia')}</ItemText>
      </Item>
    </VoicesContainer>
  );
}

export default VoicesSection;
