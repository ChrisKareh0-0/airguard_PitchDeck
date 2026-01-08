import { contentData } from "@/data";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {contentData.team.title.main}{" "}
            <span className="text-primary-green">
              {contentData.team.title.highlight}
            </span>
            .
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contentData.team.members.map((member, index) => (
            <div
              key={member.name}
              className="glassmorphism-card p-6 rounded-2xl reveal text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <h3 className="text-xl font-bold text-primary-light">
                  {member.name}
                </h3>
                <p className="text-primary-green font-semibold">
                  {member.role}
                </p>
                <p className="mt-2 text-primary-light/80 text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
