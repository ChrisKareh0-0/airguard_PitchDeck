import { contentData } from "@/data";

export default function CompetitionSection() {
  return (
    <section
      id="competition"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-light text-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-10 reveal">
          <h2 className="section-heading text-4xl md:text-6xl">
            {contentData.competition.title.main}{" "}
            <span
              className="text-primary-green accent-red"
              style={{ color: "#191919" }}
            >
              {contentData.competition.title.highlight}
            </span>{" "}
            {contentData.competition.title.suffix}
          </h2>
        </div>
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto reveal">
          <table className="w-full min-w-max text-left text-lg">
            <thead className="border-b-2 border-primary-dark/20">
              <tr>
                {contentData.competition.comparisonTable.headers.map(
                  (header, index) => (
                    <th
                      key={header}
                      className={`p-4 font-bold ${
                        index === 1 ? "bg-primary-dark/10 rounded-t-lg" : ""
                      }`}
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {contentData.competition.comparisonTable.rows.map(
                (row, index) => (
                  <tr
                    key={row.feature}
                    className={
                      index <
                      contentData.competition.comparisonTable.rows.length - 1
                        ? "border-b border-primary-dark/10"
                        : ""
                    }
                  >
                    <td className="p-4 font-bold">{row.feature}</td>
                    <td
                      className={`p-4 bg-primary-dark/5 text-primary-dark font-bold ${
                        index ===
                        contentData.competition.comparisonTable.rows.length - 1
                          ? "rounded-b-lg"
                          : ""
                      }`}
                    >
                      <span className="text-green-600 font-black">
                        {row.airguard}
                      </span>
                    </td>
                    <td className="p-4">{row.integrated}</td>
                    <td className="p-4">{row.manual}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 reveal">
          {contentData.competition.comparisonTable.rows.map((row) => (
            <div
              key={row.feature}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-primary-dark mb-6 text-center">
                {row.feature}
              </h3>
              <div className="space-y-4">
                <div className="bg-primary-green/10 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-primary-dark mb-2">
                      {contentData.competition.comparisonTable.headers[1]}
                    </div>
                    <div className="text-xl font-bold text-green-600">
                      {row.airguard}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-primary-dark mb-2">
                      {contentData.competition.comparisonTable.headers[2]}
                    </div>
                    <div className="text-xl font-bold text-gray-700">
                      {row.integrated}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-primary-dark mb-2">
                      {contentData.competition.comparisonTable.headers[3]}
                    </div>
                    <div className="text-xl font-bold text-gray-700">
                      {row.manual}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
