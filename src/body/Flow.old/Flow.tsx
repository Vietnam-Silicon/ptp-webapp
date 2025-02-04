// import React, { useEffect, useRef } from 'react';
// import {
//   select,
//   zoom,
//   forceSimulation,
//   forceLink,
//   forceManyBody,
//   forceCenter,
// } from 'd3';

// const sampleData = {
//   "class": "GraphLinksModel",
//   "pointsDigits": 0,
//   "nodeDataArray": [
//     { "key": -1, "category": "Start", "loc": "-237 41", "text": "Start" },
//     { "key": -2, "category": "End", "loc": "277 696", "text": "End" },
//     { "category": "Conditional", "text": "Is data\ntree-like?", "key": -14, "loc": "40 165" },
//     { "text": "Use a TreeModel", "key": -5, "loc": "-100 230" },
//     { "text": "Use a GraphLinksModel", "key": -6, "loc": "180 230" },
//     { "text": "Create DIV for Diagram", "key": -8, "loc": "-64 41" },
//     { "text": "Create new Diagram associated with DIV", "key": -9, "loc": "164 41" },
//     { "text": "Style node templates", "key": -10, "loc": "40 617" },
//     { "text": "Add data to node/linkDataArray", "key": -12, "loc": "180 320" },
//     { "text": "Add data to nodeDataArray, including parent", "key": -13, "loc": "-100 320" },
//     { "text": "Style link templates", "key": -15, "loc": "277 617" },
//     { "category": "Conditional", "text": "Should nodes be auto-positioned?", "key": -16, "loc": "40 460" },
//     { "text": "Choose a layout", "key": -18, "loc": "-100 525" },
//     { "text": "Set location in node data and bind", "key": -17, "loc": "180 525" }
//   ],
//   "linkDataArray": [
//     { "from": -1, "to": -8 },
//     { "from": -8, "to": -9 },
//     { "from": -5, "to": -13 },
//     { "from": -6, "to": -12 },
//     { "from": -15, "to": -2 },
//     { "from": -14, "to": -5, "text": "Yes" },
//     { "from": -14, "to": -6, "text": "No" },
//     { "from": -9, "to": -14 },
//     { "from": -13, "to": -16 },
//     { "from": -12, "to": -16 },
//     { "from": -16, "to": -18, "text": "Yes" },
//     { "from": -16, "to": -17, "text": "No" },
//     { "from": -18, "to": -10 },
//     { "from": -17, "to": -10 },
//     { "from": -10, "to": -15 }
//   ]
// };
// const nodeDataArray = sampleData.nodeDataArray;
// const linkDataArray = sampleData.linkDataArray;

// const ForceGraph: React.FC = () => {
//   const svgRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     if (!svgRef.current) return;

//     select(svgRef.current).selectAll("*").remove();
//     // Create SVG
//     const svg = select(svgRef.current)
//       .attr('width', '100%')
//       .attr('height', '100%');

//     // Add zoom behavior
//     const g = svg.append('g');
//     svg.call(zoom<SVGSVGElement, unknown>().on('zoom',
//       (event) => g.attr('transform', event.transform))
//     );

//     // Format data for D3 force simulation
//     const links = linkDataArray.map(d => ({
//       source: d.from,
//       target: d.to
//     }));

//     forceSimulation(nodeDataArray as any)
//       .force('link', forceLink(links).id((d: any) => d.key).distance(500))


//     const node = g.selectAll('.node')
//       .data(nodeDataArray)
//       .join('g')
//       .attr('class', 'node')
//       .attr("x", d => d.loc.split(' ')[0])
//       .attr("y", d => d.loc.split(' ')[1])
//       .attr('transform', (d: any) => {
//         const [x, y] = d.loc.split(' ');
//         return `translate(${x},${y})`
//       });

//     // .attr("width", '100%')
//     // .attr("height", '100%')

//     // .attr('transform', (d: any) => {
//     //   const [x, y] = d.loc.split(' ');
//     //   return `translate(${x},${y})`
//     // });

//     const texts = node.append('text')
//       .text(d => d.text)
//       .attr('x', d => 11 + Number(d.loc.split(' ')[0]))
//       .attr('y', d => 22 + Number(d.loc.split(' ')[1]));

//     const rectNode = node.append("rect")
//       .attr("x", d => d.loc.split(' ')[0])
//       .attr("y", d => d.loc.split(' ')[1])
//       .attr("rx", 5)
//       .attr("ry", 5)
//       .attr("width", (_, i) => {
//         const width = texts.nodes()[i].getBBox().width + 24;
//         return width;
//       })
//       .attr("height", (_, i) => {
//         const height = texts.nodes()[i].getBBox().height + 12;
//         return height;
//       })
//       .attr("fill", "white")
//       .attr('stroke', '#1a192b')
//       .attr('stroke-width', 1)
//       .lower();

