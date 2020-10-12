import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import { Container, SideBar, Header, Footer, CreateOrphanage } from './styles';
import mapMarkerImg from '../../assets/Map-Marker.svg';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap = () => {
  return (
    <Container>
      <SideBar>
        <Header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas ciranças estão esperando a sua visita :{')'} </p>
        </Header>
        <Footer>
          <strong>Carapicuiba</strong>
          <span>São Paulo</span>
        </Footer>
      </SideBar>
      <Map
        center={[-23.525581, -46.8363294]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <CreateOrphanage to="/">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
