import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Botao from "../Botao/Botao";
import L from 'leaflet';

import "./Style.css";
import "leaflet/dist/leaflet.css";
import { HashLink as Link } from 'react-router-hash-link';


const customIconUrl = process.env.PUBLIC_URL + 'imagens/icons/marker-icon.png'

const customIcon = L.icon({
  iconUrl: customIconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function Mapa({ pontos }) {
    return (
        <div className="map-container">
            <div className="map-inner-container">
                <MapContainer center={[-22.951804, -43.210760]} zoom={11} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={`https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg?api_key=313d5f0b-ed4d-4c89-a33f-f3fa5722ea09`}
                    minZoom={0}
                    maxZoom={20}
                />
                    {pontos.map(e => (
                      <Marker key={e.id} position={[e.latitude, e.longitude]} icon={customIcon}>
                        <Popup className="custom-popup">
                            <div className="popup-content">
                                <img src={`${process.env.PUBLIC_URL}${e.imagem}`}/>
                                <div className="popup-text">
                                    <h3>{e.nome}</h3>
                                    <Link to="#title_header">
                                        <Botao texto="Saiba Mais"/>
                                    </Link>
                                </div>
                            </div>
                        </Popup>
                      </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
};

export default Mapa;