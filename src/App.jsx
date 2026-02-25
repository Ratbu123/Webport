import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import useSmoothScroll from "./assets/hooks/useSmoothScroll";
import useStaggeredFadeUp from "./assets/hooks/useStaggeredfadeUp";

function App() {
  useSmoothScroll();
  useStaggeredFadeUp();

  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {/* Preloader overlays the app */}
      {!loadingDone && (
        <Preloader onFinish={() => setLoadingDone(true)} />
      )}

      {/* App is ALWAYS mounted */}
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;