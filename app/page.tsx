import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gallery />
      <QuoteForm />
      <Footer />
    </main>
  );
}
