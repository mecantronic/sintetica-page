import styled from 'styled-components';
import theme from '../../../styles/theme';

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 215px 0px;
  height: 633px;
  width: 100vw;
  position: relative;

  @media (max-width: ${theme.bp.l}) {
    height: auto;
    padding: 40px 0px 0px 0px;
  }

  @media (max-width: ${theme.bp.m}) {
    padding-top: 58px;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 906px;
  height: 633px;
  background: radial-gradient(
    200% 200% at -20% 120%,
    rgba(165, 116, 255, 0) 60.15%,
    rgba(165, 116, 255, 0.5) 68.44%,
    rgba(165, 116, 255, 0.5)
  );

  @media (max-width: ${theme.bp.l}) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 285px;
  width: 72%;
  max-width: 1035px;
  min-width: 939px;

  @media (max-width: ${theme.bp.l}) {
    height: auto;
    flex-direction: column;
    max-width: 720px;
    min-width: 661px;
    gap: 60px;
  }

  @media (max-width: ${theme.bp.m}) {
    max-width: 456px;
    min-width: 295px;
    gap: 32px;
  }
`;

export const BrandContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 283px;
`;

export const SinteticaLogo = styled.img`
  width: 205px;
`;

export const BrandName = styled.h6`
  color: ${theme.colors.black.night};
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;

  @media (max-width: ${theme.bp.m}) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const BrandTagLine = styled.p`
  color: ${theme.colors.main.primary};
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 25.904px;
  text-transform: uppercase;

  @media (max-width: ${theme.bp.m}) {
    font-size: 16px;
    line-height: 16px;
  }
`;

export const CTOContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 553px;
  height: 285px;
  gap: 37px;

  @media (max-width: ${theme.bp.l}) {
    width: 100%;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: start;

  @media (max-width: ${theme.bp.l}) {
    gap: 16px;
  }

  @media (max-width: ${theme.bp.m}) {
    gap: 8px;
  }
`;

export const EmphasisText = styled.span`
  width: 553px;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px /* 127.273% */;
  color: ${theme.colors.black.jet};

  @media (max-width: ${theme.bp.l}) {
    width: 100%;
    max-width: 680px;
    font-size: 48px;
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const SimpleText = styled.p`
  width: 553px;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px /* 127.273% */;
  color: ${theme.colors.black.jet};

  @media (max-width: ${theme.bp.l}) {
    width: 100%;
    font-size: 18px;
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  align-self: stretch;

  @media (max-width: ${theme.bp.l}) {
    display: none;
  }
`;
