import Navbar from "@/components/skinhaven/Navbar";
import Hero from "@/components/skinhaven/Hero";
import Treatments from "@/components/skinhaven/Treatments";
import About from "@/components/skinhaven/About";
import Visit from "@/components/skinhaven/Visit";
import Contact from "@/components/skinhaven/Contact";
import Footer from "@/components/skinhaven/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Treatments />
      <About />
      <Visit />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
