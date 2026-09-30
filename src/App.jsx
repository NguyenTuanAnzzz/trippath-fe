import { useEffect, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import AppRoute from "./routes/AppRoute.jsx";
import useMe from "./hooks/useMe.js";
import useAuth from "./contexts/AuthContext.jsx";
import useRefresh from "./hooks/useRefresh.js";

function App() {
  const { fetchData } = useMe();
  const { token } = useAuth();
  const { handleRefresh } = useRefresh();
  useEffect(() => {
    if (!token) {
      handleRefresh();
    }
  }, []);

  // Khi đã có access token → lấy user
  useEffect(() => {
    if (!token) return;

    fetchData();
  }, [token]);

  return <AppRoute />;
}

export default App;
