import React, { useEffect, useRef } from 'react';
import { Graph } from '@antv/g6';

export default () => {
  const ref = useRef();

  const data = {
    nodes: [
      { id: 'node1', data: { name: 'Circle1' } },
      { id: 'node2', data: { name: 'Circle2' } },
    ],
    edges: [{ id: 'edge1', source: 'node1', target: 'node2', data: {} }],
  };

  useEffect(() => {
    if (!ref.current) return;

    const graph = new Graph({
      container: ref.current,
      width: 800,
      height: 500,
      data,
      modes: {
        default: ['drag-node', 'drag-canvas', 'zoom-canvas'],
      },
    });
  }, []);

  return <div ref={ref}></div>;
};