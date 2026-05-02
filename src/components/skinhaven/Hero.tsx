import heroImg from "@/assets/hero-spa.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxurious candlelit spa treatment room"
          className="w-full h-full object-cover scale-105"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-up">
        <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-primary mb-6 animate-shimmer">
          Est. 2022 · Spruitview
        </p>
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-gradient-gold mb-2 leading-none">
          Skin haven
        </h1>
        <p className="text-xs md:text-sm tracking-[0.6em] uppercase text-foreground/80 mb-10">
          Clinic
        </p>
        <div className="gold-divider w-32 mx-auto mb-10" />
        <h2 className="font-display text-2xl md:text-4xl text-foreground/90 mb-8 italic font-light">
          Where beauty meets serenity.
        </h2>
        <p className="max-w-xl mx-auto text-foreground/70 mb-12 leading-relaxed">
          A sanctuary of refined treatments — facials, lashes, nails, massages and spa rituals
          crafted for men, women, teens and kiddies alike.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#treatments"
            className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:shadow-luxe transition-all duration-500"
          >
            Explore Treatments
          </a>
          <a
            href="https://wa.me/27796871358"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/60 text-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 text-xs tracking-[0.4em] uppercase">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
