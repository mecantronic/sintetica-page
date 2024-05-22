import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'react-router-dom';

export const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
background: linear-gradient(5deg, rgba(165, 116, 255, 0.00) 65%, rgba(165, 116, 255, 0.50) 88.49%);
padding-top: 86px;
@media (max-width: 1440px) {
   background: ${theme.colors.white};
  }
`


export const Title = styled.p`
text-align: center;
font-weight: 600;
font-size: 48px;
line-height: 63px;
margin: 0px 0px 48px 0px;
`;

export const SubTitle = styled.p`
text-align: center;
font-weight: 600;
font-size: 24px;
line-height: 26px;
margin: 0;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:  center;
  margin: 0 0 80px 0;
`;

export const SectionText = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 40px;
  margin-top: 48px;
  @media (max-width: 1440px) {
   flex-wrap: wrap;
   justify-content: center;
  }

  @media (max-width: 820px) {
    flex-direction: column;
   }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 270px;
  width: 405px;
  border-radius: 12px;
  padding: 24px;
  border: 2px solid  ${theme.colors.lavender};
  background:  ${theme.colors.white};
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);
  @media (max-width: 1440px) {
   width: 300px;
  min-height: 350px;
  }

  h4 {
    color: #a574ff;
    font-weight: 600;
    font-size: 18px;
  }

  p {
    text-align: center;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }
`;

export const SectionCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 48px;
  padding: 50px 0px;
`;

export const CardContainerRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  @media (max-width: 820px) {
    flex-direction: column;
   }
`;

export const CardContainerSecondRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  @media (max-width: 1440px) {
   flex-wrap: wrap;
  }
  @media (max-width: 820px) {
   flex-direction: column;
  }
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  border-radius: 12px;
  border: 2px solid  ${theme.colors.lavender};
  background:  ${theme.colors.white};
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);
  padding: 24px;
  gap: 12px;

  @media (max-width: 1440px) {
   width: 330px;
   height: 305px;
   border: 1px solid #A574FF;
  }


`;

export const CardImage = styled.div`
  img {
    border-radius: 50%;
    width: 125px;
    height: 125px;
  }
`;

export const CardText = styled.div`
  text-align: center;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.raisinblack};
  border: 1px solid ${theme.colors.raisinblack};
  border-radius: 50px;
  margin: 0 5px;

  &:hover {
    color: ${theme.colors.electricindigo};
    border-color: ${theme.colors.electricindigo};
  }
`;

export const SectionContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 @media (max-width: 1440px) {
  h4{
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
  }
  }

  /* margin-bottom: 80px */
`;

export const NavLink = styled(Link)`
  padding: 8px 32px 8px 32px;
  border-radius: 25px;
  background: linear-gradient(to right, #5236ff 0%, #a574ff 100%);
  font-size: 18px;
  font-weight: 700;
  line-height: 36px;
  text-decoration: none;
  color: #fefeff;
`;
