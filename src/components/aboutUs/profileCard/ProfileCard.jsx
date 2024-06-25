import { PropTypes } from 'prop-types';
import {
  CardContainer,
  CardImg,
  Icon,
  InfoSection,
  ProfileInfo,
  ProfileName,
  ProfileRole,
  SocialSection,
} from './profileCard.styles';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';

function ProfileCard({
  imgUrl,
  profileName,
  profileRole,
  profileLinkedin,
  profileGithub,
  profileEmail,
}) {
  return (
    <CardContainer>
      <CardImg imgUrl={imgUrl} />
      <InfoSection>
        <ProfileInfo>
          <ProfileName>{profileName}</ProfileName>
          <ProfileRole>{profileRole}</ProfileRole>
        </ProfileInfo>
        <SocialSection>
          <Icon href={profileLinkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </Icon>
          <Icon href={profileGithub} target="_blank" rel="noreferrer">
            <FiGithub />
          </Icon>
          <Icon href={profileEmail} target="_blank" rel="noreferrer">
            <MdMailOutline />
          </Icon>
        </SocialSection>
      </InfoSection>
    </CardContainer>
  );
}
ProfileCard.propTypes = {
  imgUrl: PropTypes.string,
  profileName: PropTypes.string,
  profileRole: PropTypes.string,
  profileLinkedin: PropTypes.string,
  profileGithub: PropTypes.string,
  profileEmail: PropTypes.string,
};
export default ProfileCard;
