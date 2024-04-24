import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/themeContext.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Quotation, Clients, Products } from "./pages/index.js";
import Sidebar from "./components/Sidebar.jsx";

const App = () => {
  const storedMode = localStorage.getItem("themeMode");
  const [mode, setMode] = useState(storedMode || "light");

  // function to toggle theme dark and light
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  // add useEffect to add dark or light mode in html root
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(mode);
  }, [mode]);

  useEffect(() => {
    // Set initial theme mode when component mounts
    const initialMode = localStorage.getItem("themeMode") || "light";
    setMode(initialMode);
  }, []);

  return (
    <ThemeProvider value={{ mode, toggleTheme }}>
      <Router>
        <main
          className="h-screen flex bg-bg-light dark:bg-bg-dark 
          overflow-hidden"
        >
          {/* SIDEBAR COMPONENT */}
          <Sidebar />
          {/* ROUTES/PAGES COMPONENT */}
          <Routes>
            <Route path="/quotation" element={<Dashboard />} />
            <Route path="/" element={<Quotation />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
