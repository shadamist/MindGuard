import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import DailyCheckinPage from "./pages/DailyCheckinPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/history" element={<History />} />
      <Route path="/dailycheckin" element={<DailyCheckinPage />} />
    </Routes>
  );
}

export default App;