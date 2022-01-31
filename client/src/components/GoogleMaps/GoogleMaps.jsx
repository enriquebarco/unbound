import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import "./GoogleMaps.scss";
import 'animate.css';


function Map() {
    return (
         <GoogleMap 
            defaultZoom={1.3} 
            defaultCenter={{lat: 12, lng: 12}} 
        >
          <Marker position={{
            lat:42.546245,
            lng: 1.601554
            }}/>
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



export default function GoogleMaps() {
  return(
  <div className="google-maps__container animate__animated animate__fadeInRight">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        loadingElement={<div className="google-maps__element" />}
        containerElement={<div className="google-maps__element" />}
        mapElement={<div className="google-maps__element" />}
      />
  </div>
  )
}
