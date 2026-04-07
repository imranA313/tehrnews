import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Latest from "./components/Latest";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0B0F1A] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Featured />
      <Latest />
      <Footer />
    </div>
  );
}

export default App;