//     // Define arrow marker
//     svg.append('defs').append('marker')
//       .attr('id', 'arrow')
//       .attr('viewBox', '0 -5 10 10')
//       .attr('refX', 25)
//       .attr('refY', 0)
//       .attr('markerWidth', 6)
//       .attr('markerHeight', 6)
//       .attr('orient', 'auto')
//       .append('path')
//       .attr('d', 'M0,-5L10,0L0,5')
//       .attr('fill', '#999');

//     // Draw links
//     g.selectAll('path')
//       .data(links)
//       .join('path')
//       .attr('stroke', '#999')
//       .attr('stroke-width', 1.5)
//       .attr('marker-end', 'url(#arrow)')
//       .attr('transform', (d: any) => {
//         const { source } = d;
//         const [x, y] = source.loc.split(' ');
//         return `translate(${x},${y})`
//       })
//       .attr('d', (d: any) => {
//         const { source, target } = d;
//         debugger
//         const [sourceX, sourceY] = source.loc.split(' ');
//         const [targetX, targetY] = target.loc.split(' ');

//         return `M${sourceX},${sourceY}L${targetX},${targetY}`;
//       })

//   }, []);

//   return (
//     <svg
//       ref={svgRef}
//       style={{
//         border: '1px solid #ccc',
//         borderRadius: '4px',
//         backgroundColor: '#fff'
//       }}
//     />
//   );
// };

// export default ForceGraph;


// // const nodeDataArray = sampleData.nodeDataArray;
// // const linkDataArray = sampleData.linkDataArray;

// // const ForceGraph: React.FC = () => {
// //   const svgRef = useRef<SVGSVGElement>(null);

// //   useEffect(() => {
// //     if (!svgRef.current) return;

// //     select(svgRef.current).selectAll("*").remove();
// //     // Create SVG
// //     const svg = select(svgRef.current)
// //       .attr('width', '100%')
// //       .attr('height', '100%');

// //     // Add zoom behavior
// //     const g = svg.append('g');
// //     svg.call(zoom<SVGSVGElement, unknown>().on('zoom',
// //       (event) => g.attr('transform', event.transform))
// //     );

// //     // Format data for D3 force simulation
// //     const links = linkDataArray.map(d => ({
// //       source: d.from,
// //       target: d.to
// //     }));

// //     forceSimulation(nodeDataArray as any)
// //       .force('link', forceLink(links).id((d: any) => d.key).distance(500))

// //     const node = g.selectAll('.node')
// //       .data(nodeDataArray)
// //       .join('g')
// //       .attr('class', 'node')
// //       .attr('transform', (d: any) => {
// //         const [x, y] = d.loc.split(' ');
// //         return `translate(${x},${y})`
// //       });

// //     const texts = node.append('text')
// //       .text(d => d.text)
// //       .attr('x', d => 11 + Number(d.loc.split(' ')[0]))
// //       .attr('y', d => 22 + Number(d.loc.split(' ')[1]));

// //     node.append("rect")
// //       .attr("x", d => d.loc.split(' ')[0])
// //       .attr("y", d => d.loc.split(' ')[1])
// //       .attr("rx", 5)
// //       .attr("ry", 5)
// //       .attr("width", (_, i) => {
// //         const width = texts.nodes()[i].getBBox().width + 24;
// //         return width;
// //       })
// //       .attr("height", (_, i) => {
// //         const height = texts.nodes()[i].getBBox().height + 12;
// //         return height;
// //       })
// //       .attr("fill", "white")
// //       .attr('stroke', '#1a192b')
// //       .attr('stroke-width', 1)
// //       .lower();


// //     // Define arrow marker
// //     svg.append('defs').append('marker')
// //       .attr('id', 'arrow')
// //       .attr('viewBox', '0 -5 10 10')
// //       .attr('refX', 25)
// //       .attr('refY', 0)
// //       .attr('markerWidth', 6)
// //       .attr('markerHeight', 6)
// //       .attr('orient', 'auto')
// //       .append('path')
// //       .attr('d', 'M0,-5L10,0L0,5')
// //       .attr('fill', '#999');

