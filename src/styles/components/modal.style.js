import styled from 'styled-components';
import theme from '../theme';

export const ModalOverlay = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  border-radius: 20px;
  box-shadow:
    0 2px 10px 0 rgba(0, 0, 0, 0.3),
    0 4px 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const CloseIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${theme.colors.onyx};
  z-index: 12;
`;
