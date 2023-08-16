import { Outlet } from "react-router-dom";
// import Navbar from "components/navbar";

const MainLayout = () => {
  return (
    <div className="App bg-gray-900 antialiased">
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
};
export default MainLayout;
