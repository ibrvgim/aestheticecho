import { Outlet, useLocation } from "react-router";
import Navigation from "./components/global/Navigation";
import Footer from "./components/global/Footer";
import ContactCard from "./components/global/ContactCard";

function App() {
  const path = useLocation();
  const checkPath = (value: string) => path?.pathname.includes(value);

  return (
    <div
      className={`font-jost mx-auto max-w-[110rem] bg-left bg-no-repeat ${!checkPath("locations") ? "bg-[url(./assets/shared/desktop/bg-pattern-leaf.svg)]" : ""}`}
    >
      <div className="px-20 pt-12">
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>

      {!checkPath("contact") && <ContactCard />}
      <Footer checkPath={checkPath} />
    </div>
  );
}

export default App;
