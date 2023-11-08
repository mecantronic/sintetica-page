import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.section`
  background-color: ${theme.colors.white};
  color: ${theme.colors.electricindigo};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: ${theme.bp.large}) {
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: ${theme.bp.small}) {
    padding-top: 80px;
  }
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 30px;
  margin: 0;
  border-radius: 25px;
  color: ${theme.colors.lavenderfloral};
  background-color: ${theme.colors.lavender};
`;

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
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: ${theme.colors.raisinblack};
`;
export const ItemText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.electricindigo};
`;
