import { useState } from "react";
import Exercise from "../../components/Exercise";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_WEIGHT } from "../../redux/features/weightTrackerSlice";
import { useSaveWorkoutMutation } from "../../services/workout";
import { useToast } from "@/components/ui/use-toast";

import Navbar from "../../components/Navbar";

const WorkoutPage = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const currentBodyWeight = useSelector((state) => state.weightTracker).weight;
  const workoutDetails = useSelector((state) => state.workoutDetails);
  const [saveWorkout, { isLoading }] = useSaveWorkoutMutation();
  const { user: profileDetails } = JSON.parse(localStorage.getItem("profile"));

  const navigate = useNavigate();
  const date =
    new Date().toLocaleString("en-in", { month: "long" }) +
    " " +
    new Date().toLocaleString("en-in", { day: "numeric" }) +
    " " +
    new Date().toLocaleString("en-in", { year: "numeric" });

  const [currentWorkout, setCurrentWorkout] = useState("");

  const handleWorkoutChange = (e) => {
    const { value } = e.target;
    setCurrentWorkout(value);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="mt-5">
          <h2 className="text-lg font-medium underline">
            Adding Workout for {date}
          </h2>
          <div className="flex w-1/4 flex-col gap-2">
            <label htmlFor="weight">Body Weight ( kg )</label>
            <input
              type="text"
              placeholder="Enter weight..."
              onChange={(e) => {
                dispatch(UPDATE_WEIGHT(e.target.value));
              }}
              value={currentBodyWeight}
              className="rounded-lg border-2 px-3 py-2 outline-0 focus:border-blue-950	 active:border-blue-950"
            />
          </div>
          <div className="mt-4 rounded-xl p-2 shadow-xl">
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="workout">
                Select A Workout
              </label>
              <select
                onChange={handleWorkoutChange}
                className="rounded-lg border-2 p-3"
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

            {currentWorkout !== "" ? (
              <Exercise currentWorkout={currentWorkout} />
            ) : (
              ""
            )}
            <div className="mt-5 flex justify-end">
              <button
                onClick={async () => {
                  const answer = confirm(
                    "Are you sure you want to save this workout?"
                  );
                  debugger;
                  console.log(answer);
                  if (answer) {
                    try {
                      const response = await saveWorkout({
                        bodyWeight: currentBodyWeight,
                        workoutDetails,
                        userId: profileDetails?._id,
                      });
                      if (response.data.status === 201) {
                        toast({
                          description: response.data.message,
                        });
                      } else {
                        toast({
                          description: response.data.message,
                        });
                      }
                      navigate("/workout-info");
                    } catch (err) {
                      console.log(err);
                      toast({
                        description: "Something went wrong",
                      });
                    }
                  }
                }}
                disabled={isLoading}
                className="rounded-lg bg-gradient-to-r from-violet-500  to-fuchsia-500 px-3 py-2 text-white transition"
              >
                Save Workout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutPage;
