import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/portfolio-data";

const TITLES = [
  "Full Stack Developer",
  "MERN Stack Specialist",
  "Building Scalable Apps",
];

export const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[idx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % TITLES.length);
        return;
      }
      setText(
        deleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1),
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-background/70"
        aria-hidden
      />

      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-primary font-medium tracking-wide">
              Hi, I'm
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Sasthik <span className="text-gradient">K</span>
            </h1>
            <p className="text-2xl md:text-3xl font-display font-semibold text-muted-foreground min-h-[2.5rem]">
              {text}
              <span className="inline-block w-[3px] h-7 bg-primary ml-1 animate-blink align-middle" />
            </p>
          </div>

          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            A passionate Full Stack Developer focused on building
            high-performance, scalable, and user-centric web applications —
            with clean architecture, intuitive design, and a love for
            continuous learning.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="lg" onClick={() => go("projects")}>
              View Projects <ArrowRight />
            </Button>
            <Button variant="outlineGlow" size="lg" onClick={() => go("contact")}>
              <Mail /> Contact Me
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#" download>
                <Download /> Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <span className="text-sm text-muted-foreground">Follow me</span>
            <div className="flex gap-2">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-scale-in">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary rounded-full blur-3xl opacity-25 animate-glow-pulse" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1.5 bg-gradient-primary shadow-elegant animate-float">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <img
                  src={profile}
                  alt="Sasthik K — Full Stack Developer"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating tech badges */}
            <div className="absolute -top-2 -right-2 glass rounded-2xl px-4 py-2 shadow-card animate-float" style={{ animationDelay: "0.5s" }}>
              <span className="text-sm font-semibold">⚛️ React</span>
            </div>
            <div className="absolute -bottom-2 -left-2 glass rounded-2xl px-4 py-2 shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <span className="text-sm font-semibold">🟢 Node.js</span>
            </div>
            <div className="absolute top-1/2 -left-8 glass rounded-2xl px-4 py-2 shadow-card animate-float hidden md:block" style={{ animationDelay: "1.5s" }}>
              <span className="text-sm font-semibold">🍃 MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
