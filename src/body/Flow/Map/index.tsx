'use client';

import { useContext, useEffect } from 'react';

import { MapContext } from '../MapContext';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

// TODO: it's stupid, yet it works for POC
(() => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?v=3&sensor=false&libraries=geometry&callback=initMap&loading=async';
      document.head.appendChild(script);
    }, 1000);
  }
})()

const Index = () => {
  const { data = [] } = useContext(MapContext) || {};

  const initMap = () => {

    // draw markers
    const markerData = data.map((item: any) => ({ lat: item.position_latitude, lng: item.position_longitude }));
    const center = markerData.reduce(
      (acc: any, coord: any) => ({
        lat: acc.lat + coord.lat,
        lng: acc.lng + coord.lng,
      }),
      { lat: 0, lng: 0 }
    );

    const map = new window.google.maps.Map(document.getElementById("map_div"), {
      center: { lat: center.lat / markerData.length, lng: center.lng / markerData.length },
      zoom: 7,
    });

    markerData.forEach((item: any) => {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(item.lat, item.lng),
        title: `# ${JSON.stringify(item)}`,
        map: map,
        animation: window.google.maps.Animation.DROP
      });
      window.google.maps.event.addListener(marker, 'click', () => {
        console.log(item);
      });
    });

    // draw lines
    const linkMiniData = data.reduce((result: any, item: any) => {
      const {
        id,
        bind_to_workflow_node = {},
        position_latitude,
        position_longitude,
      } = item;
      const { id: nodeId, parent_nodes = [] } = bind_to_workflow_node;

      if (!result.some((i: any) => i.nodeId === nodeId)) {
        result.push({
          eventId: id,
          nodeId,
          parentNodes: parent_nodes,
          positionLatitude: position_latitude,
          positionLongitude: position_longitude,
        });
      }
      return result;
    }, []);

    // debugger

    const linkData = linkMiniData.reduce((arr: any, item: any) => {
      const parentData = linkMiniData.filter((link: any) => item.parentNodes.indexOf(link.nodeId) >= 0);

      const mapPoints = parentData.map((node: any) => ([
        { lat: item.positionLatitude, lng: item.positionLongitude },
        { lat: node.positionLatitude, lng: node.positionLongitude },
      ]));

      return arr.concat(mapPoints);
    }, []);

    for (let point of linkData) {
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
  };

  useEffect(() => {
    window.initMap = initMap;
  }, [])

  return <div id="map_div" style={{ height: 400 }}></div>;
};

export default Index;
