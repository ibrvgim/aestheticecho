import { Outlet } from "react-router";
import Navigation from "./components/global/Navigation";

function App() {
  return (
    <div className="font-jost px-20 py-12">
      <Navigation />

      <main className="py-14">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
