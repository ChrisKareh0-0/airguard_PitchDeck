import { newDeckContent } from "@/data/newDeckContent";

export default function GoToMarketSection() {
  const { goToMarket } = newDeckContent;

  return (
    <section
      id="go-to-market"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {goToMarket.title.main}{" "}
            <span className="text-primary-green">
              {goToMarket.title.highlight}
            </span>
          </h2>
          <p className="mt-4 text-xl text-primary-light/80 max-w-3xl mx-auto">
            {goToMarket.description}
          </p>
        </div>

        {/* Strategy Phases */}
        <div className="space-y-8 mb-16">
          {goToMarket.phases.map((phase, index) => (
            <div
              key={phase.phase}
              className="glassmorphism-card p-8 rounded-2xl reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-green rounded-full flex items-center justify-center">
                  <span className="text-2xl font-black text-primary-dark">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-green mb-2">
                    {phase.phase}
                  </h3>
                  <p className="text-primary-light font-semibold mb-3">
                    Strategy: {phase.strategy}
                  </p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-primary-green font-semibold">
                        Target Customers:
                      </span>
                      <ul className="ml-6 mt-2 space-y-1">
                        {phase.targets.map((target) => (
                          <li
                            key={target}
                            className="text-primary-light/80 flex items-start"
                          >
                            <span className="text-primary-green mr-2">→</span>
                            {target}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-primary-green font-semibold">
                        Metrics:
                      </span>
                      <span className="text-primary-light/80 ml-2">
                        {phase.metrics}
                      </span>
                    </div>
                    <div>
                      <span className="text-primary-green font-semibold">
                        Sales Cycle:
                      </span>
                      <span className="text-primary-light/80 ml-2">
                        {phase.salesCycle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Acquisition Strategy */}
        <div className="mb-16 reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-green mb-6 text-center">
            {goToMarket.customerAcquisition.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {goToMarket.customerAcquisition.channels.map((channel, index) => (
              <div
                key={channel.channel}
                className="glassmorphism-card p-6 rounded-2xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-bold text-primary-light mb-2">
                  {channel.channel}
                </h4>
                <p className="text-3xl font-black text-primary-green mb-3">
                  {channel.cac}
                </p>
                <p className="text-sm text-primary-light/80">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Validation */}
        <div className="glassmorphism-card p-8 rounded-2xl text-center reveal">
          <h3 className="text-2xl font-bold text-primary-green mb-4">
            Pricing Validation
          </h3>
          <p className="text-lg text-primary-light/90 max-w-3xl mx-auto">
            {goToMarket.pricingValidation}
          </p>
        </div>
      </div>
    </section>
  );
}
