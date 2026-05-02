import { GraduationCap, Code2, Sparkles, Target } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Readable, maintainable, and well-architected solutions.",
  },
  {
    icon: Target,
    title: "User-Focused",
    desc: "Designs that prioritize clarity, speed, and delight.",
  },
  {
    icon: Sparkles,
    title: "Scalable Systems",
    desc: "Built to grow — from MVP to production load.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title={
            <>
              Crafting digital experiences with{" "}
              <span className="text-gradient">purpose</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm <span className="text-foreground font-semibold">Sasthik Krishnamoorthy</span>,
              a passionate Full Stack Developer who loves turning ideas into
              real, functional, and beautiful products. My focus is on
              high-performance and user-centric web applications.
            </p>
            <p>
              With expertise across the MERN stack and Java/Spring Boot, I
              emphasize clean architecture, intuitive design and continuous
              learning — always exploring new technologies to ship better
              experiences.
            </p>

            <div className="rounded-2xl bg-gradient-card border border-border p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-1">
                    Education
                  </p>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    B.E. Computer Science Engineering
                  </h3>
                  <p className="text-muted-foreground">
                    Sri Krishna College of Engineering and Technology
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Expected Graduation:{" "}
                    <span className="text-primary font-semibold">2028</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.title}
                className="rounded-2xl bg-gradient-card border border-border p-6 hover-lift group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <h.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {h.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
            <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-6 sm:col-span-2 shadow-elegant">
              <p className="font-display text-3xl font-bold">2028</p>
              <p className="text-sm opacity-90 mt-1">
                Graduating with a vision to build products that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
