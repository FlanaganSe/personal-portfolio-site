import { Sidebar } from "@shared/components/Sidebar";
import { Footer } from "@shared/components/Footer";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="h-screen xsm:flex-col sm:flex">
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 h-full justify-between p-4 pt-16 md:mx-[10%] max-w-[1200px]">
        <div className="h-auto">
          <Outlet />
        </div>
        <div className="h-auto pt-4 dotted-border">
          <Footer />
        </div>
      </div>
    </div>
  );
};
