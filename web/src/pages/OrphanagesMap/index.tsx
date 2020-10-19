import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  Container,
  SideBar,
  Header,
  Footer,
  CreateOrphanage,
  PopupButton,
} from './styles';
import mapMarkerImg from '../../assets/Map-Marker.svg';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

type Orphanage = {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
};

const OrphanagesMap = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

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
        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <PopupButton to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </PopupButton>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <CreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
