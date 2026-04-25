import { Toaster } from "sonner";
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhatWeBuild from './components/WhatWeBuild';
import USPresence from './components/USPresence';
import TheNumbers from './components/TheNumbers';
import Partners from './components/Partners';
import TheRaise from './components/TheRaise';
import UniversityPartnerships from './components/UniversityPartnerships';
import AboutLeader from './components/AboutLeader';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <Nav />
      <Hero />
      <Problem />
      <WhatWeBuild />
      <USPresence />
      <TheNumbers />
      <Partners />
      <TheRaise />
      <UniversityPartnerships />
      <AboutLeader />
      <Contact />
      <Footer />
    </div>
  );
}
