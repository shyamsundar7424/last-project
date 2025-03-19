import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="px-8 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <Navbar />
      <div className="mt-20"> {/* Increased margin-top to push content down */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
