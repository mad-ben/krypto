import {
  Navbar,
  Footer,
  Welcome,
  Services,
  Transactions,
  SendEth,
} from "./components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome2">
          <Navbar />
        </div>
        <div className="gradient-bg-services2">
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/sendeth" element={<SendEth />} />
          </Routes>
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
