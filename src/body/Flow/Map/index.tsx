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
})();

const toLink = (data: any) => {
  const result = data.reduce((array: any, item: any) => {
    const {
      parentNodes,
    }: {
      parentNodes: number[],
    } = item;

    const toNodes = data.filter((node: any) => parentNodes.indexOf(node.nodeId) >= 0);

    const connected = toNodes.map((node: any) => ([
      { ...item },
      { ...node },
    ]))

    array.concat(connected);
    return array;
  }, []);

  return result;
};

const simplifyData = (data: any) => data.reduce((result: any, item: any) => {
  const {
    id,
    bind_to_workflow_node = {},
    position_latitude,
    position_longitude,
    ...rest
  } = item;

  const { id: nodeId, parent_nodes = [] } = bind_to_workflow_node || {};

  if (!result.some((i: any) => i.nodeId === nodeId) && bind_to_workflow_node != null) {
    result.push({
      eventId: id,
      nodeId,
      parentNodes: parent_nodes,
      lat: position_latitude,
      lng: position_longitude,
      ...rest
    });
  }

  return result;
}, []);

const drawMarker = (map: any, simplify: any, mapInstance: any) => {
  simplify.forEach((item: any) => {
    const marker = new mapInstance.Marker({
      position: new mapInstance.LatLng(item.lat, item.lng),
      title: `# ${JSON.stringify(item)}`,
      map: map,
      animation: mapInstance.Animation.DROP
    });
    mapInstance.event.addListener(marker, 'click', () => {
      console.log(item);
    });
  });
};

const drawLines = (map: any, simplify: any, mapInstance: any) => {
  for (let point of simplify) {
    const [coordStart, coordEnd] = point;

    const start = new mapInstance.LatLng(coordStart.lat, coordStart.lng);
    const end = new mapInstance.LatLng(coordEnd.lat, coordEnd.lng);

    const numPoints = 100; // More points = smoother curve
    const curveCoordinates = [];

    for (let i = 0; i <= numPoints; i++) {
      const fraction = i / numPoints;
      const interpolatedPoint = mapInstance.geometry.spherical.interpolate(start, end, fraction);

      // Offset latitude to create the curve effect
      const curveOffset = Math.sin(fraction * Math.PI) * 0.25; // Adjust curvature strength
      const offsetLat = interpolatedPoint.lat() + curveOffset;

      curveCoordinates.push(new mapInstance.LatLng(offsetLat, interpolatedPoint.lng()));
    }

    const curvePath = new mapInstance.Polyline({
      path: curveCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });

    curvePath.setMap(map);
  }
};

const Index = () => {
  const { data = [] } = useContext(MapContext) || {};

  const initMap = () => {
    const simplify = simplifyData(data);

    const center = simplify.reduce(
      (acc: any, coord: any) => ({
        lat: acc.lat + coord.lat,
        lng: acc.lng + coord.lng,
      }), { lat: 0, lng: 0 }
    );

    const mapInstance = window.google.maps;
    const map = new mapInstance.Map(document.getElementById("map_div"), {
      center: { lat: center.lat / simplify.length, lng: center.lng / simplify.length },
      zoom: 7,
    });

    drawMarker(map, simplify, mapInstance);

    const linkData = toLink(simplify);
    drawLines(map, linkData, mapInstance);

  };

  useEffect(() => {
    window.initMap = initMap;
  }, [])

  return <div id="map_div" style={{ height: 400 }}></div>;
};

export default Index;
