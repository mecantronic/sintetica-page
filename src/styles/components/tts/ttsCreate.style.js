import styled from "styled-components";
import theme from "../../theme";

export const VewPort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${theme.colors.lavender};
  min-height: 80vh;
  min-width: 80vw;
  border-radius: 8px;
  padding: 20px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

export const FileSection = styled.div`
  grid-area: file;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-top: 1px solid ${theme.colors.lavenderfloral};
  border-left: 1px solid ${theme.colors.lavenderfloral};
  border-radius: 8px 0px 0px 0px;
  padding: 10px;
`;

export const TextSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 0px 0px 8px;
  border-top: 1px solid ${theme.colors.lavenderfloral};
  border-bottom: 1px solid ${theme.colors.lavenderfloral};
  border-left: 1px solid ${theme.colors.lavenderfloral};
`;
export const OptionSection = styled.div`
  width: 28%;
  border: 1px solid ${theme.colors.lavenderfloral};
  border-radius: 0px 8px 8px 0px;
`;