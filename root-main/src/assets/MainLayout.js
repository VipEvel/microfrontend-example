import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";

import ThemeProvider from "main/ThemeProvider";
import Header from "header/Header";
import Footer from "footer/Footer";
import { Home, About } from "content/Content";

const MainLayout = () => {
  return (
    <Router>
      <ThemeProvider className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default MainLayout;
