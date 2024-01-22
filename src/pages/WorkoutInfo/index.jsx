import { useSelector } from "react-redux";
import { exercisesMapping } from "../../helpers/exerciseMapping";

const WorkoutInfo = () => {
  const workoutDetails = useSelector((state) => state.workoutDetails);
  console.log(workoutDetails);

  return (
    <div className="workout-info container mx-auto p-4">
      <h3 className="text-2xl mb-5">Workout Details</h3>
      {Object.keys(workoutDetails).map((item, index) => {
        return (
          <div key={index} className="mb-5">
            <h4 className="text-lg mb-2">
              {exercisesMapping[item]} Workout Details
            </h4>

            <div className="relative overflow-x-auto">
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
                  {workoutDetails[item].map((subItem, index) => {
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
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutInfo;
