import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Timer = styled.div`
  font-size: 70%;
  font-weight: 200;
  color: ${(props) =>
    props.light ? theme.colors.gray : theme.colors.lavender};
`;

export const BTNContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  color: ${(props) => (props.light ? theme.colors.gray : theme.colors.white)};
  font-size: 180%;
`;