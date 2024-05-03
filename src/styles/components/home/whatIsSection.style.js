import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  color: ${theme.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: ${theme.bp.large}) {
    padding-top: 100px;
  }
  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
  @media (max-width: ${theme.bp.small}) {
    margin-top: 100px;
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 80vw;
  @media (max-width: ${theme.bp.medium}) {
    flex-direction: column;
  }
`;
export const BalloonCloud = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 400px;
  @media (max-width: ${theme.bp.medium}) {
    width: 90%;
    height: 400px;
  }
  @media (max-width: ${theme.bp['x-small']}) {
    width: 90%;
    height: 250px;
  }
`;

export const Balloons = styled.img`
  position: relative;
  width: 400px;
  @media (max-width: ${theme.bp.large}) {
    width: 350px;
  }
  @media (max-width: ${theme.bp.small}) {
    width: 90vw;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  padding-left: 10%;

  @media (max-width: ${theme.bp.large}) {
    width: 90%;
  }
  @media (max-width: ${theme.bp.medium}) {
    width: 90%;
    padding: 0;
  }
`;

export const NameSection = styled.h3`
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

export const TitleWhat = styled.h3`
  font-size: 46px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${theme.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: ${theme.bp.small}) {
    line-height: 44px;
    font-size: 36px;
  }
  @media (max-width: ${theme.bp['x-small']}) {
    line-height: 36px;
    font-size: 30px;
  }
`;
export const ResumeWhat = styled.div`
  width: 100%;
  text-align: left;
  margin: 0;
  padding: 20px 0px;
  p {
    font-size: 18px;
    line-height: 30px;
    color: ${theme.colors.gray};
    margin: 0;
  }
`;

export const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;

  padding-bottom: 20px;
  margin: 20px 0px;
  border: 2px solid ${theme.colors.platinum};
  background-color: ${theme.colors.seasalt};
  border-radius: 20px;
  padding: 15px;
  padding-top: 40px;

  @media (max-width: ${theme.bp.large}) {
    width: 80vw;
  }

  @media (max-width: ${theme.bp.small}) {
    width: 60vw;
    flex-direction: column;
    align-items: center;
  }
`;
export const ServiceIcon = styled.img`
  width: 150px;
  height: 150px;
  padding-right: 15px;
  @media (max-width: ${theme.bp.small}) {
    padding: 0;
  }
`;

export const ServiceCTA = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceTitle = styled.h5`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.raisinblack};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
`;
export const ServiceResume = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: ${theme.colors.gray};
  padding-top: 3px;
  margin: 0;
`;

export const PositionBTN = styled.div`
  height: 35px;
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`;
