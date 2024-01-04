import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WorkoutPage from "./pages/WorkoutPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-workout" element={<WorkoutPage />} />
      </Routes>
    </Router>
  );
}
