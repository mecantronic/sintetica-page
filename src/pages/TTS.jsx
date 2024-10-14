import TtsBanner from '../components/tts/TtsBannerSection';
// import TtsCreate from "../components/tts/TtsCreate";
// import Ctatts from '../components/tts/cta/Ctatts';
import { PageContainer } from '../components/shared/sharedComponents.styles';

import CustomSection from '../components/shared/customSection/CustomSection';
import TtsService from '../components/tts/TtsService';

function Tts() {
  return (
    <PageContainer>
      <TtsBanner />

      <CustomSection sectionTitle={'Probá nuestro TTS de forma gratuita'}>
        {/* <Ctatts /> */}
        {/* <TtsCreate /> */}
        <TtsService />
      </CustomSection>

    </PageContainer>
  );
}

export default Tts;
