import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <Router>
      <div className="App">
          <Layout>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<Blogs />} />
            </Routes>
          </Layout>
      </div>
    </Router>
  );
}

export default App;
