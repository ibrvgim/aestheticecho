import { Outlet, useLocation } from "react-router";
import Navigation from "./components/global/Navigation";
import Footer from "./components/home/Footer";
import ContactCard from "./components/home/ContactCard";

function App() {
  const path = useLocation();

  return (
    <div className="font-jost mx-auto max-w-[110rem] bg-[url(./assets/shared/desktop/bg-pattern-leaf.svg)] bg-left bg-no-repeat">
      <div className="px-20 pt-12">
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>

      {!path?.pathname.includes("contact") && <ContactCard />}
      <Footer />
    </div>
  );
}

export default App;
