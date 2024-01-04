export const getWorkoutName = (value) => {
  switch (value) {
    case "shoulder":
      return "Shoulder";
    case "back":
      return "Back";
    case "chest":
      return "Chest";
    case "bicep_tricep":
      return "Bicep and Tricep";
    case "legs":
      return "Legs";
    case "abs":
      return "Abs";
  }
};
