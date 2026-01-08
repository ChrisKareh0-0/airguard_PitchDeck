import { contentData } from "@/data";

export default function AskSection() {
  return (
    <section
      id="ask"
      className="min-h-screen flex items-center py-4 md:py-10 bg-[#e6ff3f] text-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-12 items-center justify-center">
          {/* Left: Main Heading and Description */}
          <div className="md:w-1/2 flex flex-col justify-center items-start">
            <div className="mb-8 md:mb-0 reveal">
              <h2 className="section-heading text-5xl md:text-6xl font-black mb-6 text-black">
                {contentData.ask.title}
              </h2>
              <div className="max-w-2xl">
                <p className="text-2xl font-bold text-black mb-4">
                  We are seeking
                  <span
                    className="bg-black text-[#e6ff3f] font-bold px-2 py-1 rounded-md border border-black mx-2 inline-flex items-center leading-none"
                    style={{ fontSize: "1.25em" }}
                  >
                    $450K
                  </span>
                  for 10% equity to accelerate our growth and capture the
                  rapidly growing MENA market.
                </p>
                <p className="text-xl text-black mt-2">
                  This seed round ask is aligned with the regional average for
                  deep-tech startups and will fund our growth plan.
                </p>
              </div>
            </div>
          </div>
          {/* Right: Use of Funds and Key Focus Areas */}
          <div className="md:w-1/2 flex flex-col gap-y-4 w-full">
            {/* Use of Funds Box */}
            <div className="bg-black rounded-2xl shadow-2xl p-4 mb-4 w-full max-w-xl mx-auto reveal">
              <h3 className="text-2xl font-bold text-center mb-4 text-[#e6ff3f]">
                Use of Funds
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {contentData.ask.useOfFunds.breakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center text-center mb-1"
                  >
                    <span className="text-2xl font-extrabold text-[#e6ff3f]">
                      {item.percentage}
                    </span>
                    <span className="text-sm font-bold text-white mt-2 mb-1">
                      {item.category}
                    </span>
                    <span className="text-lg font-bold text-[#e6ff3f]">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Strategic Partners Needed Box */}
            <div className="bg-black rounded-2xl shadow-2xl p-6 w-full max-w-xl mx-auto reveal">
              <h4 className="text-2xl font-bold text-center mb-6 text-[#e6ff3f]">
                Strategic Partners Needed
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 text-[#e6ff3f] text-lg text-center">
                {contentData.ask.strategicPartners.partners.map(
                  (partner, idx) => (
                    <div key={idx}>{partner}</div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
