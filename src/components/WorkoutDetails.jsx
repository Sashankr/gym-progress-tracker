import PropTypes from "prop-types";
import { useState } from "react";
import Accordian from "./Accordian";

const WorkoutDetails = ({
  currentExercise,
  currentExerciseId,
  currentWorkout,
  currentWorkoutId,
}) => {
  const { name, value } = currentExercise;
  const [workoutData, setWorkoutData] = useState([
    {
      setId: 1,
      exerciseName: currentExerciseId,
      workoutName: currentWorkoutId,
      weight: 0,
      reps: 0,
    },
  ]);

  const handleExerciseDetailsChange = (e) => {
    const { name: inputName, value: inputValue, dataset } = e.target;
    setWorkoutData((prev) => {
      return prev.map((item) => {
        if (item.setId === Number(dataset.setid)) {
          return {
            ...item,
            [inputName]: inputValue,
          };
        } else {
          return item;
        }
      });
    });
  };
  console.log(workoutData);

  const addNewSet = () => {
    setWorkoutData((prev) => {
      return [
        ...prev,
        {
          setId: prev[prev.length - 1].setId + 1,
          currentExerciseId,
          currentWorkoutId,
          weight: 0,
          reps: 0,
        },
      ];
    });
  };

  return (
    <div>
      <Accordian title={`${name} Workout Details`}>
        <>
          <div className="p-4 shadow-xl rounded-lg">
            {workoutData.map((item) => {
              return (
                <div key={item.setId} className="flex gap-5 mb-5 items-center">
                  <div>Set {item?.setId}</div>
                  <div>
                    <input
                      className="border-2 px-3 py-2 rounded-lg outline-0 focus:border-blue-950	 active:border-blue-950"
                      placeholder="Enter Weight"
                      type="text"
                      name="weight"
                      value={item.weight}
                      data-setid={item.setId}
                      onChange={handleExerciseDetailsChange}
                      max={10}
                    />
                  </div>
                  <div>
                    <input
                      className="border-2 px-3 py-2 rounded-lg outline-0 focus:border-blue-950	 active:border-blue-950"
                      placeholder="Enter Reps"
                      type="text"
                      name="reps"
                      value={item.reps}
                      data-setid={item.setId}
                      onChange={handleExerciseDetailsChange}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div
            onClick={() => {
              addNewSet();
            }}
            className="flex items-center gap-2 mt-4 bg-blue-950 px-3 py-2 w-max rounded-lg transition hover:bg-blue-900 cursor-pointer"
          >
            <i className="fa-solid fa-circle-plus text-white text-xl cursor-pointer"></i>{" "}
            <span className="text-sm text-white font-semibold">
              Add New Set
            </span>
          </div>
        </>
      </Accordian>
    </div>
  );
};

export default WorkoutDetails;

WorkoutDetails.propTypes = {
  currentExercise: PropTypes.object,
};
