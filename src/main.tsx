import "./index.css";
import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

const App = lazy(() => import("./App.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const Design = lazy(() => import("./pages/Design.tsx"));
const Locations = lazy(() => import("./pages/Locations.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const About = lazy(() => import("./pages/About.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="design" element={<Design />} />
          <Route path="locations" element={<Locations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
