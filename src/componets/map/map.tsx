import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CoordsOffice, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';


type Map = {
    page: 'contact' | 'booking';
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20,40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20,40]
});


export default function Map ({page}: Map) {

  return (
    <MapContainer
      center={CoordsOffice}
      zoom={15}
      scrollWheelZoom={false}
      style={{height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />

      {page === 'contact' &&
      <Marker position={CoordsOffice} icon={defaultCustomIcon}/>}

      {page === 'booking' &&
      <Marker position={CoordsOffice} icon={currentCustomIcon}/>}

    </MapContainer>
  );
}
