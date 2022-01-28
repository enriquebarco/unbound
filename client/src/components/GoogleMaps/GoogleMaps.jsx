import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import "./GoogleMaps.scss";


function Map() {
    return (
         <GoogleMap 
            defaultZoom={2.2} 
            defaultCenter={{lat: 12, lng: 12}} 
        >
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



export default function GoogleMaps() {
  return(
  <div className="google-maps__container">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        loadingElement={<div className="google-maps__element" />}
        containerElement={<div className="google-maps__element" />}
        mapElement={<div className="google-maps__element" />}
      />
  </div>
  )
}
