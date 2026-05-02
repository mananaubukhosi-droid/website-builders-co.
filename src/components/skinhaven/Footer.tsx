const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-script text-2xl text-gradient-gold leading-none">Skin haven</p>
          <p className="text-[0.6rem] tracking-[0.4em] text-muted-foreground uppercase mt-1">Clinic · Spruitview</p>
        </div>
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          © {new Date().getFullYear()} Skin Haven Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
