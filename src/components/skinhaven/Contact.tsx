import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-luxe">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4">Get in Touch</p>
        <h2 className="font-display text-5xl md:text-7xl italic mb-6">
          Reserve <span className="text-gradient-gold">your moment</span>
        </h2>
        <div className="gold-divider w-24 mx-auto mb-8" />
        <p className="text-muted-foreground max-w-xl mx-auto mb-16 leading-relaxed">
          Bookings are made via WhatsApp or phone. Our team will gladly help you choose
          the perfect treatment or spa package.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <a
            href="https://wa.me/27796871358"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border/50 p-8 hover:border-primary hover:bg-card transition-all duration-500"
          >
            <MessageCircle className="w-6 h-6 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">WhatsApp</p>
            <p className="font-display text-xl">079 687 1358</p>
          </a>
          <a
            href="tel:+27737297007"
            className="group border border-border/50 p-8 hover:border-primary hover:bg-card transition-all duration-500"
          >
            <Phone className="w-6 h-6 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Call</p>
            <p className="font-display text-xl">073 729 7007</p>
          </a>
          <a
            href="https://instagram.com/skinhavenclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border/50 p-8 hover:border-primary hover:bg-card transition-all duration-500"
          >
            <Instagram className="w-6 h-6 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Instagram</p>
            <p className="font-display text-xl">@skinhavenclinic</p>
          </a>
          <a
            href="https://maps.google.com/?q=84AM+Seshota+Crescent+Spruitview"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border/50 p-8 hover:border-primary hover:bg-card transition-all duration-500"
          >
            <MapPin className="w-6 h-6 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Location</p>
            <p className="font-display text-xl">Spruitview</p>
          </a>
        </div>

        <a
          href="https://wa.me/27796871358?text=Hi%20Skin%20Haven%2C%20I'd%20like%20to%20book%20a%20treatment."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-12 py-5 text-xs uppercase tracking-[0.4em] hover:shadow-luxe transition-all duration-500"
        >
          Book Your Treatment
        </a>
      </div>
    </section>
  );
};

export default Contact;
