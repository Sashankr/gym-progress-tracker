import PropTypes from "prop-types";
import { useState } from "react";
import Accordian from "./Accordian";

const WorkoutDetails = ({ currentExercise, currentWorkout }) => {
  const { name, value } = currentExercise;
  const [workoutSetCount, setWorkoutSetCount] = useState([1]);

  return (
    <div>
      <Accordian title={`${name} Workout Details`}>
        <div className="p-4 shadow-xl rounded-lg">
          {workoutSetCount.map((item) => {
            return (
              <div key={item} className="flex gap-5 mb-5 items-center">
                <div>Set {item}</div>
                <div>
                  <input
                    className="border-2 px-3 py-2 rounded-lg outline-0 focus:border-blue-950	 active:border-blue-950"
                    placeholder="Enter Weight"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <input
                    className="border-2 px-3 py-2 rounded-lg outline-0 focus:border-blue-950	 active:border-blue-950"
                    placeholder="Enter Reps"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            );
          })}
          <div
            onClick={() => {
              setWorkoutSetCount((prev) => {
                const length = prev.length + 1;
                return [...prev, length];
              });
            }}
            className="flex items-center gap-2 mt-4 bg-blue-950 px-3 py-2 w-max rounded-lg transition hover:bg-blue-900 cursor-pointer"
          >
            <i className="fa-solid fa-circle-plus text-white text-xl cursor-pointer"></i>{" "}
            <span className="text-sm text-white font-semibold">
              Add New Set
            </span>
          </div>
        </div>
      </Accordian>
    </div>
  );
};

export default WorkoutDetails;

WorkoutDetails.propTypes = {
  currentExercise: PropTypes.object,
};
