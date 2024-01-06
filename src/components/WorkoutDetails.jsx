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
      <div className="p-4 shadow-xl rounded-lg">
        <div className="flex gap-5">
          <div>
            <input
              className="border-2 px-3 py-2 rounded-lg outline-0 focus:border-teal-400	 active:border-teal-400"
              placeholder="Enter Weight"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <input
              className="border-2 px-3 py-2 rounded-lg outline-0 focus:border-teal-400	 active:border-teal-400"
              placeholder="Enter Reps"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 bg-teal-400 px-3 py-2 w-max rounded-lg transition hover:bg-teal-500 cursor-pointer">
          <i className="fa-solid fa-circle-plus text-white text-xl cursor-pointer"></i>{" "}
          <span className="text-sm text-white font-semibold">Add New Set</span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;

WorkoutDetails.propTypes = {
  currentExercise: PropTypes.object,
};
