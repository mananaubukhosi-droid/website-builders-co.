import facialImg from "@/assets/treatment-facial.jpg";
import nailsImg from "@/assets/treatment-nails.jpg";
import massageImg from "@/assets/treatment-massage.jpg";

const treatments = [
  {
    title: "Facials",
    desc: "Deeply cleansing, brightening and rejuvenating rituals tailored to your skin.",
    image: facialImg,
  },
  {
    title: "Microblading",
    desc: "Bespoke brow artistry — natural, defined and beautifully shaped.",
    image: facialImg,
  },
  {
    title: "Eyelash Extensions",
    desc: "Lashes that flutter — classic, hybrid and volume sets applied with precision.",
    image: facialImg,
  },
  {
    title: "Manicure & Pedicure",
    desc: "Spa-grade hand and foot care that leaves you polished from tip to toe.",
    image: nailsImg,
  },
  {
    title: "Full Body Massages",
    desc: "Swedish, deep tissue and hot stone — restorative touch for body and mind.",
    image: massageImg,
  },
  {
    title: "Nail Extensions",
    desc: "Sculpted, styled and finished — from elegant naturals to bold statements.",
    image: nailsImg,
  },
  {
    title: "Spa Packages",
    desc: "Curated half-day and full-day journeys for the ultimate escape.",
    image: massageImg,
  },
  {
    title: "Waxing & More",
    desc: "Smooth, gentle hair removal and the little extras that complete your visit.",
    image: facialImg,
  },
];

const Treatments = () => {
  return (
    <section id="treatments" className="py-32 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4">Our Menu</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6 italic">
            Treatments
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-muted-foreground">
            A complete range of beauty and wellness services — for everyone, every age.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t, i) => (
            <article
              key={t.title}
              className="group relative overflow-hidden bg-card border border-border/40 hover:border-primary/60 transition-all duration-500"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl text-foreground mb-2">{t.title}</h3>
                <div className="h-px w-8 bg-primary mb-3 group-hover:w-16 transition-all duration-500" />
                <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {t.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center mt-16 text-muted-foreground italic font-display text-xl">
          Treatments available for men and women — teens and kiddies are welcome too.
        </p>
      </div>
    </section>
  );
};

export default Treatments;
