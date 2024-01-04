import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-medium mb-3">Gym Progress Tracker</h2>
      <p className="mb-3">Track your gym workouts using this simple web app.</p>
      <Link to="/add-workout">
        <button
          className="mt-4 px-3 py-2 bg-slate-700 text-slate-100"
          type="submit"
        >
          Start Workout
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