// //     // Draw links
// //     g.selectAll('path')
// //       .data(links)
// //       .join('path')
// //       .attr('stroke', '#999')
// //       .attr('stroke-width', 1.5)
// //       .attr('marker-end', 'url(#arrow)')
// //       .attr('d', (d: any) => {
// //         const { source, target } = d;
// //         const [sourceX, sourceY] = source.loc.split(' ');
// //         const [targetX, targetY] = target.loc.split(' ');

// //         return `M${sourceX},${sourceY}L${targetX},${targetY}`;
// //       })

// //   }, []);

// //   return (
// //     <svg
// //       ref={svgRef}
// //       style={{
// //         border: '1px solid #ccc',
// //         borderRadius: '4px',
// //         backgroundColor: '#fff'
// //       }}
// //     />
// //   );
// // };

// // export default ForceGraph;


import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';

const sampleData = {
  "class": "GraphLinksModel",
  "pointsDigits": 0,
  "nodeDataArray": [
    { "key": -1, "category": "Start", "loc": "-237 41", "text": "Start" },
    { "key": -2, "category": "End", "loc": "277 696", "text": "End" },
    { "category": "Conditional", "text": "Is data\ntree-like?", "key": -14, "loc": "40 165" },
    { "text": "Use a TreeModel", "key": -5, "loc": "-100 230" },
    { "text": "Use a GraphLinksModel", "key": -6, "loc": "180 230" },
    { "category": "Comment", "text": "GraphLinksModel\nalso allows Groups", "key": -7, "loc": "362 230" },
    { "text": "Create DIV for Diagram", "key": -8, "loc": "-64 41" },
    { "text": "Create new Diagram associated with DIV", "key": -9, "loc": "164 41" },
    { "text": "Style node templates", "key": -10, "loc": "40 617" },
    { "text": "Add data to node/linkDataArray", "key": -12, "loc": "180 320" },
    { "text": "Add data to nodeDataArray, including parent", "key": -13, "loc": "-100 320" },
    { "text": "Style link templates", "key": -15, "loc": "277 617" },
    { "category": "Conditional", "text": "Should nodes be auto-positioned?", "key": -16, "loc": "40 460" },
    { "text": "Choose a layout", "key": -18, "loc": "-100 525" },
    { "text": "Set location in node data and bind", "key": -17, "loc": "180 525" }
  ],
  "linkDataArray": [
    { "from": -1, "to": -8 },
    { "from": -8, "to": -9 },
    { "from": -5, "to": -13 },
    { "from": -6, "to": -12 },
    { "from": -15, "to": -2 },
    { "from": -14, "to": -5, "text": "Yes" },
    { "from": -14, "to": -6, "text": "No" },
    { "from": -9, "to": -14 },
    { "from": -13, "to": -16 },
    { "from": -12, "to": -16 },
    { "from": -16, "to": -18, "text": "Yes" },
    { "from": -16, "to": -17, "text": "No" },
    { "from": -18, "to": -10 },
    { "from": -17, "to": -10 },
    { "from": -10, "to": -15 }
  ]
};

const Index: React.FC = () => {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!diagramRef.current) return;

    const $ = go.GraphObject.make;
    const diagram = new go.Diagram(diagramRef.current, {
      "undoManager.isEnabled": true,
      layout: $(go.TreeLayout, {
        angle: 90,
        layerSpacing: 35
      })
    });

    // Node template
    diagram.nodeTemplate = $(go.Node, "Auto",
      $(go.Shape, "RoundedRectangle",
        {
          fill: "#B1CDE5",
          stroke: "#555555",
          strokeWidth: 1,
          portId: "",
          cursor: "pointer",
          fromLinkable: true,
          toLinkable: true
        }),
      $(go.TextBlock,
        {
          margin: 8,
          font: "bold 12px sans-serif",
          stroke: "#333333"
        },
        new go.Binding("text", "text"))
    );

    // Link template
    diagram.linkTemplate = $(go.Link,
      {
        routing: go.Link.AvoidsNodes,
        curve: go.Link.JumpOver
      },
      $(go.Shape,
        { strokeWidth: 1.5, stroke: "#555555" }),
      $(go.Shape,
        { toArrow: "Standard" })
    );

    // Create the model data
    diagram.model = new go.GraphLinksModel({
      nodeDataArray: sampleData.nodeDataArray,
      linkDataArray: sampleData.linkDataArray
    });

    return () => {
      diagram.div = null;
    }
  }, []);

  return (
    <>
      <div
        ref={diagramRef}
        style={{
          width: '100%',
          height: '400px',
          border: '1px solid #E8E8E8',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF'
        }}
      />
    </>
  );
};

export default Index;
