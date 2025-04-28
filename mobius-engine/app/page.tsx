import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import HowWeWork from "@/components/how-we-work"
import AboutUs from "@/components/about-us"
import Testimonials from "@/components/testimonials"
import PricingPlans from "@/components/pricing-plans"
import ResumeServices from "@/components/resume-services"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowWeWork />
        <AboutUs />
        <Testimonials />
        <PricingPlans />
        <ResumeServices />
      </main>
      <Footer />
    </>
  )
}
