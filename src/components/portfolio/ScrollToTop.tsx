import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-elegant hover:shadow-glow hover:-translate-y-1 transition-smooth animate-fade-in"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
