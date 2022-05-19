import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import "./index.css";
import App from "./App";
import Home from "./routes/home";
import WebDesign from "./routes/webDesign";
import AppDesign from "./routes/appDesign";
import GraphicDesign from "./routes/graphicDesign";
import About from "./routes/about";
import Contact from "./routes/contact";
import Locations from "./routes/locations";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="web" element={<WebDesign />} />
          <Route path="app" element={<AppDesign />} />
          <Route path="graphic" element={<GraphicDesign />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="locations" element={<Locations />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
