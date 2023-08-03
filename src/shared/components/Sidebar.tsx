import { NavLink } from "react-router-dom";
import SFLogo from "../../assets/sf-logo.png";
import GithubIcon from "../../assets/github.svg";
import MailIcon from "../../assets/mail.svg";
import LinkedInIcon from "../../assets/linkedin.svg";

const classes = {
  container:
    "border-r-2 flex flex-col justify-between border-dotted h-full py-10",
  navContainer: "flex flex-col font-bold text-gray-400 space-y-4 text-lg",
  navLink: "pl-8",
};

export const Sidebar = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.navContainer}>
        <NavLink to={"/"} className="m-8">
          <img src={SFLogo} alt="Sean Flanagan logo" className={"size-16"} />
        </NavLink>
        <NavLink to={"/"} className={classes.navLink}>
          <div>About</div>
        </NavLink>
        <NavLink to={"resume"} className={classes.navLink}>
          <div>Resume</div>
        </NavLink>
        <NavLink to={"projects"} className={classes.navLink}>
          <div>Projects</div>
        </NavLink>
        <NavLink to={"blog"} className={classes.navLink}>
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
