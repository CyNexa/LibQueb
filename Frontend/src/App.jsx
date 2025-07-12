// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Pages
import Home from "./pages/home.jsx";
import Notice from "./pages/notice.jsx";
import Gallery from "./pages/gallery.jsx";
import About from "./pages/about.jsx";
import Membership from "./pages/membership.jsx";

// SubPages
import QueryResults from "./components/q=result.jsx";

// Error HAndling
import Error404 from "./pages/404.jsx";

// Layout Components
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="bg-base min-h-[90vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/search" element={<QueryResults />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
