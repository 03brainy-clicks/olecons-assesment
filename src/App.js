import React from "react";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import About from "./pages/About";
import Landing from "./pages/Landing";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  // Get the current path using useLocation
  const path = useLocation().pathname;

  return (
    <div className="min-h-screen w-screen flex flex-col justify-between items">
      {/* Conditional rendering based on the current path */}
      {path === "/" ? (
        // Render the Landing page if the path is "/"
        <Landing />
      ) : (
        // Render the Header, Routes, and Footer for other paths
        <>
          <Header />
          <Routes>
            {/* Define routes for "about" and "home" */}
            <Route path="about" element={<About />} />
            <Route path="home" element={<Home />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
