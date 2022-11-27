import "./App.css";
import ContactSection from "./components/ContactSection";
import CourseSection from "./components/CourseSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Media from "./components/Media";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Service />
      <CourseSection />
      <ContactSection />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
