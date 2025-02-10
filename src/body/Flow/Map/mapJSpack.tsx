// https://github.com/googlemaps/js-api-loader
// import React, { useEffect } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';

const MapComponent = () => {
  // useEffect(() => {
  //   const loader = new Loader({
  //     apiKey: 'YOUR_API_KEY', // Replace with your Google Maps API key
  //     version: 'weekly',
  //   });

  //   loader.load().then(() => {
  //     const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
  //       center: { lat: -34.397, lng: 150.644 },
  //       zoom: 8,
  //     });

  //     const flightPlanCoordinates = [
  //       { lat: 37.772, lng: -122.214 },
  //       { lat: 21.291, lng: -157.821 },
  //       { lat: -18.142, lng: 178.431 },
  //       { lat: -27.467, lng: 153.027 },
  //     ];

  //     const flightPath = new google.maps.Polyline({
  //       path: flightPlanCoordinates,
  //       geodesic: true,
  //       strokeColor: '#FF0000',
  //       strokeOpacity: 1.0,
  //       strokeWeight: 2,
  //     });

  //     flightPath.setMap(map);
  //   });
  // }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default MapComponent;