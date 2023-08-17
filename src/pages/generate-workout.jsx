import Form from "components/form";
import TickIcon from "components/icons/tick";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const GenerateWorkout = () => {
  const navigate = useNavigate();
  const handleFormNavigation = (route) => {
    navigate(route);
  };
  return (
    <div className="flex m-8 mt-28">
      <div className="sidebar w-[360px] p-4 pl-8 mr-12 border-r border-gray-400">
        <ol className="relative ">
          <li
            onClick={() => handleFormNavigation("general-info")}
            className="border-l  dark:border-gray-700 p-1 pt-0 border-[#00ba79]">
            <div className="flex flex-col mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3  text-[#00ba79]">
                <TickIcon />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                General Info
              </h3>
              <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Please provide your name, age etc.
              </span>
            </div>
          </li>
          <li
            onClick={() => handleFormNavigation("workout-preferences")}
            className="border-l border-gray-200 dark:border-gray-700 p-1 pt-0">
            <div className="flex flex-col mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 text-gray-400">
                <TickIcon />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Workout Preferences
              </h3>
              <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Customise your workout plan, duration etc.
              </span>
            </div>
          </li>
          <li className="border-l border-gray-200 dark:border-gray-700 p-1 pt-0">
            <div className="flex flex-col mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 text-gray-400">
                <TickIcon />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                Flowbite Application UI v2.0.0
              </h3>
              <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on January 13th, 2022
              </span>
            </div>
          </li>
        </ol>
      </div>
      <div className="flex-1">
        <Form>
          <Outlet />
        </Form>
      </div>
    </div>
  );
};

export default GenerateWorkout;
