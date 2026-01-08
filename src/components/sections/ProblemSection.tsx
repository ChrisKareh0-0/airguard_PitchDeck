import { contentData } from "@/data";

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-light text-primary-dark overflow-visible"
    >
      <div
        className="container mx-auto px-8 md:px-12 lg:px-16"
        style={{ overflow: "visible" }}
      >
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="section-heading text-4xl md:text-6xl">
            {contentData.problem.title.main}{" "}
            <span className="text-primary-green accent-red">
              {contentData.problem.title.highlight}
            </span>
            .
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600">
            {contentData.problem.description}
          </p>
        </div>
        <div className="mt-16 bg-primary-green p-8 md:p-12 rounded-2xl max-w-4xl mx-auto text-center shadow-2xl reveal relative z-10">
          <p className="text-2xl md:text-4xl font-bold text-primary-dark">
            &ldquo;{contentData.problem.quote.text}&rdquo;
          </p>
          <p className="mt-4 text-lg text-primary-dark opacity-80">
            {contentData.problem.quote.attribution}
          </p>
        </div>
      </div>
    </section>
  );
}
