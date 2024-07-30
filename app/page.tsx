import "@/styles/globals.css";
import { About } from "@/components/user/layout/About";
import { Cta } from "@/components/user/layout/Cta";
import { FAQ } from "@/components/user/layout/FAQ";
import { Features } from "@/components/user/layout/Features";
import { Footer } from "@/components/user/layout/Footer";
import { Hero } from "@/components/user/layout/Hero";
import { HowItWorks } from "@/components/user/layout/HowItWorks";
import { Navbar } from "@/components/user/layout/Navbar";
import { Newsletter } from "@/components/user/layout/Newsletter";
import { Pricing } from "@/components/user/layout/Pricing";
import { ScrollToTop } from "@/components/user/layout/ScrollToTop";
import { Services } from "@/components/user/layout/Services";
import { Sponsors } from "@/components/user/layout/Sponsors";
import { Team } from "@/components/user/layout/Team";
import { Testimonials } from "@/components/user/layout/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}
