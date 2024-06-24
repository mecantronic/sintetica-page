import styled from 'styled-components';
import theme from '../../../styles/theme';
import { montserratMixin } from '../../../styles/mixins';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  width: 100vw;
  max-width: 100vw;
  padding-bottom: 60px;
`;

export const SectionName = styled.h2`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px 30px;
  background-color: ${theme.colors.details.LavenderWeb};
  gap: 10px;
  border-radius: 12px;
  margin-bottom: 40px;

  ${montserratMixin}
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 21.6px;
  color: ${theme.colors.details.tropicalIndigo};

  @media (max-width: ${theme.bp.l}) {
    padding: 15px 24px;
    margin-bottom: 36px;
    font-size: 16px;
  }

  @media (max-width: ${theme.bp.m}) {
    padding: 15px 16px;
    margin-bottom: 32px;
    font-size: 14px;
  }
`;
