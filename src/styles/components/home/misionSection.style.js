import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  background: none;
  color: ${theme.colors.electricindigo};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  margin-top: 200px;
  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
`;

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  height: 400px;

  @media (max-width: ${theme.bp.large}) {
    width: 80%;
  }
  @media (max-width: ${theme.bp.small}) {
    margin-top: 100px;
  }
`;

export const HeroIMG = styled.img`
  width: 600px;
  @media (max-width: ${theme.bp.large}) {
    padding-bottom: 200px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60vw;

  @media (max-width: ${theme.bp.large}) {
    width: 90%;
  }
`;

export const TitleDetails = styled.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  padding-top: 5px;
  margin: 0;
  margin-bottom: 50px;
  @media (max-width: ${theme.bp['x-small']}) {
    font-size: 40px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;

  @media (max-width: ${theme.bp['x-small']}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ItemIcon = styled.img`
  width: 150px;
  height: 150px;
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h5`
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
`;
export const ItemResume = styled.p`
  font-size: 18px;
  line-height: 30px;
  padding-top: 3px;
  margin: 0;
`;
