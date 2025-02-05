"use client"
import Script from 'next/script';
import { useEffect } from 'react';

import Check from './check';

const Index = () => {

  const initMap = () => {
    var map = new window.google.maps.Map(document.getElementById("map_div"), {
      center: new window.google.maps.LatLng(33.808678, -117.918921),
      zoom: 12,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP
    });

    const pointGroup = [
      [{ lat: 33.818038, lng: -117.928492 }, { lat: 33.808678, lng: -117.918921 }],
      [{ lat: 33.818038, lng: -117.928492 }, { lat: 33.803333, lng: -117.955278 }],
      [{ lat: 33.818038, lng: -117.928492 }, { lat: 33.808038, lng: -117.928495 }],
      [{ lat: 33.808678, lng: -117.918921 }, { lat: 33.758678, lng: -117.948921 }],
      [{ lat: 33.803333, lng: -117.955278 }, { lat: 33.758678, lng: -117.948921 }],
      [{ lat: 33.808038, lng: -117.928495 }, { lat: 33.758678, lng: -117.948921 }],
      [{ lat: 33.758678, lng: -117.948921 }, { lat: 33.798038, lng: -117.848921 }],
    ];

    for (let i = 0; i < pointGroup.length; i++) {
      var connected = new window.google.maps.Polyline({
        path: pointGroup[i],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      connected.setMap(map);
    }
  };

  useEffect(() => {
    window.initMap = initMap;
  }, [])

  return (
    <>
      <Script src="https://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=initMap" />
      <div id="map_div" style={{ height: 400 }}></div>
      <Check />
    </>
  );
};

export default Index;
