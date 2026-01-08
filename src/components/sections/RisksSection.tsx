import { newDeckContent } from "@/data/newDeckContent";

export default function RisksSection() {
  const { risks } = newDeckContent;

  const severityColors: { [key: string]: string } = {
    Low: "bg-green-500/20 text-green-400 border-green-500/50",
    Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
    High: "bg-red-500/20 text-red-400 border-red-500/50",
    "High (Year 1-2)": "bg-red-500/20 text-red-400 border-red-500/50",
  };

  const statusColors: { [key: string]: string } = {
    "Active Monitoring": "bg-blue-500/20 text-blue-400",
    "Mitigation Active": "bg-green-500/20 text-green-400",
    "Strategic Priority": "bg-purple-500/20 text-purple-400",
    "De-risked via Pilot": "bg-green-500/20 text-green-400",
    "Mitigation Planned": "bg-yellow-500/20 text-yellow-400",
    "Competitive Moat Building": "bg-primary-green/20 text-primary-green",
  };

  return (
    <section
      id="risks"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {risks.title.main}{" "}
            <span className="text-primary-green">{risks.title.highlight}</span>
          </h2>
          <p className="mt-4 text-xl text-primary-light/80 max-w-3xl mx-auto">
            {risks.description}
          </p>
        </div>

        {/* Risk Factors */}
        <div className="space-y-6">
          {risks.riskFactors.map((riskFactor, index) => (
            <div
              key={riskFactor.risk}
              className="glassmorphism-card p-8 rounded-2xl reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary-light mb-2 md:mb-0 flex-1">
                  {riskFactor.risk}
                </h3>
                <div className="flex gap-3 flex-wrap">
                  <span
                    className={`inline-block px-4 py-1 rounded-full font-semibold text-sm border ${
                      severityColors[riskFactor.severity]
                    }`}
                  >
                    {riskFactor.severity}
                  </span>
                  <span
                    className={`inline-block px-4 py-1 rounded-full font-semibold text-sm ${
                      statusColors[riskFactor.status]
                    }`}
                  >
                    {riskFactor.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-primary-green font-semibold">
                    Description:
                  </span>
                  <p className="text-primary-light/80 mt-1">
                    {riskFactor.description}
                  </p>
                </div>

                <div>
                  <span className="text-primary-green font-semibold">
                    Mitigation Strategy:
                  </span>
                  <p className="text-primary-light/80 mt-1">
                    {riskFactor.mitigation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Risk Summary */}
        <div className="mt-16 glassmorphism-card p-8 rounded-2xl text-center reveal">
          <h3 className="text-2xl font-bold text-primary-green mb-4">
            Risk Management Approach
          </h3>
          <p className="text-lg text-primary-light/90 max-w-3xl mx-auto">
            We proactively identify and address risks through strategic
            planning, diverse partnerships, and continuous monitoring. Our
            90-day pilot has already de-risked core technology performance, and
            we&apos;re building comprehensive mitigation strategies for market and
            operational challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
