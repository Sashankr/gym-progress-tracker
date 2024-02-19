import { useState } from "react";
import Exercise from "../../components/Exercise";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_WEIGHT } from "../../redux/features/weightTrackerSlice";

const WorkoutPage = () => {
  const dispatch = useDispatch();
  const currentBodyWeight = useSelector((state) => state.weightTracker).weight;
  const workoutDetails = useSelector((state) => state.workoutDetails);

  const navigate = useNavigate();
  const date =
    new Date().toLocaleString("en-in", { month: "long" }) +
    " " +
    new Date().toLocaleString("en-in", { day: "numeric" }) +
    " " +
    new Date().toLocaleString("en-in", { year: "numeric" });

  const [currentWorkout, setCurrentWorkout] = useState("");

  const handleWorkoutChange = (e) => {
    const { value } = e.target;
    setCurrentWorkout(value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mt-5">
        <h2 className="text-lg font-medium underline">
          Adding Workout for {date}
        </h2>
        <div className="flex w-1/4 flex-col gap-2">
          <label htmlFor="weight">Body Weight ( kg )</label>
          <input
            type="text"
            placeholder="Enter weight..."
            onChange={(e) => {
              dispatch(UPDATE_WEIGHT(e.target.value));
            }}
            value={currentBodyWeight}
            className="rounded-lg border-2 px-3 py-2 outline-0 focus:border-blue-950	 active:border-blue-950"
          />
        </div>
        <div className="mt-4 rounded-xl p-2 shadow-xl">
          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="workout">
              Select A Workout
            </label>
            <select
              onChange={handleWorkoutChange}
              className="rounded-lg border-2 p-3"
              name="workout"
              id="workout"
            >
              <option value="" selected disabled hidden>
                Choose here
              </option>

              <option value="shoulder">Shoulder</option>
              <option value="back">Back</option>
              <option value="chest">Chest</option>
              <option value="bicep_tricep">Bicep + Tricep</option>
              <option value="legs">Legs</option>
              <option value="abs">Abs</option>
            </select>
          </div>

          {currentWorkout !== "" ? (
            <Exercise currentWorkout={currentWorkout} />
          ) : (
            ""
          )}
          <div className="mt-5 flex justify-end">
            <button
              onClick={async () => {
                const answer = confirm(
                  "Are you sure you want to save this workout?",
                );
                console.log(answer);
                if (answer) {
                  debugger;
                  const response = await fetch(
                    "http://localhost:3001/api/v1/workout/save-workout",
                    {
                      method: "POST",
                      body: JSON.stringify({
                        bodyWeight: currentBodyWeight,
                        workoutDetails,
                      }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    },
                  );
                  // navigate("/workout-info");
                }
              }}
              className="rounded-lg bg-gradient-to-r from-violet-500  to-fuchsia-500 px-3 py-2 text-white transition"
            >
              Save Workout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
