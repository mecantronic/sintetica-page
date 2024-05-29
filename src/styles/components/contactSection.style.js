import styled from 'styled-components';
import theme from '../theme';

export const Container = styled.section`
  background: none;
  color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  width: 100vw;
  background: linear-gradient(183deg, rgba(165, 116, 255, 0.00) 12.07%, rgba(165, 116, 255, 0.30) 49.85%, rgba(165, 116, 255, 0.00) 87.52%);

`;

export const NameSection = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 58px;
  margin: 0;
  border-radius: 12px;
  color: ${theme.colors.lavenderfloral};
  background-color: ${theme.colors.lavender};
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.raisinblack};
  font-size: 48px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 36px 0 34px 0;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${theme.bp.l}) {
    line-height: 60px;
    font-size: 42px;
  }
  @media (max-width: ${theme.bp.m}) {
    line-height: 30px;
    font-size: 24px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 824px;
  gap: 10px;
  margin-bottom: 24px;
  border-radius: 25px;

  @media (max-width: ${theme.bp.l}) {
    width: 680px;
  }
  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
    width: 327px;
  }
`;

export const InfoItem = styled.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  border: 2px solid ${theme.colors.lightSlateBlue + '59'};
  background-color: ${theme.colors.white};

  border-radius: 20px;
  padding: 0px 18px;
  width: 400px;
  height: 80px;
  @media (max-width: ${theme.bp.l}) {
    width: 320px;
  }
  @media (max-width: ${theme.bp.l}) {
    width: 327px;
  }
`;

export const TagText = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  @media (max-width: ${theme.bp.l}) {
    justify-content: flex-start;
  }
`;

export const TagCTA = styled.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.jet};

  @media (max-width: ${theme.bp.l}) {
    display: none;
  }
`;

export const TagInfo = styled.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.jet};

  @media (max-width: ${theme.bp.l}) {
    margin: 0;
  }
  @media (max-width: ${theme.bp.m}) {
    font-size: 12px;
    line-height: 22px;
  }
`;

export const Icon = styled.img`
  align-items: flex-start;
  width: 48px;
`;

export const ContactForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 824px;
  border: 2px solid ${theme.colors.lightSlateBlue + '59'};
  border-radius: 20px;
  padding: 40px 0px 40px 0px;
  row-gap: 48px;
  column-gap: 20px;
  background-color: ${theme.colors.white};

  @media (max-width: ${theme.bp.l}) {
    width: 680px;
    gap: 32px;
  }
  @media (max-width: ${theme.bp.m}) {
    width: 327px;
    gap: 24px;
    padding-top: 24px;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SmallInput = styled.input`
  height: 45px;
  width: 360px;

  line-height: 17px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 15px;
  border: 2px solid ${props => props.borderColor};
  color: ${theme.colors.onyx};
  padding: 0 15px;

  @media (max-width: ${theme.bp.l}) {
    width: 300px;
  }
  @media (max-width: ${theme.bp.m}) {
    width: 295px;
  }

  &:focus {
    outline: none;
    border: 2px solid ${theme.colors.lightSlateBlue};
  }

  &::placeholder {
    opacity: 1;
    color: ${theme.colors.platinum};
  }
`;

export const BigInput = styled.textarea`
  width: 744px;
  line-height: 17px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 15px;
  border: 2px solid ${props => props.borderColor};
  color: ${theme.colors.onyx};
  padding: 10px 15px;

  @media (max-width: ${theme.bp.l}) {
    width: 632px;
  }

  @media (max-width: ${theme.bp.m}) {
    width: 295px;
  }

  &:focus {
    outline: none;
    border: 2px solid ${theme.colors.lightSlateBlue};
  }

  &::placeholder {
    opacity: 1;
    color: ${theme.colors.platinum};
  }
`;

export const ContatcButton = styled.button`
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  vertical-align: middle;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 0px;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: ${theme.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  background: linear-gradient(
    to right,
    ${theme.colors.electricindigo} 0%,
    ${theme.colors.lavenderfloral} 100%
  );
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;
