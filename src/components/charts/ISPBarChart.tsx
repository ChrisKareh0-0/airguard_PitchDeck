import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Manual Troubleshooting',
    traditional: 15000,
    airguard: 2000,
  },
  {
    name: 'Truck Rolls',
    traditional: 8000,
    airguard: 1000,
  },
  {
    name: 'Customer Churn',
    traditional: 12000,
    airguard: 3000,
  },
  {
    name: 'Downtime Losses',
    traditional: 25000,
    airguard: 5000,
  },
];

const ISPBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
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
          dataKey="name" 
          stroke="#9CA3AF"
          fontSize={12}
          tickLine={false}
        />
        <YAxis 
          stroke="#9CA3AF"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: '#1F2937',
            border: '1px solid #374151',
            borderRadius: '8px',
            color: '#F9FAFB'
          }}
          formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
          labelStyle={{ color: '#D1D5DB' }}
        />
        <Bar 
          dataKey="traditional" 
          fill="#EF4444" 
          radius={[4, 4, 0, 0]}
          name="Traditional Methods"
        />
        <Bar 
          dataKey="airguard" 
          fill="#D8FF43" 
          radius={[4, 4, 0, 0]}
          name="With AirGuard"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ISPBarChart; 