import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CoordsOffice, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { BookingInfoType } from '../../types/type-booking';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCoordsQuestPlaces } from '../../store/data-process/selectors';
import { setCoords, setQuestPlaceId } from '../../store/data-process/data-process';


type Map = {
    page: 'contact' | 'booking';
    booking?: BookingInfoType[];
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


export default function Map ({page, booking}: Map) {
  const dispatch = useAppDispatch();
  const coordsQuestPlaces = useAppSelector(selectCoordsQuestPlaces);
  useEffect(() => {
    if(booking) {
      const currentQuestPlaceId = booking[0].id;
      const currentCoordQuestPlace = booking[0].location.coords;
      dispatch(setQuestPlaceId(currentQuestPlaceId));
      dispatch(setCoords(currentCoordQuestPlace));
    }
  }, [booking, dispatch]);

  function handleClickMarker (id: BookingInfoType['id'], coords: BookingInfoType['location']['coords']) {
    dispatch(setQuestPlaceId(id));
    dispatch(setCoords(coords));
  }

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

      {page === 'booking' && booking &&
      booking.map((item) => (
        <Marker position={item.location.coords}
          icon={
            item.location.coords === coordsQuestPlaces
              ? currentCustomIcon
              : defaultCustomIcon
          }
          key={item.id}
          eventHandlers={{click: () => handleClickMarker(item.id, item.location.coords)}}
        />
      )
      )}

    </MapContainer>
  );
}
