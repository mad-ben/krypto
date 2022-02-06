import {
  Navbar,
  Footer,
  Welcome,
  Services,
  Transactions,
  Swap,
} from "./components";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome2">
        <Navbar />
      </div>
      <div className="gradient-bg-services2">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/swap" element={<Swap />} />
        </Routes>
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
