import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'R&D & Product Development', value: 40, color: '#191919' },
  { name: 'Pilot Deployments & GTM', value: 35, color: '#43ff72' },
  { name: 'Sales & Marketing', value: 25, color: '#ff9633' },
];

const FundingPieChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{
            backgroundColor: '#191919',
            border: '1px solid #374151',
            borderRadius: '8px',
            color: '#D8FF43'
          }}
          formatter={(value: number) => [`$${(value * 2000000 / 100).toLocaleString()}`, '']}
          labelStyle={{ color: '#D1D5DB' }}
        />
        <Legend 
          verticalAlign="bottom" 
          height={36}
          wrapperStyle={{
            color: '#191919',
            fontSize: '12px'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FundingPieChart; 