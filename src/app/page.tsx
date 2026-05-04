import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ValueProps from "@/components/ValueProps";
import ImpactStats from "@/components/ImpactStats";
import CourseHighlights from "@/components/CourseHighlights";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <ValueProps />
      <ImpactStats />
      <CourseHighlights />
      <CallToAction />
      <Footer />
    </main>
  );
}
