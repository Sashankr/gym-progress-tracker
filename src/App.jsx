import { useState } from "react";

export default function App() {
  const [workoutDate, setWorkoutDate] = useState("");

  const handleWorkoutDateChange = (e) => {
    const { name, value } = e.target;
    setWorkoutDate(value);
  };

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
            onChange={handleWorkoutDateChange}
            required
            className="border p-3"
            id="workout_date"
            type="date"
            value={workoutDate}
          />
        </div>
        <button
          className="mt-4 px-3 py-2 bg-slate-700 text-slate-100"
          type="submit"
        >
          Create Workout
        </button>
      </form>
      {workoutDate !== "" ? (
        <div className="mt-5">
          <h2 className="text-lg font-medium underline">
            Workout Details for {workoutDate}
          </h2>
          <div className="p-2 shadow-xl rounded-xl mt-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="workout">
                Select A Workout
              </label>
              <select className="p-3" name="workout" id="workout">
                <option value="shoulder">Shoulder</option>
                <option value="back">Back</option>
                <option value="chest">Chest</option>
                <option value="bicep_tricep">Bicep + Tricep</option>
                <option value="legs">Legs</option>
                <option value="abs">Abs</option>
              </select>
            </div>
            <div className="mt-4">
              <h3 className="p-2 border-2 border-green-500 cursor-pointer">
                <span className="mr-2">➕</span> Add Exercice
              </h3>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
