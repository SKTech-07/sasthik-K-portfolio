import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import { PROJECTS } from "@/lib/portfolio-data";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title={
            <>
              Featured <span className="text-gradient">projects</span>
            </>
          }
          description="A selection of work that demonstrates my approach to building real, scalable products."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="group relative rounded-3xl bg-gradient-card border border-border overflow-hidden hover-lift"
            >
              {/* Decorative top gradient */}
              <div className="h-40 bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary-glow)/0.6),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-7xl font-bold text-primary-foreground/20">
                    0{i + 1}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {p.description}
                </p>

                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <Github /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
