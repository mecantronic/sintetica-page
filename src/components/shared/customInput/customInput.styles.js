import styled from 'styled-components';
import { InputOrTextArea } from './InputOrTextArea';
import theme from '../../../styles/theme';
import { montserratMixin } from '../../../styles/mixins';

export const Input = styled(InputOrTextArea)`
  display: flex;
  width: 100%;
  padding: 15px;
  margin: 0;
  align-items: center;
  border-radius: 15px;
  border: 2px solid ${theme.colors.grayScale[300]};
  background-color: ${theme.colors.backgrounds.white};
  resize: none;

  ${montserratMixin}
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${theme.colors.black.jet};
  outline: 0px solid transparent;

  &:focus {
    border: 2px solid ${theme.colors.details.tropicalIndigo};
  }
  &:not(:placeholder-shown) {
    border: 2px solid ${theme.colors.details.tropicalIndigo};
    color: ${theme.colors.black.jet};
  }

  &:not(:focus):not(:placeholder-shown) {
    border-color: ${theme.colors.details.periwinkle};
  }

  &::placeholder {
    color: ${theme.colors.grayScale[300]};
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 12px;
  }
`;
