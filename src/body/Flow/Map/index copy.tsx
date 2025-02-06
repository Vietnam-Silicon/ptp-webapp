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
    // const map = new window.google.maps.Map(document.getElementById("map_div"), {
    //   center: { lat: 33.813358, lng: -117.923706 }, // Centered between start and end
    //   zoom: 16, // Closer zoom for a detailed view
    // });

    // const start = new window.google.maps.LatLng(33.818038, -117.928492);
    // const end = new window.google.maps.LatLng(33.808678, -117.918921);

    // const numPoints = 100; // More points = smoother curve
    // const curveCoordinates = [];

    // for (let i = 0; i <= numPoints; i++) {
    //   const fraction = i / numPoints;
    //   const interpolatedPoint = window.google.maps.geometry.spherical.interpolate(start, end, fraction);

    //   // Offset latitude to create the curve effect
    //   const curveOffset = Math.sin(fraction * Math.PI) * 0.005; // Adjust curvature strength
    //   const offsetLat = interpolatedPoint.lat() + curveOffset;

    //   curveCoordinates.push(new window.google.maps.LatLng(offsetLat, interpolatedPoint.lng()));
    // }

    // const curvePath = new window.google.maps.Polyline({
    //   path: curveCoordinates,
    //   geodesic: true,
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 1.0,
    //   strokeWeight: 3,
    // });

    // curvePath.setMap(map);

    const map = new window.google.maps.Map(document.getElementById("map_div"), {
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
      // const bounds = new window.google.maps.LatLngBounds();
      const [coord1, coord2] = pointGroup[i];
      // bounds.extend(new window.google.maps.LatLng(coord1.lat, coord1.lng));
      // bounds.extend(new window.google.maps.LatLng(coord2.lat, coord2.lng));
      // map.fitBounds(bounds);

      const path = [];
      const numPoints = 100; // Number of intermediate points
      const start = new window.google.maps.LatLng(coord1.lat, coord1.lng);
      const end = new window.google.maps.LatLng(coord2.lat, coord2.lng);
      for (let j = 0; j <= numPoints; j++) {

        // const latLng = window.google.maps.geometry.spherical.interpolate(
        //   new window.google.maps.LatLng(coord1.lat, coord1.lng),
        //   new window.google.maps.LatLng(coord2.lat, coord2.lng),
        //   j / numPoints
        // );
        // path.push(latLng);
        const interpolatedPoint = window.google.maps.geometry.spherical.interpolate(start, end, i / numPoints);
        const curveOffset = Math.sin(i / numPoints * Math.PI) * 0.005; // Adjust curvature strength
        // path.push(interpolatedPoint);
        path.push(new window.google.maps.LatLng(curveOffset, interpolatedPoint.lng()));
      }

      const connected = new window.google.maps.Polyline({
        path: path,
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
      <Script src="https://maps.googleapis.com/maps/api/js?v=3&sensor=false&libraries=geometry&callback=initMap" />
      <div id="map_div" style={{ height: 400 }}></div>
    </>
  );
};

export default Index;
