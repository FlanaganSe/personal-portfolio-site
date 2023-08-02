import { NavLink } from "react-router-dom";
import SFLogo from "../../assets/sf-logo.png";

export const Sidebar = () => {
  console.log(SFLogo);

  return (
    <div className="border-r-2 border-dotted h-full my-10">
      <ul className="flex flex-col font-bold text-gray-500 space-y-4 text-lg">
        <NavLink to={SFLogo} className="m-8">
          <img
            src={SFLogo}
            alt="Sean Flanagan logo"
            className={"bg-contain size-16"}
          />
        </NavLink>
        <NavLink to={""} className="pl-8">
          <div>About</div>
        </NavLink>
        <NavLink to={"resume"} className="pl-8">
          <div>Resume</div>
        </NavLink>
        <NavLink to={"projects"} className="pl-8">
          <div>Projects</div>
        </NavLink>
        <NavLink to={"blog"} className="pl-8">
          <div>Blog</div>
        </NavLink>
      </ul>
    </div>
  );
};
