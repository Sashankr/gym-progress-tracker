import PropTypes from "prop-types";
import { useState } from "react";

const WorkoutDetails = ({ currentExercise }) => {
  const { name, value } = currentExercise;
  const [workoutSetCount, setWorkoutSetCount] = useState(1);
  return (
    <div>
      <h2 className="text-lg font-medium mt-4 mb-3">
        Add {name} Workout details:
      </h2>
      <div className="border-2 p-2">
        <div className="">
          <div>
            <h2>Weight</h2>
            <input className="border-2" type="text" name="" id="" />
          </div>
          <div>
            <h2>Reps</h2>
            <input className="border-2" type="text" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;

WorkoutDetails.propTypes = {
  currentExercise: PropTypes.object,
};
