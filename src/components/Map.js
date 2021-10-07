import { useState } from 'react';
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMark.js";
import LocationInfo from "./LocationInfo.js";

const Map = ({ eventData, center, zoom }) => {
    
  const [ fireInfo, setFireInfo ] = useState(null);

  //Creamos todos los marcadores con la informacion que recibimos
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          clicked = {() => (setFireInfo({id: ev.id, title: ev.title}))}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDbfd5YSayqRiSKmxycFjsK0ZsIWfwLoEA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {fireInfo && <LocationInfo info={fireInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 10,
};
export default Map;
