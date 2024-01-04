const WorkoutPage = () => {
  const date =
    new Date().toLocaleString("en-in", { month: "long" }) +
    " " +
    new Date().toLocaleString("en-in", { day: "numeric" }) +
    " " +
    new Date().toLocaleString("en-in", { year: "numeric" });

  console.log(date);
  return (
    <div className="container mx-auto p-4">
      <div className="mt-5">
        <h2 className="text-lg font-medium underline">
          Adding Workout for {date}
        </h2>
        <div className="p-2 shadow-xl rounded-xl mt-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="workout">
              Select A Workout
            </label>
            <select className="p-3" name="workout" id="workout">
              <option value="shoulder">Shoulder</option>
              <option value="back">Back</option>
              <option value="chest">Chest</option>
              <option value="bicep_tricep">Bicep + Tricep</option>
              <option value="legs">Legs</option>
              <option value="abs">Abs</option>
            </select>
          </div>
          <div className="mt-4">
            <h3 className="p-2 border-2 border-green-500 cursor-pointer">
              <span className="mr-2">➕</span> Add Exercice
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
