import { Outlet } from "react-router-dom";
// import Navbar from "components/navbar";

const MainLayout = () => {
  return (
    <div className="no-scrollbar max-w-7xl mx-auto bg-transparent antialiased overflow-auto h-full scroll-smooth">
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
};
export default MainLayout;


// bg-gradient-to-b from-black to-[#06080A]