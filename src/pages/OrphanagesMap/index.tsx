import React from 'react';

import { Map, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import { Container, CreateOrphanage } from './styles';
import 'leaflet/dist/leaflet.css';

import happyImg from '../../assets/images/happy.svg';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <img src={happyImg} alt="Happy"/>
        <p className="title">Escolha um orfanato no mapa</p>
        <p className="description">
        Muitas crianças estão
        esperando a sua visita :)
        </p>
        <footer>
          <strong>Palmas</strong>
          <span>Tocantins</span>
        </footer>
      </aside>
      <Map center={[-10.1763788, -48.3426547]} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_ACCESS_TOKEN}`}
        />
      </Map>
      <CreateOrphanage to="/">
        <FiPlus size={21} color="#fff" />
      </CreateOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
