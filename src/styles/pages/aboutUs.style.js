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
@media (max-width: ${theme.bp.l}) {
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
  @media (max-width: ${theme.bp.l}) {
   flex-wrap: wrap;
   justify-content: center;
  }

  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
   }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 266px;
  width: 401px;
  border-radius: 12px;
  border: 2px solid  ${theme.colors.lavender};
  background:  ${theme.colors.white};
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);
  gap: 16px;


  @media (max-width: ${theme.bp.l}) {
    width: 302px;
    height: 346px;
   }
  @media (max-width: ${theme.bp.m}) {
    width: 302px;
    height: max-content;
   }

  h4 {
    color: ${theme.colors.lightSlateBlue};
    font-weight: 600;
    font-size: 18px;
    margin: 0;
    text-align: center;
    margin-top: 24px;
  }

  p {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    width: 357px;
    line-height: 22px;

    @media (max-width: ${theme.bp.l}) {
      width: 258px;
      min-height: 350px;
   }
    
    @media (max-width: ${theme.bp.m}) {
        width: 274px;
        min-height: 198px;
        margin-bottom: 16px;
    }

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
  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
   }
`;

export const CardContainerSecondRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  @media (max-width: ${theme.bp.l}) {
   flex-wrap: wrap;
  }
  @media (max-width: ${theme.bp.m}) {
   flex-direction: column;
  }
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 401px;
  height: 307px;
  border-radius: 12px;
  border: 2px solid  ${theme.colors.lavender};
  background:  ${theme.colors.white};
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);

  @media (max-width: ${theme.bp.l}) {
   width: 335.5px;
   height: 303px;
   border: 1px solid ${theme.colors.lightSlateBlue};
  }
  @media (max-width: ${theme.bp.m}) {
   width: 325px;
   height: 303px;
   border: 1px solid ${theme.colors.lightSlateBlue};
  }


`;

export const CardImage = styled.div`
  img {
    border-radius: 50%;
    width: 125px;
    height: 125px;
    margin-top: 24px;
  }
`;

export const CardText = styled.div`
  text-align: center;
  margin: 16px 0 24px 0;
  h4 {
    margin: 0;
    margin-bottom: 4px;
  }
  p {
    margin: 0;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
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

 @media (max-width: ${theme.bp.l}) {
  h4{
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
  }
  }
`;