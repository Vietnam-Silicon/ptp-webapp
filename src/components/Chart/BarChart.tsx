import React, { FC } from 'react';
import {
  BarChart as BarChartOriginal,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'components/Chart';

interface BarChartProps {
  data: { name: string; value: number }[];
  chartColor?: string;
}

export const BarChart: FC<BarChartProps> = ({ data, chartColor }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChartOriginal
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill={chartColor ?? '#00FEFC'} maxBarSize={48} />
      </BarChartOriginal>
    </ResponsiveContainer>
  );
};
