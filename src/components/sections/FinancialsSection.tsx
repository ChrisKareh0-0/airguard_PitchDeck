import { useState, useEffect, useRef } from "react";
import { newDeckContent } from "@/data/newDeckContent";
import EditableText from "@/components/ui/EditableText";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";
import { useCounter } from "@/hooks/useCounter";

// Helper components for animated metrics
const AnimatedMetric = ({ value, label, isStatic, delay = 0, isEditMode }: any) => {
  const numericPart = value.replace(/[^0-9.]/g, "");
  const prefix = value.includes("$") ? "$" : "";
  const suffix = value.includes("/mo") ? "/mo" : "";

  // Basic parsing - if complex string, just show string
  const isNumeric = !isNaN(parseFloat(numericPart)) && numericPart.length > 0;

  const { count, start } = useCounter(isNumeric ? numericPart : 0, 2000, 0, isStatic);

  useEffect(() => {
    // Start immediately on mount if not controlled by parent intersection, 
    // or we can rely on parent passing a props.isVisible. 
    // For simplicity here, we assume if rendered it's visible or we just start.
    start();
  }, [start]);

  return (
    <div className={`glassmorphism-card p-6 rounded-2xl text-center flex flex-col items-center justify-center h-full transform transition-all duration-700 ${!isStatic ? "translate-y-4 opacity-0 animate-slide-up" : ""}`} style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}>
      <h3 className="text-primary-green font-bold text-lg mb-2"><EditableText initialText={label} isEditMode={isEditMode} /></h3>
      <p className="text-3xl md:text-4xl font-black text-white">
        {isEditMode ? (
          <EditableText initialText={value} isEditMode={isEditMode} />
        ) : (
          <span>
            {prefix}{isNumeric ? count : value}{suffix}
          </span>
        )}
      </p>
    </div>
  );
};

