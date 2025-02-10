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
      center: { lat: 14.8458754, lng: 101.9391654 },
      zoom: 8, // Closer zoom for a detailed view
    });

    const pointGroup = [
      [{ lat: 15.1621573, lng: 99.8708099 }, { lat: 14.5723432, lng: 99.4495777 }],
      [{ lat: 15.1621573, lng: 99.8708099 }, { lat: 15.2005259, lng: 100.2527648 }],
      [{ lat: 15.1621573, lng: 99.8708099 }, { lat: 16.2471285, lng: 100.5556779 }],
      [{ lat: 14.5723432, lng: 99.4495777 }, { lat: 14.963241, lng: 101.437353 }],
      [{ lat: 15.2005259, lng: 100.2527648 }, { lat: 14.963241, lng: 101.437353 }],
      [{ lat: 16.2471285, lng: 100.5556779 }, { lat: 14.963241, lng: 101.437353 }],
      [{ lat: 14.963241, lng: 101.437353 }, { lat: 14.2381739, lng: 103.1152752 }],
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
        const curveOffset = Math.sin(fraction * Math.PI) * 0.25; // Adjust curvature strength
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
      { lat: 15.1621573, lng: 99.8708099 },
      { lat: 14.5723432, lng: 99.4495777 },
      { lat: 15.2005259, lng: 100.2527648 },
      { lat: 16.2471285, lng: 100.5556779 },
      { lat: 14.963241, lng: 101.437353 },
      { lat: 14.2381739, lng: 103.1152752 },
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
      <Script src="https://maps.googleapis.com/maps/api/js?v=3&sensor=false&libraries=geometry&callback=initMap&loading=async" />
      <div id="map_div" style={{ height: 400 }}></div>
    </>
  );
};

export default Index;
