import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WorkoutPage from "./pages/WorkoutPage";
import WorkoutInfo from "./pages/WorkoutInfo";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PrivateRoute from "./PrivateRoute";
import MyWorkouts from "./pages/MyWorkouts";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/add-workout" element={<WorkoutPage />} />
          <Route path="/workout-info" element={<WorkoutInfo />} />
          <Route path="/my-workouts" element={<MyWorkouts />} />
        </Route>
      </Routes>
    </Router>
  );
}
