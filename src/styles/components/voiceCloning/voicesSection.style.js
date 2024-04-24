import styled from "styled-components";
import theme from "../../theme";


export const VocesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0px;
  max-width: 90vw;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 330px;
  padding: 15px;
  background-color: ${theme.colors.seasalt};
  border-radius: 15px;
  box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.15);
  
`;

export const AudioItem = styled.audio`
  width: 330px;
`;

export const ItemTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: ${theme.colors.jet};
`;
export const ItemText = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.mediumstateblue};
`;
