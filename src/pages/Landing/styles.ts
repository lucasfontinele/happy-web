import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ilustraImg from '../../assets/images/ilustra.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  .content-wrapper {
    position: relative;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    padding: 120px 0 0;
    background: url(${ilustraImg}) no-repeat 80% center;

    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .location {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        > strong {
          font-weight: 800;
          font-size: 24px;
          line-height: 34px;
        }
        > span {
          font-weight: 600;
          font-size: 24px;
          line-height: 34px;
        }
      }
    }

    > h1 {
      margin-top: 110px;
      max-width: 395px;

      font-size: 76px;
      font-weight: 900;
      line-height: 78px;
    }
    > p {
      margin-top: 40px;
      max-width: 320px;

      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      color: #FFFFFF;
    }
  }
`;

export const NavigateButton = styled(Link)`
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 80px;
  min-width: 80px;
  padding: 24px;

  background: #FFD666;
  border-radius: 30px;
  outline: none;
  transition: background 0.2s ease;

  :hover {
    background: #96FEFF;
  }
`;
