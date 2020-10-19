import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Aside, Footer } from './styles';

import mapMarkerImg from '../../assets/Map-Marker.svg';
const Sidebar = () => {
  const { goBack } = useHistory();

  return (
    <Aside>
      <img src={mapMarkerImg} alt="Happy" />

      <Footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </Footer>
    </Aside>
  );
};

export default Sidebar;
