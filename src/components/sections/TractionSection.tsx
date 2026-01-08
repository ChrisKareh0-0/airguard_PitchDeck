import { contentData } from "@/data";

export default function TractionSection() {
  return (
    <section
      id="traction"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {contentData.traction.title.main}{" "}
            <span className="text-primary-green">
              {contentData.traction.title.highlight}
            </span>{" "}
            {contentData.traction.title.suffix}
          </h2>
        </div>
        <div className="bg-primary-green p-8 md:p-12 rounded-2xl max-w-4xl mx-auto reveal">
          <blockquote className="text-xl md:text-2xl italic text-primary-dark relative">
            <span className="absolute -top-4 -left-6 text-6xl text-primary-dark/30 font-serif">
              &ldquo;
            </span>
            {contentData.traction.testimonial.quote}
            <span className="absolute -bottom-4 -right-6 text-6xl text-primary-dark/30 font-serif">
              &rdquo;
            </span>
          </blockquote>
          <p className="mt-4 text-right font-bold text-primary-dark">
            – Mr. Steve Romano, Major Regional ISP, Byblos
          </p>
        </div>
      </div>
    </section>
  );
}
