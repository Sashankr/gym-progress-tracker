const shoulderExercises = [
  {
    name: "Upright Rows",
    value: "upright_rows",
  },
  {
    name: "Lateral Raises Machine",
    value: "lateral_raises_machine",
  },
  {
    name: "Reverse Flys",
    value: "reverse_flys",
  },
  {
    name: "Front Raises Rod",
    value: "front_raises_rod",
  },
  {
    name: "Overhead Press Rod",
    value: "overhead_press_rod",
  },
  {
    name: "Front Raises - Hammer Style",
    value: "front_raises_hammer",
  },
  {
    name: "Lateral Raises",
    value: "lateral_raises",
  },
  {
    name: "Shrugs",
    value: "shrugs",
  },
];

const backExercises = [
  {
    name: "Lat Dumbbell Row",
    value: "lat_dumbbell_row",
  },
  {
    name: "T Bar",
    value: "t_bar",
  },
  {
    name: "V Bar Pulldown",
    value: "vbar_pulldown",
  },
  {
    name: "Lat Pulldown Front",
    value: "lat_pulldown_front",
  },
  {
    name: "Lat Pulldown Back",
    value: "lat_pulldown_back",
  },
  {
    name: "Seated Rows",
    value: "seaterd_rows",
  },
];

const chestExercises = [
  {
    name: "Incline Bench Dumbbell",
    value: "incline_bench_dumbbell",
  },
  {
    name: "Decline Bench Dumbbell",
    value: "decline_bench_dumbbell",
  },
  {
    name: "Flat Bench Dumbbell",
    value: "flat_bench_dumbbell",
  },

  {
    name: "Incline Bench Barbell",
    value: "incline_bench_barbell",
  },
  {
    name: "Decline Bench Barbell",
    value: "decline_bench_barbell",
  },
  {
    name: "Flat Bench Barbell",
    value: "flat_bench_barbell",
  },
  {
    name: "Flys",
    value: "flys",
  },
  {
    name: "Chest Squeeze Press",
    value: "chest_squeeze_press",
  },
];

const bicepTricepExercise = [
  {
    name: "24's",
    value: "24_s",
  },
  {
    name: "Overhead Press",
    value: "overhead_press",
  },
  {
    name: "Hammer Curls",
    value: "hammer_curls",
  },
  {
    name: "V Bar Pulldown",
    value: "v_bar_pulldown",
  },
  {
    name: "Rope pulldown",
    value: "rope_pulldown",
  },
  {
    name: "Bicep Curls",
    value: "bicep_curls",
  },
  {
    name: "Preacher Curls",
    value: "preacher_curls",
  },
  {
    name: "Skull Crusher",
    value: "skull_crusher",
  },
  {
    name: "Bicep Concentration Curls",
    value: "bicep_concentration_curls",
  },
  {
    name: "Single Arm Overhead Extension",
    value: "single_arm_overhead_extension",
  },
];

const legsExercies = [
  {
    name: "Hindu Squats",
    value: "hindu_squats",
  },
  {
    name: "Single Dumbbell Squats",
    value: "single_dumbbell_squats",
  },
  {
    name: "Sumo Squats",
    value: "sumo_squats",
  },
  {
    name: "Weighted Barbell Squats",
    value: "weighted_barbell_squats",
  },
  {
    name: "Smith Machine Full Squats",
    value: "smith_machine_full_squats",
  },
  {
    name: "Smith Machine Squats",
    value: "smith_machine_squat",
  },
  {
    name: "Smith Machine Lunges",
    value: "smith_machine_lunges",
  },
  {
    name: "Weighted Lunges",
    value: "weighted_lunges",
  },
  {
    name: "Leg Press",
    value: "leg_press",
  },
  {
    name: "Leg Extensions",
    value: "leg_extensions",
  },
  {
    name: "Leg Curls",
    value: "leg_curls",
  },
  {
    name: "Calf Raises",
    value: "calf_raises",
  },
];

const abExercises = [
  {
    name: "Hanging Knee Raises",
    value: "hanging_knee_raises",
  },
  {
    name: "Plank",
    value: "plank",
  },
  {
    name: "Reverse Crunches",
    value: "reverse_crunches",
  },
  {
    name: "Decline Bench Crunches",
    value: "decline_bench_crunches",
  },
  {
    name: "Mountain Climbers",
    value: "mountain_climbers",
  },
  {
    name: "Side Plank",
    value: "side_plank",
  },
  {
    name: "Heel Taps",
    value: "heel_taps",
  },
  {
    name: "Russian Twists",
    value: "russian_twists",
  },
  {
    name: "Scissor Kicks",
    value: "scissor_kicks",
  },
];

export const getExercisesList = (workout) => {
  switch (workout) {
    case "shoulder":
      return shoulderExercises;
    case "back":
      return backExercises;
    case "chest":
      return chestExercises;
    case "bicep_tricep":
      return bicepTricepExercise;
    case "legs":
      return legsExercies;
    case "abs":
      return abExercises;
    default:
      return [];
  }
};
