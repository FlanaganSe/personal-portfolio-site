import { NavLink } from "react-router-dom";
import SFLogo from "../../assets/sf-logo.png";
import GithubIcon from "../../assets/github.svg";
import MailIcon from "../../assets/mail.svg";
import LinkedInIcon from "../../assets/linkedin.svg";

export const Sidebar = () => {
  return (
    <div className="border-r-2 flex flex-col justify-between border-dotted h-full py-10">
      <ul className="flex flex-col font-bold text-gray-400 space-y-4 text-lg">
        <NavLink to={"/"} className="m-8">
          <img src={SFLogo} alt="Sean Flanagan logo" className={"size-16"} />
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

      <ul className="flex flex-row justify-between mx-2">
        <a href="https://github.com/FlanaganSe">
          <img src={GithubIcon} alt="Link to github" className={"size-6"} />
        </a>
        <a href="mailto:flanagansean@gmail.com">
          <img src={MailIcon} alt="Link to send email" className={"size-6"} />
        </a>
        <a href="https://www.linkedin.com/in/sean-flanagan-b25271b1/">
          <img src={LinkedInIcon} alt="Link to LinkedIn" className={"size-6"} />
        </a>
      </ul>
    </div>
  );
};
