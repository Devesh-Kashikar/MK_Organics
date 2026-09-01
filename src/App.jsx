import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import WhyPartner from "./components/WhyPartner";
import Approach from "./components/Approach";
import BusinessCTA from "./components/BusinessCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Product />
        <WhyPartner />
        <Approach />
        <BusinessCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
