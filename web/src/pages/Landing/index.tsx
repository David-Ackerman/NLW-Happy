import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container, MainInfo, Location, Wrapper, EnterLink } from './styles';

import logoImg from '../../assets/Logo.svg';

const Landing = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logoImg} alt="Happy" />
        <MainInfo>
          <h1>Leve a felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </MainInfo>
        <Location>
          <strong>Carapicuíba</strong>
          <span>São Paulo</span>
        </Location>
        <EnterLink to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </EnterLink>
      </Wrapper>
    </Container>
  );
};

export default Landing;
