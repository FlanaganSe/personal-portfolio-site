import { Sidebar } from "../../shared/components/Sidebar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="h-screen m-0 flex">
      <div className="flex-none bg-background">
        <Sidebar />
      </div>
      <div className="flex-1 bg-red-100">
        <Outlet />
      </div>
    </div>
  );
};
