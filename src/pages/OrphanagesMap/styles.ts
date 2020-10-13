import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 400px 1fr;

  > aside {
    padding: 80px 0 80px 80px;
    width: 100%;
    background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

    position: relative;

    .title {
      margin-top: 80px;

      font-style: normal;
      font-weight: 800;
      font-size: 40px;
      line-height: 42px;

      max-width: 235px;
    }
    .description {
      margin-top: 24px;
      max-width: 200px;

      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
    }

    > footer {
      position: absolute;
      bottom: 0;
      margin-bottom: 80px;

      display: flex;
      flex-direction: column;
    }
  }
`;

export const CreateOrphanage = styled(Link)`
  position: absolute;
  bottom: 40px;
  right: 40px;

  padding: 22px;
  background: #15C3D6;
  border-radius: 20px;

  z-index: 1000;

  transition: background 0.3s ease;

  :hover {
    background: #17D6EB;
  }
`;
