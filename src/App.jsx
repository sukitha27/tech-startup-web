import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Products from './pages/Products';
import BlogPost from './pages/BlogPost';          // ← NEW
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import CookieConsent from './components/CookieConsent';  // ← ADD
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <ErrorBoundary>
              <Routes>
                <Route path="/"               element={<Home />} />
                <Route path="/services"       element={<Services />} />
                <Route path="/portfolio"      element={<Portfolio />} />
                <Route path="/products"       element={<Products />} />
                <Route path="/about"          element={<About />} />
                <Route path="/contact"        element={<Contact />} />
                <Route path="/blog"           element={<Blog />} />
                <Route path="/blog/:slug"     element={<BlogPost />} />   {/* ← was Blog, now BlogPost */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="*"               element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;