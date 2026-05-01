import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";
import { CONTACT } from "@/lib/portfolio-data";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-lg">
            <span className="text-gradient">Sasthik</span>.K
          </p>
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5 justify-center md:justify-start">
            © {new Date().getFullYear()} — Crafted with{" "}
            <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> and clean code
          </p>
        </div>
        <div className="flex gap-2">
          {[
            { icon: Github, href: CONTACT.github, label: "GitHub" },
            { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
            { icon: Instagram, href: CONTACT.instagram, label: "Instagram" },
            { icon: Mail, href: `mailto:${CONTACT.email}`, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
