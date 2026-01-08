import { newDeckContent } from "@/data/newDeckContent";

export default function EnhancedMarketSection() {
  return (
    <section
      id="market"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {newDeckContent.market.title.main}{" "}
            <span className="text-primary-green">
              {newDeckContent.market.title.highlight}
            </span>{" "}
            {newDeckContent.market.title.suffix}
          </h2>
          <p className="mt-4 text-xl text-primary-light/80 max-w-3xl mx-auto">
            {newDeckContent.market.description}
          </p>
        </div>

        {/* TAM/SAM/SOM Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {newDeckContent.market.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="glassmorphism-card p-8 rounded-2xl text-center reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-lg font-semibold text-primary-green mb-2">
                {metric.label}
              </p>
              <p className="text-5xl md:text-6xl font-black text-primary-light mb-3">
                {metric.value}
              </p>
              <p className="text-primary-light/80">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Market Drivers */}
        <div className="mb-16 reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-green mb-8 text-center">
            Key Market Drivers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {newDeckContent.market.marketDrivers.map((driver, index) => (
              <div
                key={driver.title}
                className="glassmorphism-card p-6 rounded-2xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-bold text-primary-light mb-3">
                  {driver.title}
                </h4>
                <p className="text-primary-light/80">{driver.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gartner Forecast */}
        <div className="glassmorphism-card p-8 md:p-12 rounded-2xl text-center reveal bg-gradient-to-r from-primary-green/10 to-blue-500/10">
          <h3 className="text-2xl font-bold text-primary-green mb-4">
            Gartner Forecast
          </h3>
          <p className="text-lg text-primary-light/90 max-w-3xl mx-auto">
            {newDeckContent.market.gartnerForecast}
          </p>
        </div>
      </div>
    </section>
  );
}
