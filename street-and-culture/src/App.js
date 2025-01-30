import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

// Pages import
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login"
import Register from "./pages/Register"

// Brands pages import
import Urban from "./pages/brands/Urban";
import Fellas from "./pages/brands/Fellas";
import FTY from "./pages/brands/FTY";
import Mindset from "./pages/brands/Mindset";
import KevWCP from "./pages/brands/KevWCP";

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
              <Route path="/97Urban" element={<Urban />} />
              <Route path="/60Fellas" element={<Fellas />} />
              <Route path="/FreeTheYouth" element={<FTY />} />
              <Route path="/Mindset" element={<Mindset />} />
              <Route path="/KevWCP" element={<KevWCP />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Layout>
      </div>
    </Router>
  );
}

export default App;
