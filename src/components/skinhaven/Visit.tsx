const Visit = () => {
  return (
    <section id="visit" className="py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4">Plan Your Visit</p>
          <h2 className="font-display text-5xl md:text-6xl italic">Hours & Location</h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border/50 p-12 text-center hover:border-primary/60 transition-colors duration-500">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Operating Hours</p>
            <p className="font-display text-4xl md:text-5xl mb-6">9:00 — 16:30</p>
            <div className="gold-divider w-16 mx-auto mb-6" />
            <p className="text-muted-foreground tracking-widest uppercase text-sm">Tuesday — Saturday</p>
            <p className="text-muted-foreground/60 text-xs mt-3">Closed Sunday & Monday</p>
          </div>

          <div className="border border-border/50 p-12 text-center hover:border-primary/60 transition-colors duration-500">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Find Us</p>
            <p className="font-display text-2xl md:text-3xl mb-3">84AM Seshota Crescent</p>
            <p className="font-display text-2xl md:text-3xl mb-6 text-muted-foreground">Spruitview</p>
            <div className="gold-divider w-16 mx-auto mb-6" />
            <p className="text-muted-foreground text-sm">Reg No. 2022/496761/07</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
