const WorkoutPreferences = () => {
  const muscleBuilding = [
    "Squats",
    "Pull-ups",
    "push-ups",
    "dips",
    "Planks",
    "leg raises",
    "bench press",
    "Bicep curls",
    "leg curls",
    "calf raises",
  ];
  return (
    <div className="h-full overflow-auto p-2 pb-32">
      <div className="m-2">
        <h5 className="text-xl font-bold dark:text-white">Workout Preferences</h5>
      </div>
      <form>
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="flex-1 m-2 mb-6">
            <label
              htmlFor="fitnessGoal"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Fitness Goal
            </label>
            <select
              id="fitnessGoal"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Muscle Building</option>
              <option>Fat Loss</option>
              <option>Endurance Improvement</option>
              <option>Flexibility and Mobility</option>
              <option>Functional Strength</option>
            </select>
          </div>
          <div className="flex-1 m-2 mb-6">
            <div className="">
              <label
                htmlFor="workoutDuration"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Workout Duration (minutes)
              </label>
              <input
                type="number"
                id="workoutDuration"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="eg. 60"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            Choose preferred exercises
          </h3>
          <ul className="grid w-full gap-6 md:grid-cols-3">
            {muscleBuilding.map((item) => {
              return (
                <li key={item}>
                  <input
                    type="checkbox"
                    id={item}
                    value={item}
                    className="hidden peer"
                    required=""
                  />
                  <label
                    htmlFor={item}
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-700">
                    <div className="block flex-1">
                      <div className="w-full  text-3xl font-semibold">
                        <h2 className="text-center capitalize">{item}</h2>
                      </div>
                    </div>
                  </label>
                </li>
              );
            })}
            {/* <li>
              <input
                type="checkbox"
                id="squats"
                value=""
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="squats"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-700">
                <div className="block flex-1">
                  <div className="w-full  text-3xl font-semibold">
                    <h2 className="text-center capitalize">Squats</h2>
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="deadlifts"
                value=""
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="deadlifts"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-700">
                <div className="block flex-1">
                  <div className="w-full  text-3xl font-semibold">
                    <h2 className="text-center capitalize">deadlifts</h2>
                  </div>
                </div>
              </label>
            </li> */}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default WorkoutPreferences;
