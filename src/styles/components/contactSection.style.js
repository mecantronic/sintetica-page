import styled from 'styled-components';
import theme from '../theme';

export const Container = styled.section`
  background: none;
  color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  width: 100vw;

  background-image: url('assets/backgrounds/Background2.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: ${theme.bp.large}) {
    background-size: 30%;
  }
`;

export const NameSection = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${theme.colors.lavenderfloral};
  background-color: ${theme.colors.lavender};
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.raisinblack};
  font-size: 45px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 30px 0;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${theme.bp.small}) {
    line-height: 44px;
    font-size: 36px;
  }
  @media (max-width: ${theme.bp['x-small']}) {
    line-height: 36px;
    font-size: 30px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;
  gap: 10px;
  margin-bottom: 20px;
  background-color: ${theme.colors.white};
  border-radius: 25px;

  @media (max-width: ${theme.bp.large}) {
    width: 90vw;
  }
  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
`;

export const InfoItem = styled.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  border: 2px solid ${theme.colors.platinum};
  border-radius: 20px;
  padding: 0px 18px;
  width: 50%;
  height: 80px;
  @media (max-width: ${theme.bp.medium}) {
    width: 85vw;
  }
`;

export const TagText = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`;

export const TagCTA = styled.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.raisinblack};

  @media (max-width: ${theme.bp['x-small']}) {
    display: none;
  }
`;

export const TagInfo = styled.p`
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.gray};
`;

export const Icon = styled.img`
  align-items: flex-start;
  width: 50px;
`;

export const ContactForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  border: 2px solid ${theme.colors.platinum};
  border-radius: 20px;
  padding: 40px 0px 40px 0px;
  row-gap: 50px;
  column-gap: 20px;
  background-color: ${theme.colors.white};

  @media (max-width: ${theme.bp.large}) {
    width: 90vw;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SmallInput = styled.input`
  height: 40px;
  width: 40%;

  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${theme.colors.platinum};
  color: ${theme.colors.onyx};
  padding: 0 15px;

  @media (max-width: ${theme.bp.medium}) {
    width: calc(80% + 50px);
  }
  @media (max-width: ${theme.bp['x-small']}) {
    width: 80%;
  }
  &::placeholder {
    opacity: 1;
    color: ${theme.colors.platinum};
  }
`;

export const BigInput = styled.textarea`
  width: calc(80% + 50px);
  line-height: 24px;
  border-radius: 15px;
  border: 2px solid ${theme.colors.platinum};
  color: ${theme.colors.onyx};
  padding: 10px 15px;
  @media (max-width: ${theme.bp['x-small']}) {
    width: 80%;
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
