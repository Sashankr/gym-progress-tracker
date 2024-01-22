import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Accordian from "./Accordian";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_WORKOUT_DETAILS } from "../redux/features/workoutDetailsSlice";

const WorkoutDetails = ({
  currentExercise,
  currentExerciseId,
  currentWorkout,
  currentWorkoutId,
}) => {
  const { name, value } = currentExercise;
  const dispatch = useDispatch();
  const workoutDetails = useSelector((state) => state.workoutDetails);
  console.log(workoutDetails);

  const [workoutData, setWorkoutData] = useState(
    new Map([
      [
        1,
        {
          setId: 1,
          exerciseName: currentExerciseId,
          workoutName: currentWorkoutId,
          weight: 0,
          reps: 0,
        },
      ],
    ])
  );

  const handleExerciseDetailsChange = (e) => {
    const { name: inputName, value: inputValue, dataset } = e.target;
    const currentSet = Number(dataset.setid);
    const currentWorkoutDetails = workoutData.get(currentSet);
    const updatedSet = {
      ...currentWorkoutDetails,
      [inputName]: inputValue !== "" ? Number(inputValue) : "",
    };
    setWorkoutData(
      (previousWorkoutDetails) =>
        new Map(previousWorkoutDetails.set(currentSet, updatedSet))
    );
  };

  const addNewSet = () => {
    const currentSize = workoutData.size;
    const newSetData = {
      setId: currentSize + 1,
      exerciseName: currentExerciseId,
      workoutName: currentWorkoutId,
      weight: 0,
      reps: 0,
    };
    setWorkoutData(
      (prevWorkoutData) =>
        new Map(prevWorkoutData.set(currentSize + 1, newSetData))
    );
  };

  const deleteSet = (setId) => {
    const workoutUpdated = new Map([...workoutData]);
    workoutUpdated.delete(setId);
    setWorkoutData(workoutUpdated);
  };

  return (
    <div>
      <Accordian title={`${name} Workout Details`}>
        <>
          <div className="p-4 shadow-xl rounded-lg">
            {Array.from(workoutData.values()).map((item, index) => {
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
                  {index !== 0 ? (
                    <i
                      onClick={() => {
                        deleteSet(item.setId);
                      }}
                      className="fa-solid fa-circle-minus text-rose-500 cursor-pointer"
                    ></i>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
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
