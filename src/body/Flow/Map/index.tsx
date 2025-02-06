"use client"
import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const Index = () => {

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map_div"), {
      center: { lat: 33.813358, lng: -117.923706 }, // Centered between start and end
      zoom: 12, // Closer zoom for a detailed view
    });

    const pointGroup = [
      [{ lat: 33.818038, lng: -117.928492 }, { lat: 33.808678, lng: -117.918921 }],
      [{ lat: 33.818038, lng: -117.928492 }, { lat: 33.803333, lng: -117.955278 }],
      [{ lat: 33.818038, lng: -117.928492 }, { lat: 33.808038, lng: -117.948495 }],
      [{ lat: 33.808678, lng: -117.918921 }, { lat: 33.758678, lng: -117.948921 }],
      [{ lat: 33.803333, lng: -117.955278 }, { lat: 33.758678, lng: -117.948921 }],
      [{ lat: 33.808038, lng: -117.948495 }, { lat: 33.758678, lng: -117.948921 }],
      [{ lat: 33.758678, lng: -117.948921 }, { lat: 33.798038, lng: -117.848921 }],
    ];
    for (let point of pointGroup) {
      const [coordStart, coordEnd] = point;

      const start = new window.google.maps.LatLng(coordStart.lat, coordStart.lng);
      const end = new window.google.maps.LatLng(coordEnd.lat, coordEnd.lng);

      const numPoints = 100; // More points = smoother curve
      const curveCoordinates = [];

      for (let i = 0; i <= numPoints; i++) {
        const fraction = i / numPoints;
        const interpolatedPoint = window.google.maps.geometry.spherical.interpolate(start, end, fraction);

        // Offset latitude to create the curve effect
        const curveOffset = Math.sin(fraction * Math.PI) * 0.008; // Adjust curvature strength
        const offsetLat = interpolatedPoint.lat() + curveOffset;

        curveCoordinates.push(new window.google.maps.LatLng(offsetLat, interpolatedPoint.lng()));
      }

      const curvePath = new window.google.maps.Polyline({
        path: curveCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 3,
      });

      curvePath.setMap(map);
    }

    [
      { lat: 33.818038, lng: -117.928492 },
      { lat: 33.808678, lng: -117.918921 },
      { lat: 33.803333, lng: -117.955278 },
      { lat: 33.808038, lng: -117.948495 },
      { lat: 33.758678, lng: -117.948921 },
      { lat: 33.798038, lng: -117.848921 },
    ].forEach(item => {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(item.lat, item.lng),
        title: `# ${JSON.stringify(item)}`,
        map: map,
        animation: window.google.maps.Animation.DROP
      });
      window.google.maps.event.addListener(marker, 'click', () => {
        console.log(item);
      });
    })
  };

  useEffect(() => {
    window.initMap = initMap;
  }, [])

  return (
    <>
      <Script src="https://maps.googleapis.com/maps/api/js?v=3&sensor=false&libraries=geometry&callback=initMap" />
      <div id="map_div" style={{ height: 400 }}></div>
    </>
  );
};

export default Index;
