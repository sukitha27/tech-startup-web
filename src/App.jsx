import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/"              element={<Home />} />
              <Route path="/services"      element={<Services />} />
              <Route path="/portfolio"     element={<Portfolio />} />
              <Route path="/about"         element={<About />} />
              <Route path="/contact"       element={<Contact />} />
              <Route path="/blog"          element={<Blog />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*"              element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
