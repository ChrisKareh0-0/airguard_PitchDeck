import { newDeckContent } from "@/data/newDeckContent";

export default function EnhancedProblemSection() {
  return (
    <section
      id="problem"
      className="min-h-screen flex items-center py-4 md:py-10 bg-gradient-to-b from-primary-dark to-primary-darker overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {newDeckContent.problem.title.main}{" "}
            <span className="text-primary-green">
              {newDeckContent.problem.title.highlight}
            </span>
          </h2>
          <p className="mt-4 text-xl text-primary-light/80 max-w-3xl mx-auto">
            {newDeckContent.problem.description}
          </p>
        </div>

        {/* Pain Points Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {newDeckContent.problem.painPoints.map((point, index) => (
            <div
              key={point.description}
              className="glassmorphism-card p-8 rounded-2xl text-center reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-5xl md:text-6xl font-black text-primary-green mb-2">
                {point.metric}
              </p>
              <p className="text-lg text-primary-light font-semibold mb-3">
                {point.unit}
              </p>
              <p className="text-primary-light/80">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Real World Example */}
        <div className="glassmorphism-card p-8 md:p-12 rounded-2xl mb-12 reveal bg-gradient-to-r from-red-900/20 to-orange-900/20">
          <h3 className="text-2xl font-bold text-primary-green mb-4">
            Real-World Impact
          </h3>
          <p className="text-lg text-primary-light/90 italic">
            {newDeckContent.problem.realWorldExample}
          </p>
        </div>

        {/* Quote */}
        <div className="bg-primary-green p-8 md:p-12 rounded-2xl max-w-4xl mx-auto reveal">
          <blockquote className="text-xl md:text-2xl italic text-primary-dark relative">
            <span className="absolute -top-4 -left-6 text-6xl text-primary-dark/30 font-serif">
              &ldquo;
            </span>
            {newDeckContent.problem.quote.text}
            <span className="absolute -bottom-4 -right-6 text-6xl text-primary-dark/30 font-serif">
              &rdquo;
            </span>
          </blockquote>
          <p className="mt-4 text-right font-bold text-primary-dark">
            – {newDeckContent.problem.quote.attribution}
          </p>
        </div>
      </div>
    </section>
  );
}
