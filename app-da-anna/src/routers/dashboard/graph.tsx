
// // Graph.tsx
// import React from 'react';
// import styled from 'styled-components';

// // const GraphContainer = styled.div`
// //   background-color: white;
// //   padding: 20px;
// //   border-radius: 10px;
// //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// //   margin-bottom: 20px;
// //   height: 250px;
// // `;

// // const Graph: React.FC = () => {
// //   return (
// //     <GraphContainer>
// //       <h3>Histórico Mensal</h3>
// //     </GraphContainer>
// //   );
// // };


// const GraphContainer = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
//   height: 300px; // Ajusta a altura do gráfico
//   `;

// const Graph: React.FC = () => {
//   return (
//     <GraphContainer>
//       <h3 style={{ marginBottom: '10px' }}>Histórico Mensal</h3>
//       {/* Aqui você pode integrar uma biblioteca de gráficos, como Chart.js */}
//     </GraphContainer>
//   );
// };

// export default Graph;

import React from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* margin-bottom: 20px; */
  height: 445px;
  width: 924px;

  & h2 {
    margin: 5px 0;
    font-size: 18px;
    color: #2D3748;
  }

  & h3 {
    margin: 0;
    color: #A0AEC0;
    font-size: 14px;
    font-weight: lighter;
    text-align: start;
    width: 453px;
  }
`;

const data = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 50 },
  { month: 'Mar', value: 45 },
  { month: 'Apr', value: 70 },
  { month: 'May', value: 60 },
  { month: 'Jun', value: 90 },
  { month: 'Jul', value: 100 },
  { month: 'Aug', value: 95 },
  { month: 'Sep', value: 80 },
  { month: 'Oct', value: 85 },
  { month: 'Nov', value: 60 },
  { month: 'Dec', value: 65 },
];

const Graph: React.FC = () => {
  return (
    <GraphContainer>
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'start', justifyContent: 'center', marginLeft: '55px'}}>
        <h2>Gráfico</h2>
        <h3>Histórico Mensal</h3>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '883.5px', height: '296.5px', marginTop: '20px'}}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e00" />
            <XAxis tick={{ fill: '#CBD5E0' }} dataKey="month" />
            <YAxis
              tick={{ fill: '#CBD5E0' }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#f5f7fa', border: 'none' }}
              itemStyle={{ color: '#2D3748' }}
              cursor={{ fill: 'rgba(160, 174, 192, 0.1)' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4FD1C5"
              // fillOpacity={1}
              fill="url(#colorUv)"
              // fill="rgba(0, 123, 255, 0.3)" // Cor de preenchimento leve
              strokeWidth={3} // Linha mais grossa
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GraphContainer>
  );
};

export default Graph;
