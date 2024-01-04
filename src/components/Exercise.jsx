import { getExercisesList } from "../helpers/getExerciseList";
import { getWorkoutName } from "../helpers/getWorkoutName";

const Exercise = ({ currentWorkout }) => {
  const workoutName = getWorkoutName(currentWorkout);
  const exerciseList = getExercisesList(currentWorkout);
  return (
    <div className="mt-4 p-2">
      <h3>{workoutName} Exercise List</h3>
      <select className="p-3" name="exercise" id="exercise">
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
  );
};

export default Exercise;
