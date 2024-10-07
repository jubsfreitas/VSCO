import React from 'react';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarGraphContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #313860 0%, #151928 100%);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  height: 300px;
  width: 620px;
`;

const data = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 20 },
  { name: 'Apr', value: 27 },
  { name: 'May', value: 18 },
  { name: 'Jun', value: 23 },
  { name: 'Jul', value: 34 },
  { name: 'Aug', value: 43 },
  { name: 'Sep', value: 36 },
  { name: 'Oct', value: 40 },
  { name: 'Nov', value: 38 },
  { name: 'Dec', value: 31 },
];

const BarGraph: React.FC = () => {
  return (
    <BarGraphContainer>
      <h3></h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}  margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e00" />
          <XAxis dataKey="name" tick={{ fill: 'transparent' }} />
          <YAxis tick={{ fill: '#fff' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#f5f7fa', border: 'none' }}
            itemStyle={{ color: '#2D3748' }}
            cursor={{ fill: 'rgba(160, 174, 192, 0.1)' }}
          />
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#313860" stopOpacity={1} />
              <stop offset="100%" stopColor="#151928" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Bar
            dataKey="value"
            fill="#fff"
            barSize={10} // Largura da barra
            radius={[10, 10, 0, 0]} // Borda arredondada em cima
          />
        </BarChart>
      </ResponsiveContainer>
    </BarGraphContainer>
  );
};

export default BarGraph;
