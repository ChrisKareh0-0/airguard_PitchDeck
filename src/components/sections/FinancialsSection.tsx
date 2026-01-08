import { newDeckContent } from "@/data/newDeckContent";

export default function FinancialsSection() {
  const { financials } = newDeckContent;

  return (
    <section
      id="financials"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {financials.title.main}{" "}
            <span className="text-primary-green">
              {financials.title.highlight}
            </span>
          </h2>
          <p className="mt-4 text-xl text-primary-light/80 max-w-3xl mx-auto">
            {financials.description}
          </p>
        </div>

        {/* Revenue Projections Table */}
        <div className="mb-16 reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-green mb-6 text-center">
            5-Year Financial Projections
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full glassmorphism-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-primary-green/20">
                  <th className="px-6 py-4 text-left text-primary-light font-bold">
                    Metric
                  </th>
                  {financials.projections.years.map((year) => (
                    <th
                      key={year}
                      className="px-6 py-4 text-center text-primary-light font-bold"
                    >
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-primary-light/10">
                  <td className="px-6 py-4 text-primary-light font-semibold">
                    Revenue
                  </td>
                  {financials.projections.revenue.map((value, idx) => (
                    <td
                      key={idx}
                      className="px-6 py-4 text-center text-primary-green font-bold"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-primary-light/10">
                  <td className="px-6 py-4 text-primary-light font-semibold">
                    Gross Margin
                  </td>
                  {financials.projections.grossMargin.map((value, idx) => (
                    <td
                      key={idx}
                      className="px-6 py-4 text-center text-primary-light/80"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-primary-light/10">
                  <td className="px-6 py-4 text-primary-light font-semibold">
                    Operating Expenses
                  </td>
                  {financials.projections.operatingExpenses.map(
                    (value, idx) => (
                      <td
                        key={idx}
                        className="px-6 py-4 text-center text-primary-light/80"
                      >
                        {value}
                      </td>
                    )
                  )}
                </tr>
                <tr className="border-b border-primary-light/10">
                  <td className="px-6 py-4 text-primary-light font-semibold">
                    EBITDA
                  </td>
                  {financials.projections.ebitda.map((value, idx) => (
                    <td
                      key={idx}
                      className={`px-6 py-4 text-center font-bold ${
                        value.startsWith("-")
                          ? "text-red-400"
                          : "text-primary-green"
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-primary-light/10">
                  <td className="px-6 py-4 text-primary-light font-semibold">
                    Customers
                  </td>
                  {financials.projections.customers.map((value, idx) => (
                    <td
                      key={idx}
                      className="px-6 py-4 text-center text-primary-light/80"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-primary-light font-semibold">
                    Devices Deployed
                  </td>
                  {financials.projections.devicesDeployed.map((value, idx) => (
                    <td
                      key={idx}
                      className="px-6 py-4 text-center text-primary-light/80"
                    >
                      {value.toLocaleString()}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Assumptions */}
        <div className="mb-16 reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-green mb-6 text-center">
            Key Assumptions
          </h3>
          <div className="glassmorphism-card p-8 rounded-2xl max-w-4xl mx-auto">
            <ul className="space-y-3">
              {financials.keyAssumptions.map((assumption, index) => (
                <li
                  key={index}
                  className="flex items-start text-primary-light/90"
                >
                  <span className="text-primary-green mr-3 text-xl">•</span>
                  <span>{assumption}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Break-Even & Burn Rate */}
        <div className="grid md:grid-cols-2 gap-8 reveal">
          <div className="glassmorphism-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-green mb-4">
              Break-Even Point
            </h3>
            <p className="text-4xl font-black text-primary-light mb-2">
              {financials.breakEven.month}
            </p>
            <p className="text-primary-light/80">
              {financials.breakEven.description}
            </p>
          </div>

          <div className="glassmorphism-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-green mb-4">
              Burn Rate & Runway
            </h3>
            <p className="text-4xl font-black text-primary-light mb-2">
              {financials.burnRate.monthly}
            </p>
            <p className="text-primary-light/80">
              {financials.burnRate.runway}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
