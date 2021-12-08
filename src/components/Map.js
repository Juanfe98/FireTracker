import { useState } from 'react';
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMark.js";
import FireDetail from './FireDetail/FireDetail.js';

const Map = ({ eventData, center, zoom }) => {
    
  const [ fireInfo, setFireInfo ] = useState(null);

  //Creamos todos los marcadores con la informacion que recibimos
  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={index}
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
        bootstrapURLKeys={{ key: "AIzaSyC6oG35-v8dbn7Zb3cvi3EQY7ClaQVTirs" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {fireInfo && <FireDetail eventDetail={fireInfo}/>}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 41.023017, 
    lng: -101.039127,
  },
  zoom: 5,
};
export default Map;
