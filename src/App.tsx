import { Outlet, useLocation } from "react-router";
import Navigation from "./components/global/Navigation";
import Footer from "./components/global/Footer";
import ContactCard from "./components/global/ContactCard";
import { useEffect } from "react";

function App() {
  const path = useLocation();
  const checkPath = (value: string) => path?.pathname.includes(value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div
      className={`font-jost mx-auto max-w-[110rem] md:bg-left md:bg-no-repeat ${!checkPath("locations") ? "md:bg-[url(../assets/shared/desktop/bg-pattern-leaf.svg)]" : ""}`}
    >
      <div className="px-12 pt-10 md:pt-12 lg:px-20">
        <div className="mb-2 md:mb-16">
          <Navigation />
        </div>

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
