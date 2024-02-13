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
    <header className="flex md:h-screen md:sticky top-0 gap-8 p-8 md:pt-16 justify-between border-dotted items-center border-b-2 md:border-r-2 md:flex-col md:justify-normal md:border-b-0">
      <NavLink to={"/"}>
        <img
          src={SFLogo}
          alt="Sean Flanagan logo"
          className={"size-20 hover:scale-105 transition"}
        />
      </NavLink>
      <div className="h-full flex flex-col gap-4 justify-between md:items-center">
        <nav className="flex gap-8 justify-between md:flex-col">
          <NavLink to={"/"}>
            <div className="hover:underline transition">About</div>
          </NavLink>
          <NavLink to={"resume"}>
            <div className="hover:underline transition">Resume</div>
          </NavLink>
          <NavLink to={"blog"}>
            <div className="hover:underline transition">Blog</div>
          </NavLink>
          <NavLink to={"now"}>
            <div className="hover:underline transition">Now</div>
          </NavLink>
        </nav>

        <ul className="flex flex-row justify-end gap-4">
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
    </header>
  );
};
