import { useState, useEffect } from "react";

const links = [
  { href: "#treatments", label: "Treatments" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/40" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-script text-3xl text-gradient-gold">Skin haven</span>
          <span className="text-[0.6rem] tracking-[0.4em] text-muted-foreground uppercase mt-0.5">Clinic</span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/27796871358"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-xs uppercase tracking-[0.25em] border border-primary/60 text-primary px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Book Now
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
