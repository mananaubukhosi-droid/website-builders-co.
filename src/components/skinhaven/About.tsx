import massageImg from "@/assets/treatment-massage.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-luxe relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden shadow-luxe">
            <img
              src={massageImg}
              alt="Tranquil spa moment at Skin Haven Clinic"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block border border-primary/60 w-full h-full -z-10" />
        </div>

        <div>
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4">About the Clinic</p>
          <h2 className="font-display text-5xl md:text-6xl mb-8 italic leading-tight">
            A quiet retreat <br />
            for radiant{" "}
            <span className="text-gradient-gold">skin</span>.
          </h2>
          <div className="gold-divider w-24 mb-8" />
          <p className="text-foreground/80 leading-loose mb-6">
            Skin Haven Clinic is a refined beauty and wellness destination in Spruitview,
            where time slows and self-care takes centre stage. From the moment you arrive,
            you are welcomed into a space designed for restoration, glow and quiet luxury.
          </p>
          <p className="text-foreground/80 leading-loose mb-10">
            Every treatment is performed with care, precision and the highest standards of
            hygiene — using premium products and proven techniques tailored to your needs.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40">
            <div>
              <p className="font-display text-3xl text-primary">2022</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Established</p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary">8+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Treatments</p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary">All</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Ages Welcome</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
