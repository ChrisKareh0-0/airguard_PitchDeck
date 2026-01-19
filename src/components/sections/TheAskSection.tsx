"use client";

import { useEffect, useRef, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Sector,
  Legend,
} from "recharts";
import EditableText from "@/components/ui/EditableText";

const useOfFundsData = [
  { name: "R&D", value: 40, amount: "$180K" },
  { name: "Production", value: 25, amount: "$112.5K" },
  { name: "IP & Legal", value: 15, amount: "$67.5K" },
  { name: "Ops", value: 10, amount: "$45K" },
  { name: "Marketing", value: 10, amount: "$45K" },
];

const COLORS = ["#e6ff3f", "#ffffff", "#b3b3b3", "#d1e635", "#666666"];

// Custom label for the pie chart - centered in slice
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#000"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
      fontWeight="bold"
      style={{ pointerEvents: 'none' }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function TheAskSection({ isStatic = false, isEditMode = false }: { isStatic?: boolean, isEditMode?: boolean }) {
  const [isVisible, setIsVisible] = useState(isStatic);
  const sectionRef = useRef<HTMLElement>(null);

  // Use local state for data if we want to allow editing chart values in future, 
  // but for now just static data. 
  // TODO: Make chart data editable? Complex. Stick to text for now.
  const data = useOfFundsData;

  useEffect(() => {
    if (isStatic) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isStatic]);

  // Custom label render function for "spider labels" - if we used them. 
  // But current implementation uses renderCustomizedLabel (centered).
  // I will stick to the one defined above.

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-[#0f0f0f] flex items-center justify-center overflow-hidden relative"
      id="ask"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className={`space-y-8 ${isVisible || isStatic ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-1000 ease-out`}
            style={isStatic ? { transition: "none", animation: "none", opacity: 1, transform: "none" } : undefined}>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                <EditableText
                  initialText="The Ask"
                  isEditMode={isEditMode}
                />
              </h2>
              <div className="h-1 w-20 bg-primary-green rounded-full mb-8"></div>

              <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-white mb-8 tracking-tighter">
                <EditableText
                  initialText="$1.5M"
                  isEditMode={isEditMode}
                />
              </div>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
                <EditableText
                  initialText="Seed financing to accelerate product development, expand our engineering team, and execute our go-to-market strategy."
                  isEditMode={isEditMode}
                  multiline
                />
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-primary-green mb-1">
                  <EditableText initialText="18mo" isEditMode={isEditMode} />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">
                  <EditableText initialText="Runway" isEditMode={isEditMode} />
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-primary-green mb-1">
                  <EditableText initialText="Series A" isEditMode={isEditMode} />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">
                  <EditableText initialText="Next Milestone" isEditMode={isEditMode} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visuals (Chart) */}
          <div className={`relative h-[500px] w-full flex items-center justify-center ${isVisible || isStatic ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-1000 delay-300 ease-out`}
            style={isStatic ? { transition: "none", animation: "none", opacity: 1, transform: "none" } : undefined}>

            {/* Chart Title */}
            <div className="absolute top-0 left-0 w-full text-center z-10 pointer-events-none">
              <h3 className="text-xl font-mono text-gray-500 uppercase tracking-widest">
                <EditableText initialText="Use of Funds" isEditMode={isEditMode} />
              </h3>
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="value"
                  label={renderCustomizedLabel}
                  labelLine={false}
                  isAnimationActive={!isStatic}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(0,0,0,0)" />
                  ))}
                </Pie>
                {/* Custom Legend to match design */}
                <Legend
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  content={({ payload }) => (
                    <ul className="list-none space-y-2">
                      {payload?.map((entry: any, index: number) => (
                        <li key={`item-${index}`} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
                          <span className="font-bold">{entry.payload.name}</span>
                          <span className="text-gray-500">- {entry.payload.amount}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
}
