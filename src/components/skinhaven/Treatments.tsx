import facialImg from "@/assets/treatment-facial.jpg";
import nailsImg from "@/assets/treatment-nails.jpg";
import massageImg from "@/assets/treatment-massage.jpg";

type Item = { name: string; price: string };
type Category = { title: string; image: string; items: Item[] };

const categories: Category[] = [
  {
    title: "Massages",
    image: massageImg,
    items: [
      { name: "Swedish massage (60min)", price: "R550" },
      { name: "Hot stone massage (60min)", price: "R600" },
      { name: "Aroma stone massage (60min)", price: "R650" },
      { name: "Back, neck & shoulder (30min)", price: "R330" },
      { name: "Back, neck & shoulder (45min)", price: "R450" },
    ],
  },
  {
    title: "Skincare Services",
    image: facialImg,
    items: [
      { name: "Basic Facial", price: "R500" },
      { name: "Deep Cleansing Facial", price: "R890" },
      { name: "Anti-Aging Facial with RF", price: "R1050" },
      { name: "Microneedling", price: "R850" },
      { name: "Dermaplanning", price: "R700" },
    ],
  },
  {
    title: "Waxing Services",
    image: facialImg,
    items: [
      { name: "Eyebrow Waxing", price: "R95" },
      { name: "Lip Waxing", price: "R95" },
      { name: "Full Leg Wax", price: "R360" },
      { name: "Underarm Wax", price: "R150" },
      { name: "Brazilian Wax", price: "R320" },
    ],
  },
  {
    title: "Hand / Foot Service",
    image: nailsImg,
    items: [
      { name: "Nail Extensions", price: "R250" },
      { name: "Nail Art (per nail)", price: "R15 – R25" },
      { name: "Manicure (gel paint)", price: "R125" },
      { name: "Pedicure (gel paint)", price: "R200" },
      { name: "Paraffin Treatment", price: "R90" },
    ],
  },
];

const Treatments = () => {
  return (
    <section id="treatments" className="py-32 px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4">Our Menu</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6 italic">
            Treatments & Pricing
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-muted-foreground">
            A complete range of beauty and wellness services — for everyone, every age.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-10 items-stretch bg-card border border-border/40 hover:border-primary/60 transition-all duration-500 p-4 md:p-6"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wider text-foreground mb-4">
                  {cat.title}
                </h3>
                <div className="h-px w-12 bg-primary mb-5" />
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 text-sm md:text-base"
                    >
                      <span className="text-foreground/90">{item.name}</span>
                      <span className="flex-1 mx-2 border-b border-dotted border-border/60 translate-y-[-3px]" />
                      <span className="text-primary font-medium whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
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
