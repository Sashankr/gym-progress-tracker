export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-medium mb-3">Gym Progress Tracker</h2>
      <p className="mb-3">Track your gym workouts using this simple web app.</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="font-medium" htmlFor="workout_date">
            Select Workout Date
          </label>
          <input
            required
            className="border p-3"
            id="workout_date"
            type="date"
            max={new Date()}
          />
        </div>
        <button
          className="mt-4 px-3 py-2 bg-slate-700 text-slate-100"
          type="submit"
        >
          Create Workout
        </button>
      </form>
    </div>
  );
}
