import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import "./App.css";
import MainLayout from "layouts/main-layout";
import HomePage from "pages/home-page";
import LandingPage from "pages/landing-page";
import GenerateWorkout from "pages/generate-workout";
import GeneralInfo from "components/general-info";
import WorkoutPreferences from "components/workout-preferences";

const isNewUser = async () => false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: async () => {
      const result = await isNewUser();
      if (result) {
        return redirect("/landing-page");
      }
      return null;
    },
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "generate-workout",
        element: <GenerateWorkout />,
        children: [
          {
            path: "",
            element: <GeneralInfo />,
          },
          {
            path: "general-info",
            element: <GeneralInfo />,
          },
          {
            path: "workout-preferences",
            element: <WorkoutPreferences />,
          },
        ],
      },
    ],
  },
  {
    path: "/landing-page",
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <div className="App bg-gray-800">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
