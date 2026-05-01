import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, Linkedin, Github, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { SectionHeader } from "./SectionHeader";
import { CONTACT } from "@/lib/portfolio-data";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const INFO = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sasthik-k", href: CONTACT.linkedin },
  { icon: Github, label: "GitHub", value: "github.com/sasthik-k", href: CONTACT.github },
  { icon: Instagram, label: "Instagram", value: "@sasthik.k", href: CONTACT.instagram },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fe[i.path[0] as string] = i.message;
      });
      setErrors(fe);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="text-gradient">together</span>
            </>
          }
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 space-y-3">
            {INFO.map((i) => (
              <a
                key={i.label}
                href={i.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth shrink-0">
                  <i.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {i.label}
                  </p>
                  <p className="font-medium truncate">{i.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl bg-gradient-card border border-border p-6 md:p-8 space-y-5 shadow-card"
            noValidate
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  maxLength={100}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@example.com"
                  maxLength={255}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                maxLength={1000}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="text-xs text-destructive">{errors.message}</p>
              )}
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading}>
              {loading ? "Sending..." : (<><Send /> Send Message</>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
