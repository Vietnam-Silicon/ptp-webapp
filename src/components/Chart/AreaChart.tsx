'use client'

import React, { FC } from 'react';
import {
  AreaChart as AreaChartOriginal,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

interface Props {
  height?: number;
  data: { name: string; value: number }[];
  chartColor?: string;
  strokeColor?: string;
  showGrid?: boolean
  width?: string | number,
  margin?: CategoricalChartProps['margin'],
  showXAxis?: boolean,
  showYAxis?: boolean,
  showTooltip?: boolean
}

export const AreaChart: FC<Props> = ({
  margin,
  height = 300,
  width = '100%',
  data,
  chartColor = '#34C7594D',
  strokeColor = '#34C759',
  showGrid = true,
  showXAxis = true,
  showYAxis = true,
  showTooltip = true
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <AreaChartOriginal
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
          ...margin
        }}
      >
        {showGrid ? <CartesianGrid strokeDasharray="3 3" /> : null}
        {showXAxis ? <XAxis dataKey="name" /> : null}
        {showYAxis ? <YAxis /> : null}
        {showTooltip ? <Tooltip /> : null}
        <Area type="linear" dataKey="value" stroke={strokeColor} fill={chartColor} />
      </AreaChartOriginal>
    </ResponsiveContainer>
  );
};
