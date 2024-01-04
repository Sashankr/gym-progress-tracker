import { useState } from "react";
import PropTypes from "prop-types";
import { getExercisesList } from "../helpers/getExerciseList";
import { getWorkoutName } from "../helpers/getWorkoutName";
import { exercisesMapping } from "../helpers/exerciseMapping";

const Exercise = ({ currentWorkout }) => {
  const workoutName = getWorkoutName(currentWorkout);
  const exerciseList = getExercisesList(currentWorkout);
  const [currentExercise, setCurrentExercise] = useState("");

  const updateCurrentExercise = (e) => {
    const { value } = e.target;
    setCurrentExercise(value);
  };

  const exerciseName = exercisesMapping[currentExercise];

  return (
    <div className="mt-4 p-2">
      <h3>{workoutName} Exercise List</h3>
      <div>
        <select
          onChange={updateCurrentExercise}
          className="p-3"
          name="exercise"
          id="exercise"
        >
          <option value="" selected disabled hidden>
            Choose here
          </option>
          {exerciseList.map((item) => (
            <option key={item.name} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {currentExercise !== "" ? (
        <div>
          <button className="px-3 py-2 bg-teal-500 text-white mt-5 rounded-lg">
            Start {exerciseName} Workout
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Exercise;

Exercise.propTypes = {
  currentWorkout: PropTypes.string,
};
