import { newDeckContent } from "@/data/newDeckContent";

export default function CompetitiveAdvantageSection() {
  const { competitiveAdvantage } = newDeckContent;

  const iconMap: { [key: string]: string } = {
    database: "📊",
    shield: "🛡️",
    chip: "💻",
    flag: "🚩",
  };

  return (
    <section
      id="competitive-advantage"
      className="min-h-screen flex items-center py-4 md:py-10 bg-gradient-to-b from-primary-dark to-primary-darker overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {competitiveAdvantage.title.main}{" "}
            <span className="text-primary-green">
              {competitiveAdvantage.title.highlight}
            </span>{" "}
            {competitiveAdvantage.title.suffix}
          </h2>
          <p className="mt-4 text-xl text-primary-light/80 max-w-3xl mx-auto">
            {competitiveAdvantage.description}
          </p>
        </div>

        {/* Moats Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {competitiveAdvantage.moats.map((moat, index) => (
            <div
              key={moat.title}
              className="glassmorphism-card p-8 rounded-2xl reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{iconMap[moat.icon]}</div>
              <h3 className="text-2xl font-bold text-primary-green mb-3">
                {moat.title}
              </h3>
              <p className="text-primary-light/80">{moat.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-green mb-6 text-center">
            Competitive Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full glassmorphism-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-primary-green/20">
                  {competitiveAdvantage.comparisonTable.headers.map(
                    (header) => (
                      <th
                        key={header}
                        className="px-6 py-4 text-left text-primary-light font-bold"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {competitiveAdvantage.comparisonTable.rows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={
                      idx !== competitiveAdvantage.comparisonTable.rows.length - 1
                        ? "border-b border-primary-light/10"
                        : ""
                    }
                  >
                    <td className="px-6 py-4 text-primary-light font-semibold">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-primary-green font-bold">
                      {row.airguard}
                    </td>
                    <td className="px-6 py-4 text-primary-light/70">
                      {row.integrated}
                    </td>
                    <td className="px-6 py-4 text-primary-light/70">
                      {row.manual}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
