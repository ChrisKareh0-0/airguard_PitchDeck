import { newDeckContent } from "@/data/newDeckContent";

export default function ExitStrategySection() {
  const { exitStrategy } = newDeckContent;

  return (
    <section
      id="exit-strategy"
      className="min-h-screen flex items-center py-4 md:py-10 bg-gradient-to-b from-primary-darker to-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {exitStrategy.title.main}{" "}
            <span className="text-primary-green">
              {exitStrategy.title.highlight}
            </span>
          </h2>
          <p className="mt-4 text-xl text-primary-light/80 max-w-3xl mx-auto">
            {exitStrategy.description}
          </p>
        </div>

        {/* Potential Acquirers */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-green mb-8 text-center reveal">
            Strategic Acquisition Targets
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {exitStrategy.potentialAcquirers.map((acquirer, index) => (
              <div
                key={acquirer.company}
                className="glassmorphism-card p-8 rounded-2xl reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="text-2xl font-black text-primary-light mb-3">
                  {acquirer.company}
                </h4>
                <div className="mb-4">
                  <span className="text-primary-green font-semibold">
                    Strategic Rationale:
                  </span>
                  <p className="text-primary-light/80 mt-1">
                    {acquirer.rationale}
                  </p>
                </div>
                <div>
                  <span className="text-primary-green font-semibold">
                    Recent Activity:
                  </span>
                  <p className="text-primary-light/80 mt-1">
                    {acquirer.recentActivity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exit Timeline */}
        <div className="mb-16 reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-green mb-8 text-center">
            Exit Timeline & Valuation Scenarios
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glassmorphism-card p-8 rounded-2xl border-2 border-primary-green/30">
              <div className="text-center mb-4">
                <span className="inline-block bg-primary-green text-primary-dark px-4 py-2 rounded-full font-bold text-sm">
                  SHORT-TERM
                </span>
              </div>
              <h4 className="text-3xl font-black text-primary-light mb-2 text-center">
                {exitStrategy.exitTimeline.shortTerm.years}
              </h4>
              <p className="text-xl text-primary-green font-semibold mb-4 text-center">
                {exitStrategy.exitTimeline.shortTerm.scenario}
              </p>
              <p className="text-4xl font-black text-primary-green mb-4 text-center">
                {exitStrategy.exitTimeline.shortTerm.valuation}
              </p>
              <p className="text-primary-light/80 text-center">
                {exitStrategy.exitTimeline.shortTerm.description}
              </p>
            </div>

            <div className="glassmorphism-card p-8 rounded-2xl border-2 border-primary-green">
              <div className="text-center mb-4">
                <span className="inline-block bg-primary-green text-primary-dark px-4 py-2 rounded-full font-bold text-sm">
                  LONG-TERM
                </span>
              </div>
              <h4 className="text-3xl font-black text-primary-light mb-2 text-center">
                {exitStrategy.exitTimeline.longTerm.years}
              </h4>
              <p className="text-xl text-primary-green font-semibold mb-4 text-center">
                {exitStrategy.exitTimeline.longTerm.scenario}
              </p>
              <p className="text-4xl font-black text-primary-green mb-4 text-center">
                {exitStrategy.exitTimeline.longTerm.valuation}
              </p>
              <p className="text-primary-light/80 text-center">
                {exitStrategy.exitTimeline.longTerm.description}
              </p>
            </div>
          </div>
        </div>

        {/* Comparable Exits */}
        <div className="reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-green mb-8 text-center">
            Comparable Exits in Network Infrastructure
          </h3>
          <div className="glassmorphism-card p-8 rounded-2xl">
            <div className="space-y-6">
              {exitStrategy.comparableExits.map((exit, index) => (
                <div
                  key={exit.company}
                  className={`flex flex-col md:flex-row justify-between items-start md:items-center ${
                    index !== exitStrategy.comparableExits.length - 1
                      ? "pb-6 border-b border-primary-light/10"
                      : ""
                  }`}
                >
                  <div className="flex-1 mb-2 md:mb-0">
                    <h4 className="text-xl font-bold text-primary-light">
                      {exit.company}
                    </h4>
                    <p className="text-primary-light/80">{exit.exit}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-block bg-primary-green/20 text-primary-green px-4 py-2 rounded-full font-bold">
                      {exit.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
