import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  /* background-color: ${theme.colors.white}; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 1035px;
  padding-top: 190px;
  @media (max-width: ${theme.bp.l}) {
    flex-direction: column;
    gap: 60px;
    padding-top: 100px;
  }
  @media (max-width: ${theme.bp.m}) {
    gap: 27px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 324px;

  @media (max-width: ${theme.bp.m}) {
    width: 100vw;
  }
`;

export const Robot = styled.img`
  width: 205px;
`;

export const TextLogo = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    @media (max-width: ${theme.bp.m}) {
      gap: 4px;
    }

  h2 {
    text-align: center;
    margin: 0;
    font-size: 56px;
    font-weight: 700;
    color: ${theme.colors.raisinblack};

    @media (max-width: ${theme.bp.m}) {
      font-size: 40px;
      line-height: 43px;
    }
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 25.9px;
    color: ${theme.colors.electricindigo};
    text-transform: uppercase;

    @media (max-width: ${theme.bp.m}) {
      font-size: 16px;
      line-height: 26px;
    }
  }


  @media (max-width: ${theme.bp['x-small']}) {
    h1 {
      font-size: 65px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 553px;

  @media (max-width: ${theme.bp.l}) {
    gap: 16px;
    width: 628px;
  }
  @media (max-width: ${theme.bp.m}) {
    width: 295px;

  }
`;

export const Title = styled.h4`
  text-align: left;
  align-self: flex-start;
  margin: 0;
  font-size: 56px;
  font-weight: 600;
  line-height: 60px;
  color: ${theme.colors.jet};

  @media (max-width: ${theme.bp.l}) {
    font-size: 48px;
    line-height: 60px;
    font-weight: 600;
  }
  @media (max-width: ${theme.bp.m}) {
    font-size: 24px;
    line-height: 30px;
  }

`;
export const Resume = styled.p`
  text-align: left;
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  margin-top: 20px;
  margin-bottom: 37px;
  color: ${theme.colors.jet};

  @media (max-width: ${theme.bp.l}) {
    font-size: 18px;
    margin: 0;
    padding: 0;
  }

  @media (max-width: ${theme.bp.m}) {
    font-size: 18px;
    line-height: 28px;
  }
`;
export const BTN = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${theme.bp.l}) {
    display: none;
  }
`;
