import { NavLink } from "react-router-dom";
import SFLogo from "@assets/images/sf-logo.png";
import GithubIcon from "@assets/images/github.svg";
import MailIcon from "@assets/images/mail.svg";
import LinkedInIcon from "@assets/images/linkedin.svg";

const classes = {
  icons: "size-6 transition hover:scale-110",
};

export const Sidebar = () => {
  return (
    <div className="border-r-2 flex flex-row sm:flex-col items-center justify-between border-dotted h-screen py-10">
      <ul className={"flex sm:flex-col text-gray-500 gap-2 text-lg"}>
        <NavLink to={"/"} className="m-8">
          <img src={SFLogo} alt="Sean Flanagan logo" className={"size-16"} />
        </NavLink>
        <NavLink to={"/"} className="pl-8">
          <div>About</div>
        </NavLink>
        <NavLink to={"resume"} className="pl-8">
          <div>Resume</div>
        </NavLink>
        <NavLink to={"blog"} className="pl-8">
          <div>Blog</div>
        </NavLink>
      </ul>

      <ul className="flex flex-row justify-between mx-2">
        <a href="https://github.com/FlanaganSe">
          <img
            src={GithubIcon}
            alt="Link to github"
            className={classes.icons}
          />
        </a>
        <a href="mailto:flanagansean@gmail.com">
          <img
            src={MailIcon}
            alt="Link to send email"
            className={classes.icons}
          />
        </a>
        <a href="https://www.linkedin.com/in/sean-flanagan-b25271b1/">
          <img
            src={LinkedInIcon}
            alt="Link to LinkedIn"
            className={classes.icons}
          />
        </a>
      </ul>
    </div>
  );
};
