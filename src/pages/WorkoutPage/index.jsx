import { useState } from "react";
import Exercise from "../../components/Exercise";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_WEIGHT } from "../../redux/features/weightTrackerSlice";

const WorkoutPage = () => {
  const dispatch = useDispatch();
  const currentBodyWeight = useSelector((state) => state.weightTracker).weight;

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
        <div className="flex flex-col gap-2 w-1/4">
          <label htmlFor="weight">Body Weight ( kg )</label>
          <input
            type="text"
            placeholder="Enter weight..."
            onChange={(e) => {
              dispatch(UPDATE_WEIGHT(e.target.value));
            }}
            value={currentBodyWeight}
            className="border-2 px-3 py-2 rounded-lg outline-0 focus:border-blue-950	 active:border-blue-950"
          />
        </div>
        <div className="p-2 shadow-xl rounded-xl mt-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="workout">
              Select A Workout
            </label>
            <select
              onChange={handleWorkoutChange}
              className="p-3 border-2 rounded-lg"
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
          <div className="flex justify-end mt-5">
            <button
              onClick={() => {
                const answer = confirm(
                  "Are you sure you want to save this workout?"
                );
                console.log(answer);
                if (answer) {
                  navigate("/workout-info");
                }
              }}
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500  px-3 py-2 transition rounded-lg text-white"
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
