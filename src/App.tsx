import { Outlet } from "react-router";
import Navigation from "./components/global/Navigation";

function App() {
  return (
    <div className="font-jost mx-auto max-w-[110rem] bg-[url(./assets/shared/desktop/bg-pattern-leaf.svg)] bg-left bg-no-repeat px-20 py-12">
      <Navigation />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
