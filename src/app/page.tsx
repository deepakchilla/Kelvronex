import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collaborations from "@/components/Collaborations";
import Courses from "@/components/Courses";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Collaborations />
      <Courses />
      <TechStack />
      <Footer />
    </main>
  );
}
