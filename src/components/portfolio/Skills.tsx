import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { SKILLS } from "@/lib/portfolio-data";
import { Code, Server, Database, Sparkles } from "lucide-react";

const ICONS = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  "Other Skills": Sparkles,
} as const;

export const Skills = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              Tools & technologies I{" "}
              <span className="text-gradient">work with</span>
            </>
          }
          description="A curated toolkit refined through projects, hackathons and real-world deployments."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([category, items]) => {
            const Icon = ICONS[category as keyof typeof ICONS];
            return (
              <div
                key={category}
                className="rounded-2xl bg-gradient-card border border-border p-6 md:p-8 hover-lift"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {items.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-primary font-semibold">
                          {s.level}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: visible ? `${s.level}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
