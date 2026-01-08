import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { year: '2023', market: 15, airguard: 0 },
  { year: '2024', market: 18, airguard: 0.5 },
  { year: '2025', market: 22, airguard: 2 },
  { year: '2026', market: 27, airguard: 8 },
  { year: '2027', market: 33, airguard: 15 },
  { year: '2028', market: 40, airguard: 25 },
];

const MarketGrowthChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis 
          dataKey="year" 
          stroke="#9CA3AF"
          fontSize={12}
          tickLine={false}
        />
        <YAxis 
          stroke="#9CA3AF"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}B`}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: '#1F2937',
            border: '1px solid #374151',
            borderRadius: '8px',
            color: '#F9FAFB'
          }}
          formatter={(value: number, name: string) => [
            `$${value}${name === 'market' ? 'B' : 'M'}`, 
            name === 'market' ? 'Global Market' : 'AirGuard Revenue'
          ]}
          labelStyle={{ color: '#D1D5DB' }}
        />
        <Area 
          type="monotone" 
          dataKey="market" 
          stackId="1"
          stroke="#6B7280" 
          fill="#6B7280" 
          fillOpacity={0.3}
          name="Global Market"
        />
        <Area 
          type="monotone" 
          dataKey="airguard" 
          stackId="2"
          stroke="#D8FF43" 
          fill="#D8FF43" 
          fillOpacity={0.8}
          name="AirGuard Revenue"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MarketGrowthChart; 