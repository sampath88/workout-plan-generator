import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const WorkoutPlan = () => {
  const { activePlan } = useSelector((state) => state.workoutPlan);
  return (
    <div>
      <div className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:dark:bg-gray-700">
                {activePlan.workoutData.days.map((item) => {
                  return (
                    <div
                      key={uuidv4()}
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:dark:bg-violet-400">
                      <h3 className="text-xl font-semibold tracki">
                        {item.day}
                      </h3>
                      <p className="mt-3">{item.describe}</p>
                      <div>
                        {item.steps.map((step) => {
                          return (
                            <p key={uuidv4()} className="mt-3">
                              {step}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
