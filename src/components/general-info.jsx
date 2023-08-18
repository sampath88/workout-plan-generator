const GeneralInfo = () => {
  return (
    <div className="h-full overflow-auto p-2 pb-32">
      <div className="m-2">
        <h5 class="text-xl font-bold dark:text-white">General Info</h5>
      </div>
      <form>
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="flex-1 m-2 mb-6">
            <div className="">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="eg. John"
                required
              />
            </div>
          </div>
          <div className="flex-1 m-2 mb-6">
            <div className="">
              <label
                for="age"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Age
              </label>
              <input
                type="number"
                id="age"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="eg. 24"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="flex-1 m-2 mb-6">
            <label
              for="gender"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Gender
            </label>
            <select
              id="gender"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex-1 m-2 mb-6">
            <label
              for="fitnessLevel"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Fitness level
            </label>
            <select
              id="fitnessLevel"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
