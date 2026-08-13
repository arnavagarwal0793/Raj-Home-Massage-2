import "@/App.css";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutRaj } from "@/components/AboutRaj";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Testimonials } from "@/components/Testimonials";
import { InstagramFeed } from "@/components/InstagramFeed";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="App bg-vapor-background min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <AboutRaj />
          <ServicesGrid />
          <WhyChooseUs />
          <ServiceAreas />
          <Testimonials />
          <InstagramFeed />
          <BookingCTA />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
