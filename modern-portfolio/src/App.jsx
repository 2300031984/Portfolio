import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Technologies />
          <Education />
          <Projects />
          <Achievements />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
