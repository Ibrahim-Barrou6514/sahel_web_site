import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router";
import RootLayout from "./components/RootLayout";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <Home
              setCurrentPage={setCurrentPage}
              openQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="services"
          element={
            <Services
              setCurrentPage={setCurrentPage}
              openQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          }
        />
        <Route path="gallery" element={<Gallery />} />
        <Route
          path="projects"
          element={
            <Projects
              setCurrentPage={setCurrentPage}
              openQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
