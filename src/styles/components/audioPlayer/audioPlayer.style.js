import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 8px 0;
`;
export const AudioContainerLeft = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.light ? theme.colors.lavender : theme.colors.onyx};
  border-radius: 4px;
  padding: 6px 8px 4px 8px;
`;
