import { useTranslation } from 'react-i18next';
import {
  BackgroundGradient,
  BrandName,
  CardsContainer,
  Container,
  Resume,
  SectionTitle,
} from './aboutUsContent.styles';
import CustomButton from '../../shared/customButtons/CustomButton';
import InfoCard from '../infoCard/InfoCard';

import teamInfo from '../teamInfo';
import ProfileCard from '../profileCard/ProfileCard';
import { useDispatch } from 'react-redux';
import { contactModal } from '../../../redux/modalSlice';

function AboutUsContent() {
  const { t: brandTranslation } = useTranslation(['brand']);
  const { t: aboutTranslation } = useTranslation(['about']);
  const dispatch = useDispatch();

  const handleOpenContact = () => {
    dispatch(contactModal());
  };

  return (
    <>
      <Container>
        <BrandName>{brandTranslation('name')}</BrandName>
        <SectionTitle>{aboutTranslation('title.who')}</SectionTitle>
        <CardsContainer>
          <InfoCard
            title={aboutTranslation('card-info.technology.title')}
            content={aboutTranslation('card-info.technology.content')}
          />
          <InfoCard
            title={aboutTranslation('card-info.mission.title')}
            content={aboutTranslation('card-info.mission.content')}
          />
          <InfoCard
            title={aboutTranslation('card-info.value.title')}
            content={aboutTranslation('card-info.value.content')}
          />
        </CardsContainer>
        <SectionTitle>{aboutTranslation('title.team')}</SectionTitle>

        <CardsContainer>
          {teamInfo.slice(0, 2).map((item, index) => (
            <ProfileCard
              key={index}
              imgUrl={item.imageUrl}
              profileName={item.name}
              profileRole={item.role}
              profileLinkedin={item.linkedin}
              profileGithub={item.github}
              profileEmail={item.email}
            />
          ))}
        </CardsContainer>
        <CardsContainer>
          {teamInfo.slice(2, 5).map((item, index) => (
            <ProfileCard
              key={index}
              imgUrl={item.imageUrl}
              profileName={item.name}
              profileRole={item.role}
              profileLinkedin={item.linkedin}
              profileGithub={item.github}
              profileEmail={item.email}
            />
          ))}
        </CardsContainer>

        <Resume>{aboutTranslation('paragraph')}</Resume>

        <CustomButton
          buttonText={aboutTranslation('buttonText')}
          pattern="cto-rounded"
          handleClick={handleOpenContact}
        />
      </Container>
      <BackgroundGradient />
    </>
  );
}

export default AboutUsContent;
