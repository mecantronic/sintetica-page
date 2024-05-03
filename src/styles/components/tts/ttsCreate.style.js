import styled from 'styled-components';
import theme from '../../theme';

export const VewPort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  padding: 0px 0px 100px 0px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${theme.colors.lavender};

  min-width: 80vw;
  border-radius: 8px;
  padding: 20px;

  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;

  @media (max-width: ${theme.bp.medium}) {
    width: 100%;
  }
`;

export const FileSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid ${theme.colors.lavenderfloral};
  border-left: 1px solid ${theme.colors.lavenderfloral};
  border-radius: 8px 0px 0px 0px;
  padding: 10px;

  @media (max-width: ${theme.bp.medium}) {
    border-top: 1px solid ${theme.colors.lavenderfloral};
    border-left: 1px solid ${theme.colors.lavenderfloral};
    border-right: 1px solid ${theme.colors.lavenderfloral};
    border-radius: 8px 8px 0px 0px;
  }
`;

export const TextSection = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  border-radius: 0px 0px 0px 8px;
  border-top: 1px solid ${theme.colors.lavenderfloral};
  border-bottom: 1px solid ${theme.colors.lavenderfloral};
  border-left: 1px solid ${theme.colors.lavenderfloral};

  @media (max-width: ${theme.bp.medium}) {
    border-left: 1px solid ${theme.colors.lavenderfloral};
    border-right: 1px solid ${theme.colors.lavenderfloral};
    border-bottom: none;
    border-radius: 0px 0px 0px 0px;
    min-height: 0;
    padding: 20px 0px;
  }
`;

export const TtsInput = styled.textarea`
  height: 95%;
  width: 95%;
  line-height: 24px;
  border-radius: 8px;
  border: 2px solid ${theme.colors.platinum};
  color: ${theme.colors.onyx};
  box-sizing: border-box;
  padding: 20px;
  resize: none;
  &::placeholder {
    opacity: 1;
    color: ${theme.colors.platinum};
  }

  @media (max-width: ${theme.bp.medium}) {
    height: 400px;
  }
`;
export const OptionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  border: 1px solid ${theme.colors.lavenderfloral};
  border-radius: 0px 8px 8px 0px;
  position: relative;
  @media (max-width: ${theme.bp.medium}) {
    width: auto;
    border-left: 1px solid ${theme.colors.lavenderfloral};
    border-right: 1px solid ${theme.colors.lavenderfloral};
    border-bottom: 1px solid ${theme.colors.lavenderfloral};
    border-radius: 0px 0px 0px 0px;
    height: 120px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  gap: 20px;

  @media (max-width: ${theme.bp.medium}) {
    flex-direction: row;
  }
`;

export const BNTSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 2%;
  @media (max-width: ${theme.bp.medium}) {
    bottom: 10%;
  }
`;

export const LoginToUse = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 20%;
`;

export const CTAText = styled.span`
  font-size: 30px;
  color: ${theme.colors.lavenderfloral};
`;
