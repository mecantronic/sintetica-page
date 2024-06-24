import styled from 'styled-components';
import { ButtonOrLink } from './ButtonOrLink';
import theme from '../../../styles/theme';

export const CustomButtonStyle = styled(ButtonOrLink)`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  white-space: nowrap;
  text-transform: ${(props) =>
    (props.pattern === 'rounded' || props.pattern === 'cto-rounded') &&
    'uppercase'};
  vertical-align: middle;
  border: 0px;
  padding: ${(props) =>
    props.pattern === 'cto-rounded'
      ? '8px 32px'
      : props.pattern === 'square'
        ? '0px'
        : props.device === 'mobile'
          ? '0px 24px'
          : '0px 32px'};
  border-radius: ${(props) =>
    props.pattern === 'cto-rounded'
      ? '25px'
      : props.pattern === 'rounded'
        ? '20px'
        : '8px'};

  font-size: ${(props) =>
    props.pattern === 'cto-rounded'
      ? props.device === 'mobile'
        ? '16px'
        : '18px'
      : props.device === 'mobile'
        ? '14px'
        : '16px'};
  font-weight: 700;
  line-height: ${(props) => (props.pattern === 'square' ? '24px' : '36px')};
  font-family: 'Quicksand', sans-serif;
  color: ${(props) =>
    props.buttontype === 'tertiary'
      ? theme.colors.main.primary
      : theme.colors.backgrounds.white};
  background: ${(props) =>
    props.buttontype === 'tertiary'
      ? theme.colors.details.LavenderWeb
      : props.buttontype === 'secondary'
        ? theme.colors.grayScale[900]
        : theme.gradients.primary};

  transition: all 0.4s ease-out 0s;
  width: ${(props) =>
    props.pattern === 'square' &&
    (props.device === 'mobile'
      ? '144px'
      : props.device === 'tablet'
        ? '326px'
        : '532px')};
  height: ${(props) =>
    props.pattern === 'square' ? '42px' : props.device === 'all' && '32px'};
  cursor: pointer;

  &::before {
    border-radius: ${(props) =>
      props.pattern === 'cto-rounded'
        ? '25px'
        : props.pattern === 'rounded'
          ? '20px'
          : '8px'};
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
