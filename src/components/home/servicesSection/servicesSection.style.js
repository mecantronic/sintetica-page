import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.section`
  color: ${theme.colors.electricindigo};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (max-width: ${theme.bp.m}) {
    gap: 40px;
  }
`;

export const Banner = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 88%;
  min-width: 1058px;
  max-width: 1110px;

  @media (max-width: ${theme.bp.l}) {
    flex-direction: column;
    width: 636px;
    min-width: min-content;
  }

  @media (max-width: ${theme.bp.m}) {
    min-width: 300px;
    max-width: 456px;
    width: 80%;
  }
`;

export const BannerImg = styled.img`
  width: 33%;
  max-width: 400px;
  min-width: 350px;

  @media (max-width: ${theme.bp.l}) {
    max-width: 500px;
    min-width: 400px;
    width: 49vw;
  }

  @media (max-width: ${theme.bp.m}) {
    min-width: 300px;
    width: 300px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 636px;
  gap: 20px;

  @media (max-width: ${theme.bp.m}) {
    width: 100%;
  }
`;

export const BannerTitle = styled.h4`
  width: 100%;
  color: ${theme.colors.black.jet};
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  text-transform: uppercase;

  @media (max-width: ${theme.bp.l}) {
    font-size: 42px;
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 24px;
    line-height: normal;
  }
`;
export const BannerResume = styled.p`
  width: 100%;
  color: ${theme.colors.black.jet};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  strong {
    display: flex;
    font-weight: 700;
    line-height: 28px;
  }

  @media (max-width: ${theme.bp.l}) {
    font-size: 16px;
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 12px;
    line-height: 22px;
  }
`;

export const Services = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;
