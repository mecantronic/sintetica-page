import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.section`
  background: ${theme.gradients.hero};
  color: ${theme.colors.electricindigo};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 72px);

  @media (max-width: ${theme.bp.l}) {
    height: auto;
    background: none;
    margin-bottom: 48px;
  }
`;

export const ContentContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  min-width: 1095px;
  max-width: 1185px;
  width: 90%;
  height: 500px;

  @media (max-width: ${theme.bp.l}) {
    flex-direction: column;
    height: fit-content;
    gap: 24px;
    padding: 24px 0;
    min-width: 661px;
    max-width: 784px;
    width: 80%;
  }

  @media (max-width: ${theme.bp.m}) {
    width: 100vw;
    min-width: 375px;
    padding: 24px;
  }
`;

export const HeroIMG = styled.img`
  min-width: 400px;
  max-width: 500px;
  width: 36.5%;

  @media (max-width: ${theme.bp.l}) {
    width: 450px;
  }

  @media (max-width: ${theme.bp.m}) {
    min-width: 300px;
    width: 300px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 637px;
  gap: 36px;

  @media (max-width: ${theme.bp.l}) {
    width: 100%;
  }

  @media (max-width: ${theme.bp.m}) {
    max-width: 456px;
    min-width: 327px;
  }
`;

export const TitleDetails = styled.h3`
  color: ${theme.colors.black.jet};
  font-size: ${(props) => (props.isMaintenance ? '60px' : '56px')};
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  white-space: pre-line;

  @media (max-width: ${theme.bp.l}) {
    font-size: 48px;
    width: 465px;
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 42px;
    line-height: 48px;
    width: 100%;
  }
`;
export const ResumeDetails = styled.p`
  color: ${theme.colors.black.jet};
  font-size: ${(props) => (props.isMaintenance ? '42px' : '18px')};
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  @media (max-width: ${theme.bp.l}) {
    ${(props) => (props.isMaintenance ? '36px' : '18px')}
  }

  @media (max-width: ${theme.bp.l}) {
    ${(props) => (props.isMaintenance ? '24px' : '18px')}
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(props) => (props.isMaintenance ? '32px' : '16px')};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${theme.bp.l}) {
    display: none;
  }
`;
