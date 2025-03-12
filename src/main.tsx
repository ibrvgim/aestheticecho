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

const WebDesign = lazy(() => import("./pages/sub-pages/WebDesign.tsx"));
const MobileDesign = lazy(() => import("./pages/sub-pages/MobileDesign.tsx"));
const GraphicDesign = lazy(() => import("./pages/sub-pages/GraphicDesign.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="design" element={<Design />}>
            <Route path="web" element={<WebDesign />} />
            <Route path="mobile" element={<MobileDesign />} />
            <Route path="graphic" element={<GraphicDesign />} />
          </Route>

          <Route path="locations" element={<Locations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
