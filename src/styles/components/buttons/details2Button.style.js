import styled from 'styled-components';
import theme from '../../theme';

export const Button = styled.div`
  button {
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    vertical-align: middle;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    border: 0px;
    padding: 0 32px;
    font-family: 'Quicksand';
    font-size: 14px;
    font-weight: 700;
    line-height: 36px;
    color: ${theme.colors.white};
    border-radius: ${(props) => (props.square ? '8px' : '20px')};
    cursor: pointer;
    transition: all 0.4s ease-out 0s;
    background: linear-gradient(
      to right,
      ${theme.colors.electricindigo} 0%,
      ${theme.colors.lavenderfloral} 100%
    );
    text-decoration: none;
    position: relative;
    height: ${(props) => (props.small ? '42px' : 'auto')};
    width: ${(props) => (props.small ? '215px' : 'auto')};

    &::before {
      border-radius: 20px;
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
  }
`;
