import { useState } from "react";
import Exercise from "../../components/Exercise";

const WorkoutPage = () => {
  const date =
    new Date().toLocaleString("en-in", { month: "long" }) +
    " " +
    new Date().toLocaleString("en-in", { day: "numeric" }) +
    " " +
    new Date().toLocaleString("en-in", { year: "numeric" });

  const [exerciseCount, setExerciseCount] = useState(0);
  const [currentWorkout, setCurrentWorkout] = useState("");

  const addExercise = () => {
    setExerciseCount((count) => count + 1);
  };

  const exerciseList = Array(exerciseCount)
    .fill()
    .map((v, i) => i);

  const handleWorkoutChange = (e) => {
    const { name, value } = e.target;
    setCurrentWorkout(value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mt-5">
        <h2 className="text-lg font-medium underline">
          Adding Workout for {date}
        </h2>
        <div className="p-2 shadow-xl rounded-xl mt-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="workout">
              Select A Workout
            </label>
            <select
              onChange={handleWorkoutChange}
              className="p-3"
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
          {/* <div className="mt-4">
            <h3
              onClick={addExercise}
              className="p-2 border-2 border-green-500 cursor-pointer"
            >
              <span className="mr-2">➕</span> Add Exercice
            </h3>
          </div> */}
          {currentWorkout !== "" ? (
            <Exercise currentWorkout={currentWorkout} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
