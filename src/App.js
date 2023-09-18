import React from "react";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import About from "./pages/About";
import Landing from "./pages/Landing";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const path = useLocation().pathname;
  console.log(path);
  return (
    <div className="min-h-screen w-screen flex flex-col justify-between item">
      {path === "/" ? (
        <Landing />
      ) : (
        <>
          <Header />
          <Routes>
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
