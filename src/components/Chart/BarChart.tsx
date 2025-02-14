'use client'

import React, { FC } from 'react';
import {
  BarChart as BarChartOriginal,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface BarChartProps {
  height?: number;
  data: { name: string; value: number }[];
  chartColor?: string;
  showGrid?: boolean
}

export const BarChart: FC<BarChartProps> = ({ height = 300, data, chartColor = '#00FEFC', showGrid = true }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChartOriginal
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {showGrid ? <CartesianGrid strokeDasharray="3 3" /> : null}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill={chartColor} maxBarSize={48} />
      </BarChartOriginal>
    </ResponsiveContainer>
  );
};
