import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { Container, NavigateButton } from './styles';

import logoImg from '../../assets/images/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <div className="content-wrapper">
        <div className="head">
          <img src={logoImg} alt="Happy" />
          <div className="location">
            <strong>Palmas</strong>
            <span>Tocantins</span>
          </div>
        </div>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>

        <NavigateButton to="/">
          <FaArrowRight size={32} color="rgba(0, 0, 0, 0.6)" />
        </NavigateButton>
      </div>
    </Container>
  );
};

export default Landing;
