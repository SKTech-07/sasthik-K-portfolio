import { Code2, Palette, Plug, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SERVICES } from "@/lib/portfolio-data";

const ICONS = { Code2, Palette, Plug } as const;

export const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              What I <span className="text-gradient">offer</span>
            </>
          }
          description="Modern, scalable, and user-friendly solutions tailored to your goals."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <div
                key={s.title}
                className="group relative rounded-2xl bg-gradient-card border border-border p-8 hover-lift overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-elegant group-hover:scale-110 transition-smooth">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {s.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-smooth">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
