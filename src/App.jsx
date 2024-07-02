import { useEffect, useState } from "react";
import Header from "./components/i.header/Header";
import HeroSection from "./components/ii.heroSection/HeroSection";
import MainContent from "./components/iii.mainContent/MainContent";
import Skills from "./components/iiii.skills/Skills";
import Education from "./components/iiiii.education/Education";
import Publication from "./components/iiiiiii.publication/Publication";
import Contact from "./components/iiiiiiii.contact/Contact";
import Footer from "./components/iiiiiiiii.footer/Footer";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowScrollUpp(true);
      } else {
        setShowScrollUpp(false);
      }
    });
  }, []);
  const [scrollUp, setShowScrollUpp] = useState(false);
  return (
    <>
      <div className="container" id="scroll-up">
        <Header />
        <HeroSection />
        <div className="divider" />
        <MainContent />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Publication />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
        <a
          href="#scroll-up"
          style={{ opacity: scrollUp ? 1 : 0, transition: "700ms" }}
        >
          <button className="scroll-up icon-arrow-up"></button>
        </a>
      </div>
    </>
  );
}

export default App;
