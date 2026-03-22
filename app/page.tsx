import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Pursuits from '@/components/Pursuits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PageLoader from '@/components/PageLoader';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Pursuits />
      <Contact />
      <Footer />
    </main>
  );
}
