import { Sidebar } from "@shared/components/Sidebar";
import { Footer } from "@shared/components/Footer";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="min-h-screen md:flex">
      <Sidebar />
      <div className="flex flex-col flex-1 min-h-screen justify-between p-4 pt-16 md:mx-[10%] max-w-[1200px]">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
