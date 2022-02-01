import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import Icon from "../../assets/Icons/person.png";
import MapStyle from '../../data/MapStyle';
import "./GoogleMaps.scss";
import 'animate.css';


function Map( { teams } ) {
  const [selectedTeam, setSelectedTeam] = useState(null);

    return (
         <GoogleMap 
            defaultZoom={1.4} 
            defaultCenter={{lat: 12, lng: 12}}
            defaultOptions={{styles: MapStyle}} 
        >
          {teams.map((team) => {
            return <Marker 
              key={team.id} 
              position={{
                lat: team.latitude, 
                lng: team.longitude
              }}
              onClick={() => {
                setSelectedTeam(team);
              }}
              icon={{
                url: Icon,
                scaledSize: new window.google.maps.Size(30, 30)
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
                <div className="info-window__container">
                  <h3 className="info-window__title">Name</h3>
                  <h3 className="info-window__text">{selectedTeam.name}</h3>
                  <h3 className="info-window__title">Job Title</h3>
                  <h3 className="info-window__text">{selectedTeam.jobTitle}</h3>
                </div>
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