export default function FinancialsSection({ isStatic = false, isEditMode = false }: { isStatic?: boolean, isEditMode?: boolean }) {
  const { financials } = newDeckContent;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // State for editable graph data
  // We store the strings as they are editable (e.g. "$360K")
  const [revenueData, setRevenueData] = useState(financials.projections.revenue);
  const [ebitdaData, setEbitdaData] = useState(financials.projections.ebitda);
  const [expensesData, setExpensesData] = useState(financials.projections.operatingExpenses);

  // Helper to parse currency strings to numbers for the chart
  const parseCurrency = (str: string) => {
    const cleanStr = str.replace(/[^0-9.-]/g, "");
    if (!cleanStr) return 0;
    const num = parseFloat(cleanStr);
    if (str.includes("M")) return num * 1000000;
    if (str.includes("K")) return num * 1000;
    return num;
  };

  // Derived chart data
  const chartData = financials.projections.years.map((year, index) => {
    return {
      year,
      revenue: parseCurrency(revenueData[index]),
      ebitda: parseCurrency(ebitdaData[index]),
      expenses: parseCurrency(expensesData[index]),
    };
  });

  const handleUpdate = (setter: any, index: number, newVal: string) => {
    setter((prev: string[]) => {
      const newArr = [...prev];
      newArr[index] = newVal;
      return newArr;
    });
  };

  useEffect(() => {
    if (isStatic) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isStatic]);

  return (
    <section
      ref={sectionRef}
      id="financials"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-dark overflow-hidden relative"
    >
      <div className="container mx-auto px-4 md:px-12 lg:px-16">
        <div className={`text-center mb-12 ${!isStatic ? "reveal" : ""} ${isVisible ? "visible" : ""}`}>
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            <EditableText initialText={financials.title.main} isEditMode={isEditMode} />{" "}
            <span className="text-primary-green">
              <EditableText initialText={financials.title.highlight} isEditMode={isEditMode} />
            </span>
          </h2>
          <p className="mt-4 text-xl text-primary-light/80 max-w-3xl mx-auto">
            <EditableText initialText={financials.description} isEditMode={isEditMode} multiline />
          </p>
        </div>

        {/* Main Chart Area */}
        <div className={`mb-12 h-[500px] w-full glassmorphism-card p-6 rounded-3xl border border-white/5 relative ${!isStatic ? "reveal" : ""} ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
          <h3 className="text-2xl font-bold text-white mb-4 ml-4">Financial Projections (USD)</h3>
          <ResponsiveContainer width="100%" height="90%">
            <ComposedChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d8ff43" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#d8ff43" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis dataKey="year" stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
              <YAxis
                stroke="#9ca3af"
                tickFormatter={(value) => `$${value / 1000000}M`}
                tick={{ fill: '#9ca3af' }}
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff' }}
                itemStyle={{ color: '#d8ff43' }}
                formatter={(value: any) => [`$${(value / 1000000).toFixed(2)}M`, ""]}
              />
              <Legend iconType="circle" />
              <Bar name="Revenue" dataKey="revenue" fill="url(#colorRevenue)" barSize={40} radius={[4, 4, 0, 0]} animationDuration={500} isAnimationActive={!isStatic} />
              <Line name="EBITDA" type="monotone" dataKey="ebitda" stroke="#ffffff" strokeWidth={3} dot={{ r: 4, fill: "white" }} animationDuration={500} isAnimationActive={!isStatic} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* GRAPH DATA EDITOR (Visible only in Edit Mode) */}
        {isEditMode && (
          <div className="mb-12 p-6 glassmorphism-card rounded-2xl border border-primary-green/30 bg-primary-green/5">
            <h3 className="text-xl font-bold text-primary-green mb-4">Graph Data Editor</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-primary-light border-b border-white/10">
                    <th className="text-left py-2">Metric</th>
                    {financials.projections.years.map(y => <th key={y} className="py-2 px-4">{y}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-primary-green font-bold">Revenue</td>
                    {revenueData.map((val, idx) => (
                      <td key={idx} className="p-2 text-center">
                        <EditableText initialText={val} isEditMode={true} onChange={(txt) => handleUpdate(setRevenueData, idx, txt)} className="bg-black/40 w-24 text-center" />
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-white font-bold">EBITDA</td>
                    {ebitdaData.map((val, idx) => (
                      <td key={idx} className="p-2 text-center">
                        <EditableText initialText={val} isEditMode={true} onChange={(txt) => handleUpdate(setEbitdaData, idx, txt)} className="bg-black/40 w-24 text-center" />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2">* Updates update graph instantly. Supports &#39;K&#39; and &#39;M&#39; suffixes.</p>
            </div>
          </div>
        )}

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedMetric label="Break-Even Point" value={financials.breakEven.month} isStatic={isStatic} isEditMode={isEditMode} delay={400} />
          <AnimatedMetric label="Monthly Burn" value={financials.burnRate.monthly} isStatic={isStatic} isEditMode={isEditMode} delay={600} />
          <AnimatedMetric label="Gross Margin (Yr 5)" value={financials.projections.grossMargin[4]} isStatic={isStatic} isEditMode={isEditMode} delay={800} />
          <AnimatedMetric label="EBITDA (Yr 5)" value={ebitdaData[4]} isStatic={isStatic} isEditMode={isEditMode} delay={1000} />
        </div>

        {/* Assumptions List */}
        <div className={`mt-12 glassmorphism-card p-8 rounded-2xl max-w-4xl mx-auto ${!isStatic ? "reveal" : ""} ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "1200ms" }}>
          <h3 className="text-xl font-bold text-primary-green mb-4 border-b border-primary-green/20 pb-2">Key Assumptions</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {financials.keyAssumptions.map((assumption, index) => (
              <li key={index} className="flex items-start text-primary-light/80 text-sm">
                <span className="text-primary-green mr-2 mt-1">▹</span>
                <EditableText initialText={assumption} isEditMode={isEditMode} multiline />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
        }
        .animate-slide-up {
          animation-name: slideUp;
          animation-duration: 0.8s;
        }
      `}</style>
    </section>
  );
}
