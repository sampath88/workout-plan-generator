import Navbar from "components/navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div >
      <Navbar />
      <div className="no-scrollbar max-w-7xl mx-auto antialiased overflow-auto h-full scroll-smooth">
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
