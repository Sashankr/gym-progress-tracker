import { useSelector } from "react-redux";
import { exercisesMapping } from "../../helpers/exerciseMapping";
import { workoutMapping } from "../../helpers/workoutMapping";
import Navbar from "../../components/Navbar";

const WorkoutInfo = () => {
  const date =
    new Date().toLocaleString("en-in", { month: "long" }) +
    " " +
    new Date().toLocaleString("en-in", { day: "numeric" }) +
    " " +
    new Date().toLocaleString("en-in", { year: "numeric" });

  const workoutDetails = useSelector((state) => state.workoutDetails);
  const currentBodyWeight = useSelector((state) => state.weightTracker).weight;

  console.log(workoutDetails);
  console.log(currentBodyWeight);

  return (
    <>
      <Navbar />
      <div className="workout-info px-4 md:px-6 container mx-auto ">
        <h3 className="text-2xl mb-2">Workout Details for {date}</h3>
        <span className="mb-3">Body Weight : {currentBodyWeight} kg</span>
        {Object.keys(workoutDetails).map((item, index) => {
          const workoutName = workoutMapping[item];
          const currentWorkout = item;
          return (
            <div
              key={index}
              className="mb-5 p-3 shadow-md rounded-lg shadow-indigo-500/40"
            >
              <h4 className="text-lg mb-2 text-indigo-500 uppercase">
                {workoutName} Workout
              </h4>

              {Object.keys(workoutDetails[currentWorkout]).map((exercise) => {
                const currentExercise = exercise;
                return (
                  <div key={exercise} className="relative overflow-x-auto mb-5">
                    <h4 className="mb-4">
                      {exercisesMapping[currentExercise]}
                    </h4>

                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-center">
                          <th scope="col" className="px-6 py-3">
                            Set
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Weight
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Reps
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {workoutDetails[currentWorkout][exercise].map(
                          (subItem, index) => {
                            return (
                              <tr
                                key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
                              >
                                <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  {subItem.setId}
                                </th>
                                <td className="px-6 py-4">{subItem.weight}</td>
                                <td className="px-6 py-4">{subItem.reps}</td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkoutInfo;
