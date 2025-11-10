import { Outlet } from "react-router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Navbar/>
        <section
          style={{
            scrollBehavior: "smooth",
          }}
        >
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;
