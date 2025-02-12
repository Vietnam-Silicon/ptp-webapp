'use client';

import { FC } from 'react';
import { PieChart as OriginalPieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

type ChartValue = {
  name: string;
  value: number;
};

interface PieChartProps {
  data: ChartValue[];
  colors?: string[];
}

const SAMPLE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const renderCustomLabel = ({ name }: ChartValue) => name;

export const PieChart: FC<PieChartProps> = ({ data, colors }) => {
  const chartColors = colors ?? SAMPLE_COLORS;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <OriginalPieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={renderCustomLabel}
          nameKey="name"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </OriginalPieChart>
    </ResponsiveContainer>
  );
};
