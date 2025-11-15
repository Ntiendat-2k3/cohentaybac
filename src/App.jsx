import "./index.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div id="top" className="page-shell">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <LandingPage />
      </main>
    </div>
  );
}
