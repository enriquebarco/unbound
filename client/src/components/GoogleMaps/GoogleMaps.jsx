import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import "./GoogleMaps.scss";
import 'animate.css';


function Map( { teams } ) {
  const [selectedTeam, setSelectedTeam] = useState(null);

    return (
         <GoogleMap 
            defaultZoom={1.4} 
            defaultCenter={{lat: 12, lng: 12}} 
        >
          {teams.map((team) => {
            console.log(team.latitude, team.longitude);
            return <Marker 
              key={team.id} 
              position={{
                lat: team.latitude, 
                lng: team.longitude
              }}
              onClick={() => {
                setSelectedTeam(team);
              }}
            />})}
          {selectedTeam && (
            <InfoWindow 
              position={{
                lat: selectedTeam.latitude, 
                lng: selectedTeam.longitude
              }}
              onCloseClick={() => {
                setSelectedTeam(null);
              }}>
                <div>details</div>
            </InfoWindow>
          )}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



export default function GoogleMaps( { teams }) {
  return(
  <div className="google-maps__container animate__animated animate__fadeInRight">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        loadingElement={<div className="google-maps__element" />}
        containerElement={<div className="google-maps__element" />}
        mapElement={<div className="google-maps__element" />}
        teams={teams}
      />
  </div>
  )
}
