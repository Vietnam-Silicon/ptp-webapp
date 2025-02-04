import { useEffect, useRef } from 'react';
import {
  select,
  geoMercator,
  geoPath,
} from 'd3';
import { FeatureCollection } from 'geojson';

const Index = () => {
  const divRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!divRef.current) return;

    const width = 440;
    const height = 300;

    // Clear existing content
    select(divRef.current).selectAll("*").remove();

    // Create SVG
    const svg = select(divRef.current)
      .append('svg')
      .attr('width', '100%')
      .attr('height', height);

    // Setup projection
    const projection = geoMercator()
      .scale(85)
      .translate([width / 2, height / 2 * 1.3]);

    const path = geoPath().projection(projection);

    // Define links
    const links = [
      { type: "LineString", coordinates: [[100, 60], [-60, -30]] },
      { type: "LineString", coordinates: [[10, -20], [-60, -30]] },
      { type: "LineString", coordinates: [[10, -20], [130, -30]] }
    ];

    // Fetch and render map
    fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .then(response => response.json())
      .then((data: FeatureCollection) => {
        // Draw map
        svg.append("g")
          .selectAll("path")
          .data(data.features)
          .enter()
          .append("path")
          .attr("fill", "#b8b8b8")
          .attr("d", path)
          .style("stroke", "#fff")
          .style("stroke-width", 0.5);

        // Draw links
        svg.selectAll("path.link")
          .data(links)
          .enter()
          .append("path")
          .attr("class", "link")
          .attr("d", path as any)
          .style("fill", "none")
          .style("stroke", "orange")
          .style("stroke-width", 2);
      })
      .catch(error => console.error('Error loading map data:', error));

  }, []);

  return (
    <svg
      ref={divRef}
      style={{
        width: '100%',
        height: '100%',
        minWidth: '440px',
        minHeight: '300px'
      }}
    />
  );
};

export default Index;