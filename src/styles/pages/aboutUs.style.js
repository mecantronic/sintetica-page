import styled from 'styled-components';
import theme from '../theme';

export const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  background: linear-gradient(
    5deg,
    rgba(165, 116, 255, 0) 65%,
    rgba(165, 116, 255, 0.5) 88.49%
  );
  padding-top: 98px;

  @media (max-width: ${theme.bp.l}) {
    background: ${theme.colors.white};
    padding-top: 96px;
  }
  @media (max-width: ${theme.bp.m}) {
    background: ${theme.colors.white};
    padding-top: 78px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 60px;
  line-height: 63px;
  margin: 0;

  @media (max-width: ${theme.bp.l}) {
    font-size: 42px;
    line-height: 34px;
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 26px;
  line-height: 26px;
  margin: 0;

  @media (max-width: ${theme.bp.l}) {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 0 0 80px 0;
  @media (max-width: ${theme.bp.l}) {
    padding: 0 0 48px 0;
    gap: 24px;
  }

  @media (max-width: ${theme.bp.m}) {
    padding: 0 0 40px 0;
  }
`;

export const SectionText = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 40px;
  @media (max-width: ${theme.bp.l}) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 270px;
  width: 405px;
  border-radius: 12px;
  border: 2px solid ${theme.colors.lavender};
  background: ${theme.colors.white};
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);
  gap: 16px;
  padding: 24px;

  @media (max-width: ${theme.bp.l}) {
    width: 306px;
    height: 350px;
    gap: 8px;
  }
  @media (max-width: ${theme.bp.m}) {
    height: max-content;
    padding: 16px;
    gap: 4px;
  }

  h4 {
    color: ${theme.colors.lightSlateBlue};
    font-weight: 600;
    font-size: 18px;
    margin: 0;
    text-align: center;
    font-family: 'Montserrat';
  }

  p {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    line-height: 22px;
    font-family: 'Montserrat';
  }
`;

export const SectionCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 48px;

  @media (max-width: ${theme.bp.l}) {
    gap: 32px;
  }

  @media (max-width: ${theme.bp.m}) {
    gap: 24px;
  }
`;

export const CardContainerRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
    gap: 24px;
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
    gap: 24px;
  }
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 405px;
  height: 311px;
  border-radius: 12px;
  border: 2px solid ${theme.colors.lavender};
  background: ${theme.colors.white};
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.15);
  padding: 24px;

  @media (max-width: ${theme.bp.l}) {
    width: 337.5px;
    height: 305px;
    border: 1px solid ${theme.colors.lightSlateBlue};
  }
  @media (max-width: ${theme.bp.m}) {
    width: 327px;
    height: 305px;
    border: 1px solid ${theme.colors.lightSlateBlue};
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 24px;
  gap: 4px;

  @media (max-width: ${theme.bp.l}) {
    margin-bottom: 18px;
  }

  h4 {
    margin: 0;
    font-family: 'Montserrat';
  }
  p {
    margin: 0;
    font-family: 'Montserrat';
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
  gap: 48px;
  @media (max-width: ${theme.bp.l}) {
    gap: 24px;
  }

  h4 {
    font-size: 26px;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
    margin: 0;

    @media (max-width: ${theme.bp.l}) {
      font-size: 20px;
    }

    @media (max-width: ${theme.bp.m}) {
      font-size: 14px;
      width: 327px;
    }
  }
`;
