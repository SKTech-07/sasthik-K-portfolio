import { Briefcase, Trophy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { EXPERIENCES } from "@/lib/portfolio-data";

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              My professional <span className="text-gradient">journey</span>
            </>
          }
          description="From hackathons to real-world internships — building, shipping, and learning."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => {
              const Icon = exp.type === "work" ? Briefcase : Trophy;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 items-center ${
                    isLeft ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                      <Icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>

                  <div
                    className={`pl-16 md:pl-0 ${
                      isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:[direction:ltr]"
                    }`}
                  >
                    <div className="rounded-2xl bg-gradient-card border border-border p-6 hover-lift inline-block w-full">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                        {exp.date}
                      </span>
                      <h3 className="font-display text-xl font-bold">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        {exp.org}
                      </p>
                      <ul
                        className={`space-y-2 text-sm text-muted-foreground ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        {exp.points.map((p) => (
                          <li
                            key={p}
                            className={`flex gap-2 ${
                              isLeft ? "md:flex-row-reverse md:[direction:ltr]" : ""
                            }`}
                          >
                            <span className="text-primary mt-1 shrink-0">▸</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
