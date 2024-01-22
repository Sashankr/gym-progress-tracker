import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WorkoutPage from "./pages/WorkoutPage";
import WorkoutInfo from "./pages/WorkoutInfo";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-workout" element={<WorkoutPage />} />
        <Route path="/workout-info" element={<WorkoutInfo />} />
      </Routes>
    </Router>
  );
}
