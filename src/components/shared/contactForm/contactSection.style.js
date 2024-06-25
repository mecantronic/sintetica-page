import styled from 'styled-components';
import theme from '../../../styles/theme';
import { quicksandMixin } from '../../../styles/mixins';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.span`
  color: ${theme.colors.black.jet};
  font-size: 48px;
  line-height: 60px;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: ${theme.bp.l}) {
    font-size: 42px;
    line-height: 60px;
  }
  @media (max-width: ${theme.bp.m}) {
    font-size: 24px;
    line-height: normal;
  }
`;

export const ContactInfo = styled.div`
  display: inline-flex;
  align-items: flex-start;
  width: 824px;
  gap: 24px;

  @media (max-width: ${theme.bp.l}) {
    width: 680px;
    gap: 40px;
  }
  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
    min-width: 327px;
    max-width: 584px;
    width: 85vw;
    gap: 16px;
  }
`;

export const InfoItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 2px solid ${theme.colors.details.periwinkle};
  background-color: ${theme.colors.backgrounds.white};
  width: 100%;
  padding: 16px;
  gap: 12px;
  text-decoration: none;

  @media (max-width: ${theme.bp.l}) {
    gap: 16px;
  }
`;

export const Icon = styled.img`
  width: 50px;

  @media (max-width: ${theme.bp.l}) {
    width: 36px;
  }

  @media (max-width: ${theme.bp.m}) {
    width: 24px;
  }
`;

export const TagText = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

export const TagCTA = styled.h6`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.black.jet};
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: ${theme.bp.l}) {
    display: none;
  }
`;

export const TagInfo = styled.p`
  color: ${theme.colors.grayScale[700]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: ${theme.bp.l}) {
    ${quicksandMixin}
    color: ${theme.colors.black.jet};
    font-weight: 600;
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 12px;
  }
`;
export const BackgroundFormContainer = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.gradients.central};
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 824px;
  height: 500px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 2px solid ${theme.colors.details.periwinkle};
  background-color: ${theme.colors.backgrounds.white};
  gap: 38px;
  padding: 48px 40px 38px 40px;

  @media (max-width: ${theme.bp.l}) {
    width: 680px;
    height: 464px;
    gap: 40px;
    padding: 40px 24px;
  }

  @media (max-width: ${theme.bp.m}) {
    min-width: 327px;
    max-width: 584px;
    width: 85vw;
    height: 584px;
    gap: 24px;
  }
`;

export const FormRow = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  gap: 24px;

  @media (max-width: ${theme.bp.l}) {
    gap: 32px;
  }

  @media (max-width: ${theme.bp.m}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;
