import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  color: ${theme.colors.electricindigo};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: ${theme.bp.l}) {
  }
  @media (max-width: ${theme.bp.m}) {
    
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 80vw;
  gap: 74px;
  @media (max-width: ${theme.bp.l}) {
    flex-direction: column;
    gap: 0;
  }
`;
export const BalloonCloud = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
  @media (max-width: ${theme.bp.l}) {
    width: 400px;
  }
  @media (max-width: ${theme.bp.m}) {
    width: 300px;
    height: 300px;
  }
`;

export const Balloons = styled.img`
  position: relative;
  width: 400px;

  @media (max-width: ${theme.bp.m}) {
    width: 300px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 636px;

  @media (max-width: ${theme.bp.l}) {
    margin-bottom: 60px;
  }
  @media (max-width: ${theme.bp.m}) {
    margin-bottom: 40px;
  }
`;

export const NameSection = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 14px;
  margin: 0;
  border-radius: 12px;
  color: ${theme.colors.lavenderfloral};
  background-color: ${theme.colors.lavender};
`;

export const TitleWhat = styled.h3`
  font-size: 48px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${theme.colors.raisinblack};
  padding-top: 5px;
  margin: 0;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: ${theme.bp.l}) {
    line-height: 60px;
    font-size: 42px;
  }
  @media (max-width: ${theme.bp.m}) {
    line-height: 30px;
    font-size: 24px;
    width: 300px;
  }
`;
export const ResumeWhat = styled.div`
  text-align: left;
  margin: 0;
  padding: 20px 0px;

  @media (max-width: ${theme.bp.m}) {
      padding-bottom: 0;
  }
  p {
    width: 636px;
    font-size: 18px;
    line-height: 28px;
    color: ${theme.colors.jet};
    margin: 0;

    @media (max-width: ${theme.bp.l}) {
      line-height: 28px;
      font-size: 16px;
      font-weight: 400;
    }
    @media (max-width: ${theme.bp.m}) {
      line-height: 22px;
      font-size: 12px;
      font-weight: 400;
      width: 300px;
    }

    b{
    color: ${theme.colors.jet};

    }
  }
`;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 240px;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${theme.colors.lightSlateBlue + '59'};
  background-color: ${theme.colors.seasalt};
  border-radius: 20px;
  padding: 24px 16px 16px 24px;

  @media (max-width: ${theme.bp.l}) {
    width: 720px;
    height: max-content;
  }

  @media (max-width: ${theme.bp.m}) {
    width: 320px;
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
  flex-direction: row;
  align-items: center;

  @media (max-width: ${theme.bp.m}) {
    flex-direction: column;
  }
`;

export const ServiceTitle = styled.h5`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.jet};
  text-transform: uppercase;
  margin: 0;

  @media (max-width: ${theme.bp.m}) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const ServiceResume = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: ${theme.colors.jet};
  margin: 12px 0 18px 0;

  @media (max-width: ${theme.bp.m}) {
    margin: 8px 0 18px 0;
    font-size: 12px;
    line-height: 24px;
  }
`;

export const PositionBTN = styled.div`
  min-height: 32px;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const ResumeContainer = styled.div`
display: flex;
flex-direction: column;
`